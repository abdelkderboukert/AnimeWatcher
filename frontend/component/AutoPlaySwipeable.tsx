"use client";
import React, { useState, useEffect } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { motion } from "framer-motion"; // Correct import

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
type Theme = { url: string; c: string; c2: string };

interface AutoPlaySwipeableProps {
  theme: Theme[];
  onIndexChange: (index: number) => void;
}

const AutoPlaySwipeable = ({
  theme,
  onIndexChange,
}: AutoPlaySwipeableProps) => {
  const [height, setHeight] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setHeight((window.innerHeight * 5) / 6);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prevKey) => prevKey + 1);
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  const handleChangeIndex = (index: number) => {
    setCurrentIndex(index);
    onIndexChange(index);
  };

  return (
    <div>
      <AutoPlaySwipeableViews
        index={currentIndex}
        interval={20000}
        onChangeIndex={handleChangeIndex}
      >
        {theme.map((t: Theme, index: number) => (
          <motion.div
            key={`${index}-${animationKey}`}
            className="h-full rounded-3xl bg-bottom bg-current bg-cover"
            style={{
              backgroundImage: `url("${t.url}")`,
              minHeight: `${height}px`, // Use inline style for dynamic height
            }}
          >
            <motion.div
              initial={{ backdropFilter: "blur(10px)" }}
              animate={{ backdropFilter: "blur(0px)" }}
              transition={{ duration: 1 }}
              className="size-full"
            ></motion.div>
          </motion.div>
        ))}
      </AutoPlaySwipeableViews>
    </div>
  );
};

export default AutoPlaySwipeable;

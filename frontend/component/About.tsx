import React from "react";
import * as motion from "motion/react-client";

function About() {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };
  return (
    <section
      id="about"
      className="w-full h-screen flex flex-col justify-center items-center"
    >
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        className="text-3xl sm:text-7xl font-bold mb-8"
      >
        {" "}
        About US
      </motion.h1>
      <motion.p
        variants={variants}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        className="text-slate-300 text-center items-center flex sm:w-1/2"
      >
        Explore the vibrant world of anime with our web app! Dive into endless
        collections, discover trending series, create watchlists, and connect
        with fans globally. Your ultimate anime experience starts here.
      </motion.p>
    </section>
  );
}

export default About;

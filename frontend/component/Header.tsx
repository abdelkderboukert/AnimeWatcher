"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Ensure you have framer-motion installed

const Header = () => {
  const Links = [
    { name: "Home", url: "/" },
    { name: "Anime", url: "/anime" },
    { name: "Movie", url: "/movies" },
    { name: "Manga", url: "/manga" },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsOpen(false);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize); // Update on resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);

  return (
    <header
      className={`text-white font-bold p-4 fixed w-full z-50 ${
        isOpen ? "divBlur" : ""
      }`}
    >
      <div className="container mx-auto flex  items-center">
        <h1 className="text-xl font-bold text-white mr-auto">My Website</h1>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white flex ml-auto mr-0 focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <nav className={`md:flex ${isOpen ? "block" : "hidden"} md:block`}>
          <motion.ul
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.5,
                },
              },
            }}
            initial="hidden"
            animate="show"
            className={`flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 md:items-center ${
              isOpen ? "absolute top-16 left-0 w-full divBlur" : ""
            }`}
          >
            {Links.map((item) => (
              <motion.li
                variants={{
                  hidden: { y: 48, opacity: 0 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      staggerChildren: 0.25,
                    },
                  },
                }}
                key={item.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`relative group rounded-lg overflow-hidden${
                  isOpen ? " divBlur" : ""
                }`}
              >
                {!isOpen ? (
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                ) : null}
                <a
                  href={item.url}
                  className="relative z-10 hover:text-green-300 px-4 py-2"
                  onClick={() => setIsOpen(false)} // Close mobile menu on link click
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

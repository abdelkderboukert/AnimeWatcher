import React from "react";
import * as motion from "motion/react-client";
import Header from "@/component/Header";

function Main() {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };
  return (
    <section className="bg-bannerImg bg-repeat bg-cover bg-bottom">
      <Header />
      <div className="w-full h-screen items-end bg-blackOverlay gap-1 grid grid-rows-2 sm:grid-rows-none sm:grid-cols-2">
        <div className="row-start-2 sm:row-start-auto sm:col-start-1 h-full flex w-full divBlur justify-start items-center p-5">
          <div className="flex flex-col">
            <h1 className="text-4xl sm:text-7xl font-semibold">
              Anime&nbsp;Watcher
            </h1>
            <motion.p
              variants={variants}
              initial="hidden"
              whileInView="visible"
              exit="exit"
              className="sm:text-2xl text-gray-500"
            >
              Welcom in
            </motion.p>
            <br />
            <motion.h1
              variants={variants}
              initial="hidden"
              whileInView="visible"
              exit="exit"
              className=" text-2xl sm:text-5xl text-white font-bold"
            >
              My Website
            </motion.h1>
            <br />
            <motion.p
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="sm:text-2xl text-gray-500"
            >
              Where Anime Comes Alive
            </motion.p>
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              exit="exit"
              className="h-16 w-full grid grid-cols-2 space-x-3 gap-3 justify-center items-center mt-3"
            >
              <motion.div
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                className="w-full h-3/4 col-start-1 bg-green-600 dark:bg-black rounded-lg flex justify-center items-center"
              >
                Contect us &nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#D9D9D9"
                >
                  <path d="M280-280q-33 0-56.5-23.5T200-360v-400q0-33 23.5-56.5T280-840h560q33 0 56.5 23.5T920-760v400q0 33-23.5 56.5T840-280H280Zm280-188L280-663v303h560v-303L560-468Zm0-98 280-194H280l280 194ZM120-120q-33 0-56.5-23.5T40-200v-500h80v500h660v80H120Zm720-546v-94H280v94-94h560v94Z" />
                </svg>
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                className="w-full h-3/4 col-start-2 bg-black rounded-lg flex justify-center items-center"
              >
                Report &nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#D9D9D9"
                >
                  <path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="sm:col-start-2 h-full w-full"></div>
      </div>
    </section>
  );
}

export default Main;

import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="relative w-fit flex items-center justify-center overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar h-[90%] scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        <article
          className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
    w-[300px] h-[650px] md:w-[700px] md:h-[600px]  xl:h-[600px] snap-center bg-[#292929] p-5 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
        >
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-32 h-32 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center"
            src="data:image/png;base64,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"
            alt="Image"
          />
          <div className="px-0 md:px-5">
            <h4 className="text-2xl md:text-4xl font-light text-center">
              Internship at SESAP
            </h4>
            <p className="font-bold text-2xl mt-1 text-center">
              Fullstack Developer
            </p>
            <div className="flex items-center justify-center space-x-2 my-2">
              <img
                className="h-7 w-7 md:h-10 md:w-10 rounded-full"
                src="https://cdn-icons-png.flaticon.com/512/1532/1532556.png"
                alt=""
              />
              <img
                className="h-7 w-7 md:h-10 md:w-10 rounded-full"
                src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
                alt=""
              />
              <img
                className="h-7 w-7 md:h-10 md:w-10 rounded-full"
                src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg"
                alt=""
              />
              <img
                className="h-7 w-7 md:h-10 md:w-10 rounded-full"
                src="https://cdn-icons-png.flaticon.com/512/5968/5968332.png"
                alt=""
              />
              <img
                className="h-7 w-7 md:h-10 md:w-10 rounded-full"
                src="https://cdn.iconscout.com/icon/free/png-256/laravel-226015.png"
                alt=""
              />
              <img
                className="h-7 w-7 md:h-10 md:w-10 rounded-full"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
                alt=""
              />
              <img
                className="h-7 w-7 md:h-10 md:w-10 rounded-full"
                src="https://cdn.worldvectorlogo.com/logos/jquery-1.svg"
                alt=""
              />
            </div>
            <p className="uppercase py-3 text-gray-300 text-center">
              August 2022 - Moment
            </p>
            <ul className="list-disc space-y-4 ml-5 text-lg">
              <li>Developed systems for the sectors of SESAP.</li>
              <li>
                Maintained legacy codes, correcting errors and adding new
                functions.
              </li>
              <li>
                Creation of documentation for systems maintained by UGTSIC.
              </li>
            </ul>
          </div>
        </article>
        
      </div>
    </motion.div>
  );
}

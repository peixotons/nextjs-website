import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

export default function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -100 : 100, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="https://imgix.prensa.li/https%3A%2F%2Fstatic.prensa.li%2Fstories%2Fc2%2F66%2Ff1%2F74%2Fc266f174-8f7a-4472-bbf7-465ecbf786cb.png?fit=crop&max-h=450&mh=450&w=800&s=eb2bf89a26705c3ab104f9a12cd6c770"
        className="rounded-full border border-gray-500 object-cover w-16 h-16 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="md:text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
      <motion.img
        initial={{ x: directionLeft ? -100 : 100, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="https://imgix.prensa.li/https%3A%2F%2Fstatic.prensa.li%2Fstories%2Fc2%2F66%2Ff1%2F74%2Fc266f174-8f7a-4472-bbf7-465ecbf786cb.png?fit=crop&max-h=450&mh=450&w=800&s=eb2bf89a26705c3ab104f9a12cd6c770"
        className="rounded-full border border-gray-500 object-cover w-16 h-16 md:w-28 md:h-28 xl:w-32 xl:h-32 filter hover:grayscale"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="md:text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}

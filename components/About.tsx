import React from "react";
import { motion } from "framer-motion";

//https://avatars.githubusercontent.com/u/65079483?s=400&u=388846a8a79a4211adec28eecea6a3e28d9d3163&v=4

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[15px] text-gray-500 text-[20px] text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://avatars.githubusercontent.com/u/65079483?s=400&u=388846a8a79a4211adec28eecea6a3e28d9d3163&v=4"
        className="-mb-[140px] w-[200px] md:mb-0 flex-shrink-0 w-55 h-55 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[400px]"
      />
      <div className="space-y-10 px-0 md:px-10 mt-5">
        <h4 className="text-2xl md:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ipsa
          vitae id explicabo sapiente. Eos necessitatibus et praesentium sint
          distinctio optio? Voluptas aspernatur quod reiciendis. Voluptas non
          enim omnis quisquam!
        </p>
      </div>
    </motion.div>
  );
}

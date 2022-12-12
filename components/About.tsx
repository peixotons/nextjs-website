import React from "react";
import { motion } from "framer-motion";
import { FcApproval } from "react-icons/fc";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-5 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[15px] text-gray-500 text-[20px] text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://scontent.fnat16-1.fna.fbcdn.net/v/t1.6435-9/30440729_926810967443962_4697513612623740928_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=19026a&_nc_eui2=AeHnoFntN4pPT846pglqd-QpHJAhEIX5ITEckCEQhfkhMWZemBMU5PwZvMbJSPSx20FxZa1VGthGtCHaakDD6ric&_nc_ohc=UsDK5fJYhtsAX-pm_6M&_nc_ht=scontent.fnat16-1.fna&oh=00_AfAOFyR6H3iSUcl6fXKOl4D21u-d57XIFoRgVzY7bYJfkw&oe=63BC7358"
        className="-mb-[140px] w-fit h-[100px] md:mb-0 flex-shrink-0 w-55 h-55 rounded object-cover
        md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[400px]"
      />
      <div className="space-y-4 md:space-y-7 px-0 md:px-10">
        <h4 className="text-[20px] md:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]/50">little</span>{" "}
          background
        </h4>
        <div className="grid grid-cols-3 gap-2 md:grid-cols-3 md:gap-4">
          <div className="flex items-center gap-1">
            <FcApproval />
            ReactJS
          </div>
          <div className="flex items-center gap-1">
            <FcApproval />
            VueJS
          </div>
          <div className="flex items-center gap-1">
            <FcApproval />
            Javascript
          </div>
          <div className="flex items-center gap-1">
            <FcApproval />
            Tailwind
          </div>
          <div className="flex items-center gap-1">
            <FcApproval />
            PHP
          </div>
          <div className="flex items-center gap-1">
            <FcApproval />
            Laravel
          </div>
        </div>
        <p className="text-justify text-[14px] md:text-2xl">
          Hello, my name is Gabriel and I started studying programming in 2018
          when{" "}
          <span className="underline decoration-[#f7ab0a]">i was curious</span>{" "}
          to make a website to showcase products from my mother&apos;s store.
          <br />
          <br />
          In 2022 I had the opportunity to enter the programming area and after
          a few months in the area{" "}
          <span className="underline decoration-[#f7ab0a]">
            I knew I had made the right choice
          </span>
          , I started to have confidence and be able to <span className="underline decoration-[#f7ab0a]">solve problems</span> that I
          didn&apos;t even come close to before.
        </p>
      </div>
    </motion.div>
  );
}

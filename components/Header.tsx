import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://linkedin.com/in/gabrielpeixe"
          fgColor="#0e76a8 "
          bgColor="transparent"
          className="hover:opacity-60"
        />
        <SocialIcon
          url="https://github.com/peixotons"
          fgColor="#bd2c00"
          bgColor="transparent"
          className="hover:opacity-60"
        />
        <SocialIcon
          url="https://instagram.com/gabrielze02/"
          fgColor="#E4405F"
          bgColor="transparent"
          className="hover:opacity-60"
        />
        <SocialIcon
          url="https://twitter.com/Peixotons"
          fgColor="#1DA1F2"
          bgColor="transparent"
          className="hover:opacity-60"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer hover:opacity-60"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get in Touch
        </p>
      </motion.div>
    </header>
  );
}

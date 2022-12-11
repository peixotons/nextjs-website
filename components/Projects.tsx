import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar h-[90%] scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 h-screen">
          <motion.img
            initial={{ y: -200, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src="https://i.ibb.co/jy6p3KD/reactcripto.png"
            alt="Image Project"
            className="-mb-[20px] w-[400px] md:mb-0 flex-shrink-0 w-55 h-55 object-cover
              md:rounded-lg md:w-[500px] xl:w-[600px] xl:h-[500px] animate-pulse"
          />
          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-2xl md:text-4xl font-semibold text-center">
              React Cripto{" "}
              <span className="underline decoration-[#f7ab0a]/50">
                Website
              </span>
            </h4>
            <div className=" text-center space-x-5">
              <div className="bg-[#f7ab0a] hover:bg-[#f7ab0a]/50 text-white font-bold py-1 px-2 rounded-full inline-flex items-center">
                <SocialIcon
                  style={{ height: 40, width: 40 }}
                  url="https://peixotons.github.io/react-api-crypto/"
                  network="sharethis"
                  fgColor="#1DA1F2"
                  bgColor="transparent"
                />

                <a href="https://peixotons.github.io/react-api-crypto/">
                  Demo
                </a>
              </div>
              <div className="bg-[#f7ab0a] hover:bg-[#f7ab0a]/50 text-white font-bold py-1 px-2 rounded-full inline-flex items-center">
                <SocialIcon
                  style={{ height: 40, width: 40 }}
                  url="https://github.com/peixotons/react-api-crypto"
                  fgColor="#bd2c00"
                  bgColor="transparent"
                />
                <a href="https://github.com/peixotons/react-api-crypto">Github</a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 h-screen">
          <motion.img
            initial={{ y: -200, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src="https://i.ibb.co/qNrhyPL/contactbook.png"
            alt="Image Project"
            className="-mb-[20px] w-[400px] md:mb-0 flex-shrink-0 w-55 h-55 object-cover
              md:rounded-lg md:w-[700px] xl:w-[800px] xl:h-[400px] animate-pulse"
          />
          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-2xl md:text-4xl font-semibold text-center">
              Contact Book in{" "}
              <span className="underline decoration-[#f7ab0a]/50">
                Laravel 9
              </span>
            </h4>
            <div className=" text-center space-x-5">
              <div className="bg-[#f7ab0a] hover:bg-[#f7ab0a]/50 text-white font-bold py-1 px-2 rounded-full inline-flex items-center">
                <SocialIcon
                  style={{ height: 40, width: 40 }}
                  url="https://www.linkedin.com/feed/update/urn:li:activity:7002479320912801792/"
                  network="sharethis"
                  fgColor="#1DA1F2"
                  bgColor="transparent"
                />

                <a href="https://www.linkedin.com/feed/update/urn:li:activity:7002479320912801792/">
                  Demo
                </a>
              </div>
              <div className="bg-[#f7ab0a] hover:bg-[#f7ab0a]/50 text-white font-bold py-1 px-2 rounded-full inline-flex items-center">
                <SocialIcon
                  style={{ height: 40, width: 40 }}
                  url="https://github.com/peixotons/laravel-9-crud"
                  fgColor="#bd2c00"
                  bgColor="transparent"
                />
                <a href="https://github.com/peixotons/laravel-9-crud">Github</a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 h-screen">
          <motion.img
            initial={{ y: -200, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src="https://i.ibb.co/XL3Dm0t/quotegenerator.png"
            alt="Image Project"
            className="-mb-[20px] w-[400px] md:mb-0 flex-shrink-0 w-55 h-55 object-cover
              md:rounded-lg md:w-[700px] xl:w-[800px] xl:h-[400px] animate-pulse"
          />
          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-2xl md:text-4xl font-semibold text-center">
              Quote{" "}
              <span className="underline decoration-[#f7ab0a]/50">
                Generator
              </span>
            </h4>
            <div className=" text-center space-x-5">
              <div className="bg-[#f7ab0a] hover:bg-[#f7ab0a]/50 text-white font-bold py-1 px-2 rounded-full inline-flex items-center">
                <SocialIcon
                  rel="noreferrer"
                  target="_blank"
                  style={{ height: 40, width: 40 }}
                  url="https://peixotons.github.io/quote-generator/"
                  network="sharethis"
                  fgColor="#1DA1F2"
                  bgColor="transparent"
                />
                <a
                  href="https://peixotons.github.io/quote-generator/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Demo
                </a>
              </div>
              <div className="bg-[#f7ab0a] hover:bg-[#f7ab0a]/50 text-white font-bold py-1 px-2 rounded-full inline-flex items-center">
                <SocialIcon
                  rel="noreferrer"
                  target="_blank"
                  style={{ height: 40, width: 40 }}
                  url="https://github.com/peixotons/quote-generator"
                  fgColor="#bd2c00"
                  bgColor="transparent"
                />
                <a
                  href="https://github.com/peixotons/quote-generator"
                  rel="noreferrer"
                  target="_blank"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;

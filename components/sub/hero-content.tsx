"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { Fire } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";
import { Typewriter } from "react-simple-typewriter";
import { DiscordLogo } from "./DiscordLogo.jsx";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 mt-16 md:mt-40 w-full z-[20]"
    >
      {/* Left Content */}
      <div className="w-full flex flex-col gap-5 justify-center m-auto text-center md:text-start">
        {/* Role Box */}
        <motion.div
          variants={slideInFromTop}
          className="flex items-center justify-center md:justify-start gap-2 py-[6px] px-[6px] border border-[#7042f88b] opacity-[0.9] rounded-lg max-w-fit mx-auto md:mx-0"
        >
          <SparklesIcon className="text-[#b49bff] h-4 w-4 md:h-5 md:w-5" />
          <h1 className="text-[12px] md:text-[13px] text-gray-200 font-semibold">
            Advanced Script Developer
          </h1>
        </motion.div>

        {/* Hero Heading */}
        <motion.h1
          variants={slideInFromLeft(0.5)}
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-white max-w-[600px] leading-tight"
        >
          We Build Scripts That Perform{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Every Time
          </span>{" "}
          For{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Everyone
          </span>
        </motion.h1>

        {/* Typing Effect */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg sm:text-xl text-gray-400 font-medium max-w-[600px] mx-auto md:mx-0 min-h-[40px]"
        >
          <Typewriter
            words={[
              "Fast Execution",
              "Continuous Improvement",
              "User-Friendly Interface",
              "Optimized Performance",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </motion.p>

        {/* Custom Learn More Button with Discord and Gradient Shape */}
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex max-w-[280px] mx-auto md:mx-0 gap-4 cursor-pointer select-none"
          onClick={() => window.open("https://discord.gg/your-server", "_blank")}
        >
          {/* Left: Discord Logo + Text */}
          <div className="flex items-center gap-2 bg-[#5865F2] px-4 py-2 rounded-lg shadow-md hover:bg-[#4752c4] transition-colors">
            <DiscordLogo className="w-6 h-6" />
            <span className="text-white font-semibold">Join Our Discord</span>
          </div>

          {/* Right: Gradient Shape + Fire Icon + Text */}
          <div
            className="flex items-center gap-2 px-5 py-2 rounded-lg
              bg-gradient-to-r from-purple-900 via-black to-blue-900
              hover:from-blue-900 hover:via-purple-900 hover:to-black
              transition-colors duration-300 shadow-md"
          >
            <Fire className="w-5 h-5 text-orange-400" />
            <span className="text-white font-semibold">Get Yours</span>
          </div>
        </motion.div>
      </div>

      {/* Right Side Image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full flex justify-center items-center mt-8 md:mt-0"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={400}
          width={400}
          draggable={false}
          className="select-none drop-shadow-lg sm:h-[450px] sm:w-[450px] md:h-[500px] md:w-[500px]"
        />
      </motion.div>
    </motion.div>
  );
};

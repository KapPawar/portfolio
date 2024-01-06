"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      id="home"
      className="scroll-mt-[100rem] mb-28 max-w-[50rem] text-center sm:mb-0"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/assets/profile.png"
              width={192}
              height={192}
              alt="profile"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover
            shadow-xl"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="absolute bottom-0 right-0 text-4xl "
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
      >
        <span className="font-bold">Hello, I&#39;m Kapil.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">4.5 years</span> of experience. I&#39;m
        passionate about crafting{" "}
        <span className="italic">high-quality sites and applications</span>. My
        focus is <span className="underline">React (Next.js)</span> and{" "}
        <span className="underline">Python</span>.
      </motion.h1>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.1,
        }}
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4
      text-lg font-medium"
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2
          rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950
          active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2
          rounded-full outline-none focus:scale-110 hover:scale-110 
          active:scale-105 transition cursor-pointer borderblack
          dark:bg-white/10 dark:text-white/60"
          href="/assets/Kapil_Shyam_Pawar_Resume.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2
          rounded-full focus:scale-[1.15]  hover:scale-[1.15] hover:text-gray-950
          active:scale-105 transition cursor-pointer borderblack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/kapilshyampawar/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2
          rounded-full text-[1.35rem] focus:scale-[1.15]  hover:scale-[1.15] hover:text-gray-950 
          active:scale-105 transition cursor-pointer borderblack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/KapPawar"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;

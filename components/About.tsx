"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About", 0.75);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.175,
      }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I&#39;m currently pursuing MS in{" "}
        <span className="font-medium">Computer Science.</span>{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, MongoDB, and Android Development
        </span>
        . I&#39;m also familiar with TypeScript, Prisma and Python. I&#39;m
        always looking to learn new technologies. I&#39;m currently looking for
        an <span className="font-medium">Internship</span> as a Software
        Engineer.
      </p>

      <p>
        <span className="italic">When I&#39;m not coding</span>, I enjoy playing
        video games and exploring new places. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I&#39;m
        currently learning how to play the guitar.
      </p>
    </motion.section>
  );
};

export default About;

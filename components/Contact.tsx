"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./SubmitButton";
import toast from "react-hot-toast";

const Contact = () => {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 scroll-mt-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:kxp5534@mavs.uta.edu">
          kxp5534@mavs.uta.edu
        </a>{" "}
        or through the form below.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const error = (await sendEmail(formData)) as string;
          if (error) {
            toast.error(error);
            return;
          } else {
            toast.success("Message sent successfully!");
          }
        }}
      >
        <input
          name="sender"
          type="email"
          className="h-14 px-4 rounded-lg borderblack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your email"
          required
          maxLength={500}
        />
        <textarea
          name="message"
          className="h-52 p-4 my-3 rounded-lg borderblack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
};

export default Contact;

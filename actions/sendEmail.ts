"use server";
import { validatetring } from "@/lib/utils";
import { Resend } from "resend";
import ContactEmail from "@/components/ContactEmail";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const sender = formData.get("sender");
  const messsage = formData.get("message");

  if (!validatetring(sender, 500)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validatetring(messsage, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  const { error } = await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: ["kxp5534@mavs.uta.edu"],
    subject: "Message from contact form",
    reply_to: sender as string,
    react: React.createElement(ContactEmail, {
      message: messsage as string,
      sender: sender as string,
    }),
  });

  if (error) {
    return error.message;
  }
};

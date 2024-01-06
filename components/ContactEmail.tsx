import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type EmailProps = {
  message: string;
  sender: string;
};

const ContactEmail = ({ message, sender }: EmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderblack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                Message from your portfolio
              </Heading>
              <Hr />
              <Text>{message}</Text>
              <Hr />
              <Text>Sender's email: {sender}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>{" "}
    </Html>
  );
};

export default ContactEmail;

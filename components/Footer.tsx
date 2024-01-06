import React from "react";

const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 Kapil S Pawar. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Rounter & Server Actions), TypeScript, Tailwind
        CSS, Framer Motion, React Email, Resend, and Vercel Hosting.
      </p>
    </footer>
  );
};

export default Footer;

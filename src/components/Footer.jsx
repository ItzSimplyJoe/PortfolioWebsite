import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-6 mt-10">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <a
            href="https://www.linkedin.com/in/joe-bostock-300a40243"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-600 mx-4"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="https://github.com/itzsimplyjoe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 mx-4"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://wa.me/07538422592"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-600 mx-4"
          >
            <FaWhatsapp size={32} />
          </a>
        </div>
        <p className="text-white text-opacity-75 text-sm">
          &copy; {new Date().getFullYear()} Joe Bostock. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;


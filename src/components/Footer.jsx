import React from "react";
import instagramIcon from "../assets/instagram.svg";
import twitterIcon from "../assets/twitter.svg";
import facebookIcon from "../assets/facebook.svg";

const Footer = () => {
  return (
    <footer className="bg-white/30 backdrop-blur-md border-t border-white/20 text-gray-800 py-8 px-4 text-center rounded-t-xl shadow-[0_0_30px_rgba(255,255,255,0.1)]">
      <div className="flex flex-col items-center gap-3">
        <h2 className="text-lg md:text-xl tracking-widest font-orbitron text-white drop-shadow-sm">
          ⧉ INDΛR SƱTHΛR | 3D INTERFACE
        </h2>
        <p className="text-sm md:text-base font-light tracking-wide text-white/80">
          © {new Date().getFullYear()} • Designed for the future, built in the present.
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-gray-800 hover:text-blue-500 transition duration-300"
          >
            <img
              src={twitterIcon}
              alt="Twitter"
              className="w-5 h-5 group-hover:scale-110 transition"
            />
            <span className="hidden sm:inline-block text-white/60 font-medium tracking-wide">Twitter</span>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-gray-800 hover:text-blue-600 transition duration-300"
          >
            <img
              src={facebookIcon}
              alt="Facebook"
              className="w-5 h-5 group-hover:scale-110 transition"
            />
            <span className="hidden sm:inline-block text-white/60 font-medium tracking-wide">Facebook</span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-gray-800 hover:text-pink-500 transition duration-300"
          >
            <img
              src={instagramIcon}
              alt="Instagram"
              className="w-5 h-5 group-hover:scale-110 transition"
            />
            <span className="hidden sm:inline-block text-white/60 font-medium tracking-wide">Instagram</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

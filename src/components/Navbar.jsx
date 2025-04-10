import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { close, menu } from "../assets";
import { navLinks } from "../data";

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("div[id]");
    const observer = new IntersectionObserver(
      (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
        setActive(entry.target.id);
        }
      });
      },
      {
      threshold: 0.3,
      rootMargin: '0px 0px -40% 0px'
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav
      className="w-full flex justify-between items-center from-black p-8 sm:px-16 sm:py-10 fixed top-0 z-40 pointer-events-none"
    >
      <div className='w-full flex justify-between items-start mx-auto'>
        <Link
          to='/'
          className="text-2xl font-bold text-blue-400 hover:text-blue-500 transition duration-300 flex items-center"
          onClick={() => {
            setActive("hero");
            window.scrollTo(0, 0);
            }}
            >
            <p className='text-blue text-[26px] lg:text-[36px] font-extrabold pointer-events-auto cursor-pointer flex transition-transform transform hover:scale-105'>
            ⧉ <span className=""> &lt;</span>Portfolio.3D <span className="">/&gt;</span>😎
            </p>
            </Link>

            <ul className='list-none hidden sm:flex flex-row gap-8'>
            {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`relative flex items-center ${
              active === nav.id ? "text-white" : "text-slate-400"
              } hover:text-white text-[18px] lg:text-[24px] font-semibold pointer-events-auto cursor-pointer transition-colors duration-300`}
              onClick={() => setActive(nav.id)}
            >
              {active === nav.id && (
              <div className="absolute -bottom-2 left-0 w-full h-[3px] bg-quaternary rounded-full"></div>
              )}
              <a href={`#${nav.id}`} className="hover:underline">
              {nav.title}
              </a>
            </li>
            ))}
            </ul>

            <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain pointer-events-auto cursor-pointer transition-transform transform hover:rotate-90'
            onClick={() => setToggle(!toggle)}
            />
            
            <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-30 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg`}
            >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
              <li
              key={nav.id}
              className={`font-poppins font-medium cursor-pointer text-[16px] ${
              active === nav.id ? "text-quaternary" : "text-secondary"
              } hover:text-quaternary transition-colors duration-300`}
              onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.id);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
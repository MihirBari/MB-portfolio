import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-4 fixed top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050816]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-3 group'
          onClick={() => {
            setActive("");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className='relative w-10 h-10 rounded-full p-[2px] bg-gradient-to-tr from-[#915EFF] via-[#00f0ff] to-[#ec4899] transition-transform duration-300 group-hover:scale-105'>
            <div className='w-full h-full rounded-full bg-[#050816] flex items-center justify-center overflow-hidden'>
              <img src={logo} alt='logo' className='w-7 h-7 object-contain' />
            </div>
          </div>
          <div>
            <p className='text-white text-[18px] font-bold cursor-pointer flex items-center tracking-tight'>
              MIHIR BARI
              <span className='ml-2 text-xs font-normal text-[#00f0ff] px-2 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 hidden sm:inline-block'>
                AI & Full Stack
              </span>
            </p>
          </div>
        </Link>

        <div className='hidden md:flex items-center gap-8'>
          <ul className='list-none flex flex-row items-center gap-2 p-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md'>
            {navLinks.map((nav) => {
              const isActive = active === nav.title;
              return (
                <li
                  key={nav.id}
                  className={`px-4 py-1.5 rounded-full text-[14px] font-medium transition-all duration-250 cursor-pointer ${
                    isActive
                      ? "text-white bg-white/10 shadow-[0_0_15px_rgba(145,94,255,0.3)] border border-white/10"
                      : "text-secondary hover:text-white hover:bg-white/[0.05]"
                  }`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              );
            })}
          </ul>

          <a
            href='#projects'
            className='relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-[#915EFF]/20 to-[#00f0ff]/20 border border-[#00f0ff]/40 text-white hover:border-[#00f0ff] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300'
          >
            <span className='w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse' />
            Featured MCP AI
          </a>

          <a
            href='#contact'
            className='px-5 py-2 rounded-full text-[14px] font-semibold text-white bg-gradient-to-r from-[#915EFF] to-[#7000ff] hover:shadow-[0_0_25px_rgba(145,94,255,0.6)] transition-all duration-300'
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className='md:hidden flex flex-1 justify-end items-center'>
          <div
            className='w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex justify-center items-center cursor-pointer hover:bg-white/10 transition-colors'
            onClick={() => setToggle(!toggle)}
          >
            <img
              src={toggle ? close : menu}
              alt='menu'
              className='w-5 h-5 object-contain'
            />
          </div>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-[#100d25]/95 backdrop-blur-2xl border border-white/10 absolute top-20 right-0 mx-4 my-2 min-w-[200px] z-50 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)]`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4 w-full'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`w-full font-medium cursor-pointer text-[16px] py-1 transition-colors ${
                    active === nav.title
                      ? "text-white font-bold pl-2 border-l-2 border-[#915EFF]"
                      : "text-secondary hover:text-white"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`} className='block w-full'>
                    {nav.title}
                  </a>
                </li>
              ))}
              <li className='w-full pt-2 border-t border-white/10'>
                <a
                  href='#projects'
                  onClick={() => setToggle(false)}
                  className='block text-center py-2 px-3 rounded-lg text-xs font-semibold bg-gradient-to-r from-[#915EFF]/20 to-[#00f0ff]/20 border border-[#00f0ff]/40 text-[#00f0ff]'
                >
                  ⭐ Son of Anton (MCP AI)
                </a>
              </li>
              <li className='w-full'>
                <a
                  href='#contact'
                  onClick={() => setToggle(false)}
                  className='block text-center py-2 px-3 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-[#915EFF] to-[#7000ff]'
                >
                  Let's Connect
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
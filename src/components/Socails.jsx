import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import git from "../assets/tech/github.png";
import li from "../assets/tech/linked.png";
import insta from "../assets/tech/Insta.png";
import { fadeIn } from "../utils/motion";

const socialLinks = [
  {
    name: "GitHub",
    icon: git,
    url: "https://github.com/MihirBari",
    description: "Explore Open Source Repos",
  },
  {
    name: "LinkedIn",
    icon: li,
    url: "https://www.linkedin.com/in/mihir-bari/",
    description: "Connect Professionally",
  },
  {
    name: "Instagram",
    icon: insta,
    url: "https://www.instagram.com/mihirbari.mb/",
    description: "Follow on Instagram",
  },
];

const Socails = () => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.2, 0.75)}
      className='flex flex-col items-center justify-center pt-8 pb-4'
    >
      {/* Floating social dock */}
      <div className='flex items-center gap-4 px-6 py-3 rounded-2xl bg-[#100d25]/80 backdrop-blur-xl border border-white/10 shadow-glass'>
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target='_blank'
            rel='noopener noreferrer'
            title={`${social.name} – ${social.description}`}
            className='relative group p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/15 border border-white/10 hover:border-[#00f0ff]/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] flex items-center justify-center'
          >
            <img
              src={social.icon}
              alt={social.name}
              className='w-6 h-6 object-contain filter group-hover:brightness-125 transition-all'
            />
          </a>
        ))}

        <a
          href='mailto:barimihir23@gmail.com'
          title='Send Email to Mihir'
          className='px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-gradient-to-r hover:from-[#915EFF] hover:to-[#7000ff] border border-white/10 text-xs font-semibold text-white transition-all duration-300'
        >
          ✉ Email Me
        </a>
      </div>

      <div className='mt-8 text-center text-xs text-secondary/70'>
        <p>© {new Date().getFullYear()} Mihir Bari. All Rights Reserved.</p>
        <p className='mt-1 text-[11px] text-secondary/50'>
          Engineered with React 18, Three.js, Model Context Protocol & Tailwind CSS
        </p>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Socails, "");

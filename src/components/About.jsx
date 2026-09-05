import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, subtitle, icon, badge }) => (
  <Tilt
    options={{
      max: 30,
      scale: 1.02,
      speed: 400,
    }}
    className='xs:w-[280px] w-full'
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.3, 0.75)}
      className='w-full p-[1px] rounded-[24px] bg-gradient-to-b from-white/20 via-[#915EFF]/20 to-transparent hover:from-[#00f0ff]/50 hover:to-[#915EFF]/50 transition-all duration-500 shadow-glass group'
    >
      <div className='bg-[#100d25]/90 backdrop-blur-xl rounded-[23px] py-8 px-6 min-h-[310px] flex flex-col justify-between items-center text-center transition-all duration-300 group-hover:bg-[#151030]/90'>
        {badge && (
          <span className='px-3 py-1 rounded-full text-[11px] font-semibold bg-white/5 border border-white/10 text-[#00f0ff] mb-2'>
            {badge}
          </span>
        )}

        <div className='relative w-20 h-20 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center p-3 my-2 group-hover:border-[#915EFF]/50 group-hover:shadow-[0_0_20px_rgba(145,94,255,0.3)] transition-all duration-300'>
          <img
            src={icon}
            alt={title}
            className='w-12 h-12 object-contain transform group-hover:scale-110 transition-transform duration-300'
          />
        </div>

        <div>
          <h3 className='text-white text-[19px] font-bold tracking-tight'>
            {title}
          </h3>
          {subtitle && (
            <p className='mt-2 text-secondary text-[13px] leading-relaxed'>
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#915EFF] mb-2'>
          <span>About Me</span>
        </div>
        <h2 className={styles.sectionHeadText}>Engineering Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[16px] sm:text-[17px] max-w-3xl leading-[30px]'
      >
        I am an Associate Engineer and Full Stack Developer specialized in building 
        <span className='text-white font-semibold'> Model Context Protocol (MCP)</span> AI platforms, 
        enterprise automation systems, and high-performance web applications. My core expertise bridges 
        the worlds of modern frontend engineering (<span className='text-[#00f0ff]'>React, Tailwind, Three.js</span>), 
        production backend systems (<span className='text-purple-300'>Node.js, Express, SQL/MySQL</span>), and cutting-edge agentic 
        AI architectures (<span className='text-pink-400'>Anthropic MCP SDK, Ollama, ChromaDB RAG, SolarWinds & BigFix APIs</span>).
      </motion.p>

      <div className='mt-16 flex flex-wrap gap-7 justify-center sm:justify-start'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

const Tech = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "AI & Tools",
    "Frontend",
    "Backend",
    "Database",
    "Languages",
  ];

  const filteredTechnologies =
    activeCategory === "All"
      ? technologies
      : technologies.filter((tech) => tech.category === activeCategory);

  return (
    <>
      <motion.div variants={textVariant()}>
        <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#00f0ff] mb-2'>
          <span>Skills & Tooling</span>
        </div>
        <h2 className={`${styles.sectionHeadText}`}>Technical Stack.</h2>
        <p className='mt-2 text-secondary text-sm sm:text-base max-w-2xl'>
          Proficiencies spanning autonomous agent protocols, distributed backend services,
          modern frontend frameworks, and vector databases.
        </p>
      </motion.div>

      {/* Categories Filter */}
      <motion.div
        variants={fadeIn("up", "spring", 0.1, 0.6)}
        className='mt-8 flex flex-wrap gap-2.5 items-center'
      >
        {categories.map((cat) => {
          const count =
            cat === "All"
              ? technologies.length
              : technologies.filter((t) => t.category === cat).length;

          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
                activeCategory === cat
                  ? "bg-white/15 text-white border border-[#915EFF] shadow-[0_0_12px_rgba(145,94,255,0.4)]"
                  : "bg-white/[0.04] text-secondary hover:text-white border border-white/[0.08]"
              }`}
            >
              <span>{cat}</span>
              <span className='text-[10px] px-1.5 py-0.2 rounded-full bg-white/10 text-secondary'>
                {count}
              </span>
            </button>
          );
        })}
      </motion.div>

      {/* 3D Balls & Badges Grid (100% Uniform 3D Balls) */}
      <div className='mt-12 flex flex-row flex-wrap justify-center gap-8 sm:gap-10'>
        {filteredTechnologies.map((technology) => (
          <div
            className='flex flex-col items-center group w-28 sm:w-32'
            key={technology.name}
          >
            <div className='w-24 h-24 sm:w-28 sm:h-28 transition-transform duration-300 group-hover:scale-105 flex items-center justify-center'>
              <BallCanvas icon={technology.icon} />
            </div>
            <div className='mt-2 text-center'>
              <p className='text-white text-xs font-semibold group-hover:text-[#00f0ff] transition-colors leading-tight'>
                {technology.name}
              </p>
              {technology.level && (
                <span className='inline-block mt-1 text-[10px] px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-secondary'>
                  {technology.level}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");

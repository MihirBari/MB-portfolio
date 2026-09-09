import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Tilt } from "react-tilt";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    }
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return createPortal(
    <AnimatePresence>
      <div
        onClick={onClose}
        className='fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 sm:py-10 overflow-y-auto bg-black/85 backdrop-blur-md'
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className='relative w-full max-w-4xl bg-[#100d25] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.95)] max-h-[88vh] overflow-y-auto my-auto'
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className='absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white text-xl transition-colors z-20 cursor-pointer'
            aria-label='Close modal'
          >
            ✕
          </button>

          {/* Header */}
          <div className='flex flex-wrap items-center gap-3 mb-3'>
            {project.badge && (
              <span className='px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-[#915EFF]/20 to-[#00f0ff]/20 border border-[#00f0ff]/40 text-[#00f0ff]'>
                {project.badge}
              </span>
            )}
            <span className='px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-secondary'>
              {project.category}
            </span>
          </div>

          <h2 className='text-2xl sm:text-3xl font-bold text-white mb-2'>
            {project.name}
          </h2>
          <p className='text-[#00f0ff] text-sm sm:text-base font-medium mb-5'>
            {project.subtitle}
          </p>

          {/* Image */}
          <div className='relative w-full h-[260px] sm:h-[360px] rounded-2xl overflow-hidden border border-white/10 mb-6 bg-black/40'>
            <img
              src={project.image}
              alt={project.name}
              className='w-full h-full object-cover object-top'
            />
          </div>

          {/* Detailed Description */}
          <div className='mb-6'>
            <h4 className='text-white font-semibold text-lg mb-2'>
              System Architecture & Overview
            </h4>
            <p className='text-secondary text-sm sm:text-base leading-relaxed'>
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Key Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className='mb-6'>
              <h4 className='text-white font-semibold text-lg mb-3'>
                Core Capabilities & Architecture
              </h4>
              <ul className='grid grid-cols-1 sm:grid-cols-2 gap-2.5'>
                {project.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className='flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs sm:text-sm text-white-100'
                  >
                    <span className='text-[#00f0ff] text-base leading-none'>✔</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Metrics / Metadata */}
          {project.metrics && project.metrics.length > 0 && (
            <div className='mb-6 p-4 rounded-2xl bg-[#151030]/80 border border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4'>
              {project.metrics.map((metric, idx) => (
                <div key={idx} className='text-center'>
                  <p className='text-[#915EFF] font-bold text-sm sm:text-base'>
                    {metric.value}
                  </p>
                  <p className='text-secondary text-xs mt-0.5'>{metric.label}</p>
                </div>
              ))}
            </div>
          )}

          {/* Tags */}
          <div className='flex flex-wrap gap-2 mb-6'>
            {project.tags.map((tag) => (
              <span
                key={tag.name}
                className={`px-3 py-1 rounded-full text-xs font-medium bg-white/[0.04] border border-white/10 ${tag.color}`}
              >
                #{tag.name}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className='flex flex-wrap gap-3 pt-4 border-t border-white/10'>
            {project.source_code_link ? (
              <a
                href={project.source_code_link}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-all'
              >
                <img src={github} alt='github' className='w-4 h-4 object-contain' />
                <span>View Source Code</span>
              </a>
            ) : (
              <div className='inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-[#00f0ff] bg-cyan-950/40 border border-cyan-500/30'>
                <span>🔒 Enterprise Internal / Production Architecture</span>
              </div>
            )}
            <button
              onClick={onClose}
              className='px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#915EFF] to-[#7000ff] ml-auto'
            >
              Close Details
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
};

const ProjectCard = ({
  index,
  project,
  onOpenModal,
}) => {
  const { name, description, tags, image, source_code_link, badge, subtitle } = project;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className='w-full'
    >
      <Tilt
        options={{
          max: 15,
          scale: 1.01,
          speed: 400,
        }}
        className={`bg-[#100d25]/85 backdrop-blur-xl border p-6 rounded-3xl w-full flex flex-col justify-between h-full transition-all duration-300 group ${
          project.featured
            ? "border-[#915EFF]/40 shadow-[0_10px_35px_rgba(145,94,255,0.2)] hover:border-[#00f0ff]/70"
            : "border-white/10 hover:border-white/30 hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)]"
        }`}
      >
        <div>
          {/* Card Media Preview */}
          <div className='relative w-full h-[210px] rounded-2xl overflow-hidden bg-black/40 border border-white/[0.08]'>
            <img
              src={image}
              alt={name}
              className='w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500'
            />

            <div className='absolute top-3 left-3 flex flex-wrap gap-1.5'>
              {badge && (
                <div className='px-3 py-1 rounded-full text-[11px] font-semibold bg-[#050816]/90 backdrop-blur-md border border-[#00f0ff]/40 text-[#00f0ff] shadow-md'>
                  {badge}
                </div>
              )}
              <div className='px-2.5 py-1 rounded-full text-[10px] font-medium bg-black/70 backdrop-blur-md border border-white/20 text-white/80'>
                {project.category}
              </div>
            </div>

            <div className='absolute inset-0 flex justify-end items-start p-3 gap-2 opacity-90 group-hover:opacity-100 transition-opacity'>
              {source_code_link && (
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(source_code_link, "_blank");
                  }}
                  className='w-9 h-9 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex justify-center items-center cursor-pointer hover:scale-110 hover:border-[#915EFF] transition-all'
                  title='View Source Code'
                >
                  <img
                    src={github}
                    alt='source code'
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              )}
            </div>
          </div>

          {/* Title & Description */}
          <div className='mt-4'>
            <h3 className='text-white font-bold text-[20px] tracking-tight group-hover:text-[#00f0ff] transition-colors'>
              {name}
            </h3>
            {subtitle && (
              <p className='text-xs text-purple-300 font-medium mt-1'>
                {subtitle}
              </p>
            )}
            <p className='mt-2 text-secondary text-[13px] leading-relaxed line-clamp-3'>
              {description}
            </p>
          </div>
        </div>

        {/* Footer with Tags and Details CTA */}
        <div className='mt-5 pt-3 border-t border-white/[0.08]'>
          <div className='flex flex-wrap gap-1.5 mb-4'>
            {tags.slice(0, 4).map((tag) => (
              <span
                key={`${name}-${tag.name}`}
                className={`text-[11px] px-2.5 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.06] ${tag.color}`}
              >
                #{tag.name}
              </span>
            ))}
            {tags.length > 4 && (
              <span className='text-[11px] px-2 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-secondary'>
                +{tags.length - 4} more
              </span>
            )}
          </div>

          <button
            onClick={() => onOpenModal(project)}
            className='w-full py-2.5 rounded-xl text-xs font-semibold text-white bg-white/[0.05] hover:bg-gradient-to-r hover:from-[#915EFF] hover:to-[#7000ff] border border-white/10 transition-all duration-300 flex items-center justify-center gap-2 group-hover:border-[#915EFF]'
          >
            <span>View Architecture & Details</span>
            <span className='text-[#00f0ff]'>→</span>
          </button>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = [
    { label: "All Projects", key: "All", count: projects.length },
    {
      label: "Full Stack",
      key: "Full Stack",
      count: projects.filter((p) => p.category === "Full Stack").length,
    },
    {
      label: "Frontend",
      key: "Frontend",
      count: projects.filter((p) => p.category === "Frontend").length,
    },
  ];

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === "All") return true;
    return project.category === selectedCategory;
  });

  return (
    <>
      <motion.div variants={textVariant()}>
        <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#00f0ff] mb-2'>
          <span>Portfolio & Innovation</span>
        </div>
        <h2 className={`${styles.sectionHeadText}`}>Featured Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[16px] sm:text-[17px] max-w-3xl leading-[30px]'
        >
          Explore full-stack enterprise systems, AI agent platforms, and modern web applications.
          From <span className='text-white font-semibold'>in-house CRM intelligence</span> with tracking pixels,
          to <span className='text-emerald-400 font-semibold'>Money Flow</span> real-time UPI expense tracking,
          and <span className='text-[#00f0ff] font-semibold'>autonomous Model Context Protocol (MCP)</span> infrastructure
          agents.
        </motion.p>
      </div>

      {/* Category Filter Pills */}
      <div className='mt-10 flex flex-wrap items-center gap-3'>
        <span className='text-secondary text-xs font-semibold uppercase tracking-wider mr-1'>
          Filter:
        </span>
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setSelectedCategory(cat.key)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-250 flex items-center gap-1.5 ${
              selectedCategory === cat.key
                ? "bg-white/15 text-white border border-[#00f0ff]/50 shadow-[0_0_15px_rgba(0,240,255,0.3)]"
                : "bg-white/[0.04] text-secondary hover:text-white border border-white/[0.08] hover:bg-white/[0.08]"
            }`}
          >
            <span>{cat.label}</span>
            <span className='px-1.5 py-0.2 rounded-full text-[10px] bg-white/10 text-secondary'>
              {cat.count}
            </span>
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div layout className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id || `project-${index}`}
              index={index}
              project={project}
              onOpenModal={setActiveModalProject}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Interactive Detail Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </>
  );
};

export default SectionWrapper(Works, "projects");

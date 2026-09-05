import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(16, 13, 37, 0.88)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.6)",
        borderRadius: "24px",
        padding: "28px 24px",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "8px solid rgba(255, 255, 255, 0.15)" }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
        boxShadow: "0 0 20px rgba(145, 94, 255, 0.4)",
        border: "2px solid rgba(255, 255, 255, 0.2)",
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[65%] h-[65%] object-contain'
          />
        </div>
      }
    >
      <div>
        <div className='flex flex-wrap items-center justify-between gap-2'>
          <h3 className='text-white text-[22px] font-bold tracking-tight'>
            {experience.title}
          </h3>
          {experience.role_type && (
            <span className='px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white/10 border border-white/15 text-[#00f0ff]'>
              {experience.role_type}
            </span>
          )}
        </div>
        <p
          className='text-secondary text-[15px] font-semibold mt-1'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 space-y-2.5'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[13px] sm:text-[14px] leading-relaxed flex items-start gap-2.5'
          >
            <span className='text-[#915EFF] text-sm leading-none mt-1'>▹</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <div className='flex justify-center'>
          <div className='inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#915EFF] mb-2'>
            <span>Career Milestones</span>
          </div>
        </div>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Professional Journey.
        </h2>
      </motion.div>

      <div className='mt-16 flex flex-col'>
        <VerticalTimeline lineColor={"rgba(145, 94, 255, 0.25)"}>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");

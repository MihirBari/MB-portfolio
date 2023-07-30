import React from "react";
import { Link } from "react-router-dom";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import insta from "../assets/tech/Insta.png"
import disc from "../assets/tech/disc.png"
import git from "../assets/tech/github.png"
import li from "../assets/tech/linked.png"
import { fadeIn, } from "../utils/motion";

const Socails = () => {
  return (
    <motion.div variants={fadeIn("up", "spring")}>
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
    className='flex justify-center items-center gap-10'> 

      <div className='flex space-x-4' >
          {/* <img src={insta} alt="" 
           onClick={()=> window.open("https://www.instagram.com/mihirbari.mb/")}/> */}
        {/* <Link>
          <img src={fb} alt="" />
        </Link> */}
          {/* <img src={disc} alt="" 
           onClick={()=> window.open("https://discord.gg/4dzNcuVA")}/> */}
          <img src={git} alt=""
           onClick={()=> window.open("https://github.com/MihirBari")} />
        {/* <Link to="https://www.linkedin.com/in/mihir-bari/"> */}
          <img src={li} alt=""
           onClick={()=> window.open("https://www.linkedin.com/in/mihir-bari/")}
          />
        {/* </Link> */}
      </div>
  </Tilt>
  </motion.div>
  );
};

export default SectionWrapper(Socails, "");

import React, { useState } from "react";
import { motion } from "framer-motion";

const BallCanvas = ({ icon, name = "Technology", index = 0 }) => {
  const [imgError, setImgError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Fallback monogram if image ever fails to load
  const initials = name
    ? name
        .split(" ")
        .map((w) => w[0])
        .join("")
        .slice(0, 3)
        .toUpperCase()
    : "AI";

  return (
    <motion.div
      animate={{
        y: [0, -6, 0],
      }}
      transition={{
        duration: 3.5 + (index % 5) * 0.35,
        repeat: Infinity,
        ease: "easeInOut",
        delay: (index % 6) * 0.2,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className='relative w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center cursor-pointer select-none group'
      style={{
        perspective: "1000px",
      }}
    >
      {/* Outer ambient glow reacting to hover */}
      <div
        className={`absolute -inset-1.5 rounded-full transition-all duration-500 blur-md pointer-events-none ${
          isHovered
            ? "bg-gradient-to-tr from-[#915EFF] via-[#00f0ff] to-[#ec4899] opacity-75 scale-105"
            : "bg-[#915EFF]/15 opacity-40 scale-95"
        }`}
      />

      {/* 3D Sphere Body with multi-layer spherical depth shading */}
      <div
        className='relative w-full h-full rounded-full overflow-hidden flex items-center justify-center transition-transform duration-300 transform group-hover:scale-105'
        style={{
          background:
            "radial-gradient(circle at 35% 30%, #3a2b72 0%, #201744 38%, #110c2c 70%, #060412 100%)",
          boxShadow:
            "inset -8px -8px 16px rgba(0, 0, 0, 0.9), inset 4px 4px 10px rgba(255, 255, 255, 0.25), 0 14px 28px -6px rgba(0, 0, 0, 0.8), 0 0 16px rgba(145, 94, 255, 0.25)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
        }}
      >
        {/* Specular Highlight Gloss Spot on top left of sphere */}
        <div
          className='absolute top-2 left-3.5 w-8 h-4 rounded-full pointer-events-none'
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 75%)",
            transform: "rotate(-25deg)",
          }}
        />

        {/* Sphere Rim Light Contour */}
        <div
          className='absolute inset-0 rounded-full pointer-events-none'
          style={{
            boxShadow: "inset 0 0 14px rgba(0, 240, 255, 0.2)",
          }}
        />

        {/* Center Decal Icon */}
        {!imgError ? (
          <img
            src={icon}
            alt={name}
            onError={() => setImgError(true)}
            className='relative z-10 w-12 h-12 sm:w-14 sm:h-14 object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_6px_10px_rgba(0,0,0,0.6)]'
          />
        ) : (
          <div className='relative z-10 text-center'>
            <span className='text-white font-bold text-sm tracking-wider font-mono bg-[#915EFF]/40 px-2 py-1 rounded-md border border-white/20'>
              {initials}
            </span>
          </div>
        )}

        {/* Subtle Bottom Reflected Shadow inside Sphere */}
        <div className='absolute bottom-1 w-16 h-3 rounded-full bg-black/40 blur-[2px] pointer-events-none' />
      </div>

      {/* Floating Floor Shadow underneath Sphere */}
      <div
        className={`absolute -bottom-3 w-16 h-2 rounded-full bg-black/80 blur-[4px] transition-all duration-300 pointer-events-none ${
          isHovered ? "scale-90 opacity-60" : "scale-100 opacity-90"
        }`}
      />
    </motion.div>
  );
};

export default BallCanvas;

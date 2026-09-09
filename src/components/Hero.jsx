import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero3DModel = () => {
  return (
    <div className='w-full h-[220px] relative flex items-center justify-center'>
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        className='w-full h-full'
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <pointLight position={[-10, -10, -5]} color='#00f0ff' intensity={2} />
        <pointLight position={[10, -10, 5]} color='#ec4899' intensity={2} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2.5} />
        <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
          {/* Outer Cyber Octahedron Wireframe */}
          <mesh>
            <octahedronGeometry args={[1.3, 0]} />
            <meshStandardMaterial
              color='#915EFF'
              wireframe
              emissive='#7000ff'
              emissiveIntensity={0.6}
            />
          </mesh>

          {/* Solid Floating Core */}
          <mesh scale={0.75}>
            <dodecahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
              color='#00f0ff'
              metalness={0.85}
              roughness={0.15}
              emissive='#00f0ff'
              emissiveIntensity={0.2}
            />
          </mesh>

          {/* Orbital Ring 1 */}
          <mesh rotation={[Math.PI / 4, 0, 0]}>
            <torusGeometry args={[2.0, 0.03, 16, 80]} />
            <meshStandardMaterial
              color='#00f0ff'
              emissive='#00f0ff'
              emissiveIntensity={0.8}
            />
          </mesh>

          {/* Orbital Ring 2 */}
          <mesh rotation={[-Math.PI / 4, Math.PI / 3, 0]}>
            <torusGeometry args={[2.2, 0.025, 16, 80]} />
            <meshStandardMaterial
              color='#ec4899'
              emissive='#ec4899'
              emissiveIntensity={0.8}
            />
          </mesh>
        </Float>
      </Canvas>
      <div className='absolute bottom-2 right-2 px-2 py-0.5 rounded-full bg-black/60 border border-white/10 text-[10px] text-secondary pointer-events-none'>
        Drag to Rotate 3D Core
      </div>
    </div>
  );
};

const HeroConsole = () => {
  const [activeTab, setActiveTab] = useState("mcp");
  const [isRunning, setIsRunning] = useState(false);
  const [runSuccess, setRunSuccess] = useState(false);

  const handleSimulate = () => {
    setIsRunning(true);
    setRunSuccess(false);
    setTimeout(() => {
      setIsRunning(false);
      setRunSuccess(true);
      setTimeout(() => setRunSuccess(false), 3000);
    }, 1200);
  };

  return (
    <div className='relative w-full max-w-lg mx-auto'>
      {/* Outer ambient glow behind console */}
      <div className='absolute -inset-1 bg-gradient-to-r from-[#915EFF]/40 via-[#00f0ff]/30 to-[#ec4899]/30 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000' />

      {/* Floating Holographic Badge 1 */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className='absolute -top-4 -right-4 z-20 px-3.5 py-1.5 rounded-full bg-[#100d25]/90 border border-[#00f0ff]/40 shadow-[0_0_20px_rgba(0,240,255,0.3)] backdrop-blur-xl hidden sm:flex items-center gap-2 text-[11px] font-semibold text-[#00f0ff]'
      >
        <span className='w-2 h-2 rounded-full bg-[#00f0ff] animate-ping' />
        <span>@modelcontextprotocol/sdk</span>
      </motion.div>

      {/* Floating Holographic Badge 2 */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className='absolute -bottom-4 -left-4 z-20 px-3.5 py-1.5 rounded-full bg-[#100d25]/90 border border-[#915EFF]/40 shadow-[0_0_20px_rgba(145,94,255,0.3)] backdrop-blur-xl hidden sm:flex items-center gap-2 text-[11px] font-semibold text-purple-300'
      >
        <span className='w-2 h-2 rounded-full bg-emerald-400' />
        <span>Pixel Email Tracking Active</span>
      </motion.div>

      {/* Main Glass Console Card */}
      <div className='relative rounded-3xl bg-[#0c0824]/95 border border-white/15 backdrop-blur-2xl p-5 sm:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden'>
        {/* Terminal Header */}
        <div className='flex items-center justify-between pb-3 mb-4 border-b border-white/10'>
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 rounded-full bg-[#ff5f56]' />
            <div className='w-3 h-3 rounded-full bg-[#ffbd2e]' />
            <div className='w-3 h-3 rounded-full bg-[#27c93f]' />
            <span className='ml-2 text-xs font-mono text-secondary'>
              anton-daemon // mcp-v1.x
            </span>
          </div>
          <div className='flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-[11px] font-mono text-emerald-400'>
            <span className='w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse' />
            <span>LIVE (Port 3001)</span>
          </div>
        </div>

        {/* Tab Switchers */}
        <div className='flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.04] border border-white/[0.08] mb-4 overflow-x-auto'>
          {[
            { id: "mcp", label: "🤖 MCP AI" },
            { id: "crm", label: "📊 CRM" },
            { id: "rag", label: "⚡ RAG" },
            { id: "3d", label: "🌐 3D Core" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-[#915EFF] text-white shadow-[0_0_15px_rgba(145,94,255,0.4)]"
                  : "text-secondary hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Console Content Window */}
        <div className='min-h-[220px] bg-black/60 rounded-2xl p-4 font-mono text-xs text-white-100 border border-white/[0.06] overflow-x-auto'>
          <AnimatePresence mode='wait'>
            {activeTab === "3d" && (
              <motion.div
                key='3d'
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className='w-full h-full flex flex-col items-center justify-center'
              >
                <Hero3DModel />
              </motion.div>
            )}

            {activeTab === "mcp" && (
              <motion.div
                key='mcp'
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className='space-y-2'
              >
                <p className='text-secondary'>
                  {"// Anthropic Model Context Protocol (MCP) Runtime"}
                </p>
                <p className='text-[#00f0ff]'>
                  $ anton.call_tool(<span className='text-amber-300'>"solarwinds_swql"</span>, &#123;
                </p>
                <p className='pl-4 text-purple-300'>
                  query: <span className='text-emerald-300'>"SELECT NodeID, Status FROM Orion.Nodes"</span>
                </p>
                <p className='text-[#00f0ff]'>&#125;)</p>
                <p className='text-emerald-400'>
                  ✔ [200 OK] Telemetry analyzed: 148 nodes healthy, 0 critical alerts
                </p>
                <div className='pt-1 text-slate-300'>
                  <span className='text-pink-400'>$</span> anton.call_tool(<span className='text-amber-300'>"bigfix_relevance"</span>)
                  <p className='text-emerald-400 pl-2'>
                    ✔ [200 OK] 14 patches verified • Compliance: 99.4%
                  </p>
                </div>
              </motion.div>
            )}

            {activeTab === "crm" && (
              <motion.div
                key='crm'
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className='space-y-2'
              >
                <p className='text-secondary'>
                  {"// In-House CRM Telemetry & Tracking Intelligence"}
                </p>
                <p className='text-purple-300'>
                  [EVENT] <span className='text-white'>1x1 Tracking Pixel Triggered</span>
                </p>
                <p className='pl-3 text-slate-300'>
                  • Recipient: <span className='text-[#00f0ff]'>lead_492@enterprise.com</span>
                </p>
                <p className='pl-3 text-slate-300'>
                  • Client Browser: <span className='text-emerald-300'>Chrome 124 / Windows 11</span>
                </p>
                <p className='pl-3 text-slate-300'>
                  • IP Geo-Insight: <span className='text-amber-300'>104.28.x.x • Sales Alert Dispatched</span>
                </p>
                <div className='pt-1 text-emerald-400'>
                  ✔ [DOB DAEMON] Automated birthday email queue: 7 greetings sent today
                </div>
              </motion.div>
            )}

            {activeTab === "rag" && (
              <motion.div
                key='rag'
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className='space-y-2'
              >
                <p className='text-secondary'>
                  {"// ChromaDB & Qdrant Vector RAG Knowledge Base"}
                </p>
                <p className='text-[#00f0ff]'>
                  $ rag.similarity_search(<span className='text-emerald-300'>"Switch failover SOP"</span>)
                </p>
                <p className='pl-3 text-slate-300'>
                  • Vector Match: <span className='text-purple-300'>SOP-NET-084-Switchover.md</span>
                </p>
                <p className='pl-3 text-slate-300'>
                  • Cosine Score: <span className='text-amber-300'>0.962</span> (High Confidence)
                </p>
                <p className='pl-3 text-slate-300'>
                  • Lookup Latency: <span className='text-emerald-300'>9.4ms</span>
                </p>
                <p className='text-emerald-400'>
                  ✔ Context window injected into Ollama LLM prompt
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Action Bar */}
        <div className='mt-4 pt-3 border-t border-white/10 flex items-center justify-between'>
          <span className='text-[11px] text-secondary font-mono'>
            Latency: <span className='text-emerald-400'>~8ms</span> • Memory: <span className='text-[#00f0ff]'>64MB</span>
          </span>
          <button
            onClick={handleSimulate}
            disabled={isRunning}
            className='px-3.5 py-1.5 rounded-xl text-xs font-medium text-white bg-white/10 hover:bg-[#915EFF] border border-white/15 hover:border-transparent transition-all flex items-center gap-1.5'
          >
            {isRunning ? (
              <>
                <span className='w-2 h-2 rounded-full bg-[#00f0ff] animate-ping' />
                <span>Executing...</span>
              </>
            ) : runSuccess ? (
              <>
                <span className='text-emerald-400'>✔</span>
                <span>Completed!</span>
              </>
            ) : (
              <>
                <span className='text-[#00f0ff]'>▶</span>
                <span>Test Live Inspection</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const [heroView, setHeroView] = useState("3d");

  return (
    <section className='relative w-full h-screen mx-auto overflow-hidden'>
      {/* Background ambient radial glows */}
      <div className='absolute top-20 left-1/4 -translate-x-1/2 w-[550px] h-[400px] bg-[#915EFF]/15 rounded-full blur-[130px] pointer-events-none' />
      <div className='absolute top-48 right-10 w-[450px] h-[350px] bg-[#00f0ff]/12 rounded-full blur-[120px] pointer-events-none' />

      {/* Cyber Dot Matrix Background Pattern */}
      <div
        className='absolute inset-0 opacity-20 pointer-events-none'
        style={{
          backgroundImage:
            "radial-gradient(rgba(145, 94, 255, 0.4) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* View Switcher Pill (Top Right) */}
      <div className='absolute top-24 sm:top-28 right-6 sm:right-16 z-30 pointer-events-auto flex items-center gap-1.5 p-1 rounded-2xl bg-[#100d25]/85 border border-white/15 backdrop-blur-xl shadow-lg'>
        <button
          onClick={() => setHeroView("3d")}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
            heroView === "3d"
              ? "bg-[#915EFF] text-white shadow-[0_0_15px_rgba(145,94,255,0.4)]"
              : "text-secondary hover:text-white"
          }`}
        >
          <span>🖥️</span>
          <span>Rotating 3D PC</span>
        </button>
        <button
          onClick={() => setHeroView("console")}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
            heroView === "console"
              ? "bg-[#915EFF] text-white shadow-[0_0_15px_rgba(145,94,255,0.4)]"
              : "text-secondary hover:text-white"
          }`}
        >
          <span>🤖</span>
          <span>Cyber Console</span>
        </button>
      </div>

      {/* Top Left Headline and Bio Overlay */}
      <div
        className={`absolute inset-0 top-[110px] sm:top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 pointer-events-none z-10`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF] shadow-[0_0_15px_#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className='pointer-events-auto max-w-2xl'>
          {/* Status Badge */}
          <div className='inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md mb-3 text-xs text-[#00f0ff]'>
            <span className='w-2 h-2 rounded-full bg-[#00f0ff] animate-ping' />
            <span>Enterprise AI & Full Stack Engineer</span>
            <span className='text-secondary'>•</span>
            <span className='text-purple-300'>MCP Specialist</span>
          </div>

          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{" "}
            <span className='bg-gradient-to-r from-[#915EFF] via-[#00f0ff] to-[#ec4899] bg-clip-text text-transparent'>
              Mihir
            </span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I architect autonomous{" "}
            <span className='text-[#00f0ff] font-semibold'>
              Model Context Protocol (MCP)
            </span>{" "}
            AI platforms, enterprise{" "}
            <span className='text-purple-300 font-semibold'>CRM systems</span>{" "}
            with email tracking intelligence, and full-stack web applications.
          </p>

          {/* Action CTAs */}
          <div className='mt-6 flex flex-wrap gap-3 items-center'>
            <a
              href='#projects'
              className='px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-[#915EFF] to-[#7000ff] hover:shadow-[0_0_25px_rgba(145,94,255,0.6)] transition-all transform hover:-translate-y-0.5'
            >
              Explore Projects
            </a>
            <a
              href='#projects'
              className='px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-[#00f0ff] bg-cyan-950/40 border border-cyan-500/40 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] backdrop-blur-md transition-all flex items-center gap-1.5'
            >
              <span>⭐</span> Featured Systems
            </a>
            <a
              href='#contact'
              className='px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-secondary hover:text-white bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] backdrop-blur-md transition-all'
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Main 3D Canvas or Console */}
      {heroView === "3d" ? (
        <>
          <ComputersCanvas fallback={<HeroConsole />} />
          {/* Interactive instruction pill */}
          <div className='absolute bottom-24 right-6 sm:right-16 px-3 py-1 rounded-full bg-[#100d25]/80 border border-white/10 backdrop-blur-md text-[11px] font-mono text-secondary pointer-events-none hidden sm:flex items-center gap-1.5 z-10'>
            <span className='text-[#00f0ff]'>✦</span>
            <span>Drag horizontally to rotate 3D PC</span>
          </div>
        </>
      ) : (
        <div className='absolute inset-0 top-[140px] flex items-center justify-center p-4 z-10 pointer-events-auto'>
          <HeroConsole />
        </div>
      )}

      {/* Scroll Down Indicator */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10 pointer-events-auto'>
        <a href='#about'>
          <div className='w-[32px] h-[56px] rounded-3xl border-2 border-secondary/60 hover:border-[#00f0ff] flex justify-center items-start p-1.5 transition-colors'>
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-2 h-2 rounded-full bg-[#00f0ff] shadow-[0_0_8px_#00f0ff]'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;


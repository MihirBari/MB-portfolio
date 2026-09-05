import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

class ComputersErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error) {
    console.warn("ComputersCanvas render fallback:", error);
  }
  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className='w-full h-full flex flex-col items-center justify-center p-8 text-center'>
            <div className='w-24 h-24 rounded-2xl bg-gradient-to-tr from-[#915EFF] to-[#00f0ff] p-0.5 animate-pulse shadow-[0_0_40px_rgba(145,94,255,0.4)]'>
              <div className='w-full h-full bg-[#100d25] rounded-2xl flex items-center justify-center text-4xl'>
                🖥️
              </div>
            </div>
            <p className='mt-4 text-white font-semibold text-sm'>
              Developer Workstation Model
            </p>
            <p className='text-secondary text-xs mt-1'>
              Interactive 3D Engine
            </p>
          </div>
        )
      );
    }
    return this.props.children;
  }
}

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.35} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.65 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = ({ fallback }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <ComputersErrorBoundary fallback={fallback}>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true, alpha: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            autoRotate
            autoRotateSpeed={1.2}
          />
          <Computers isMobile={isMobile} />
        </Suspense>

        <Preload all />
      </Canvas>
    </ComputersErrorBoundary>
  );
};

useGLTF.preload("./desktop_pc/scene.gltf");

export default ComputersCanvas;

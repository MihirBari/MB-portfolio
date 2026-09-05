import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

class EarthErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error) {
    console.warn("EarthCanvas render fallback:", error);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className='w-full h-full rounded-3xl bg-[#100d25]/80 border border-white/10 flex flex-col items-center justify-center p-8 text-center'>
          <div className='w-32 h-32 rounded-full bg-gradient-to-tr from-[#915EFF] to-[#00f0ff] animate-pulse shadow-[0_0_50px_rgba(0,240,255,0.4)] flex items-center justify-center text-4xl'>
            🌐
          </div>
          <p className='mt-6 text-white font-semibold text-base'>
            Interactive 3D Planet
          </p>
          <p className='text-secondary text-xs mt-1'>
            Global Infrastructure & MCP Systems
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive
      object={earth.scene}
      scale={2.5}
      position-y={0}
      rotation-y={0}
    />
  );
};

const EarthCanvas = () => {
  return (
    <EarthErrorBoundary>
      <Canvas
        shadows
        frameloop='demand'
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true, alpha: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />
          <Preload all />
        </Suspense>
      </Canvas>
    </EarthErrorBoundary>
  );
};

export default EarthCanvas;

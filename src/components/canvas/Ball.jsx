import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

class BallErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.warn("BallCanvas render fallback:", error);
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

const BallCanvas = ({ icon }) => {
  return (
    <BallErrorBoundary
      fallback={
        <div className='w-full h-full rounded-full bg-gradient-to-tr from-[#1a1435] via-[#281e50] to-[#100d25] border-2 border-white/20 flex items-center justify-center p-3 shadow-[inset_0_2px_8px_rgba(255,255,255,0.2),0_10px_25px_rgba(0,0,0,0.6)]'>
          <img src={icon} alt='tech-icon' className='w-12 h-12 object-contain' />
        </div>
      }
    >
      <Canvas
        frameloop='demand'
        dpr={[1, 1.5]}
        gl={{ preserveDrawingBuffer: false, alpha: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} />
          <Ball imgUrl={icon} />
        </Suspense>

        <Preload all />
      </Canvas>
    </BallErrorBoundary>
  );
};

export default BallCanvas;

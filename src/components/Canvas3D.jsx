import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, ContactShadows, Environment, Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import AgentModel from './AgentModel';

function MovingLight() {
  const light = useRef();
  const { mouse, viewport } = useThree();

  useFrame((state) => {
    if (light.current) {
      // Light follows mouse subtly
      const x = (mouse.x * viewport.width) / 2;
      const y = (mouse.y * viewport.height) / 2;
      light.current.position.set(x, y, 2);
    }
  });

  return <pointLight ref={light} intensity={1.5} color="#2dd4bf" distance={10} />;
}

export default function Canvas3D() {
  return (
    <div className="absolute inset-0 -z-10 w-full h-full">
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, toneMapping: THREE.ReinhardToneMapping }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={35} />
        
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight 
            position={[5, 10, 5]} 
            intensity={1.2} 
            castShadow 
            shadow-mapSize={[1024, 1024]}
          />
          
          <MovingLight />

          {/* Background Stars / Glow */}
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1.5} />
          
          <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.6}>
            <group position={[1.8, -0.6, 0]} rotation={[0, -0.4, 0]}>
              <AgentModel scale={1.8} />
            </group>
          </Float>

          <ContactShadows
            position={[0, -1.8, 0]}
            opacity={0.5}
            scale={12}
            blur={2.5}
            far={1.6}
            color="#000000"
          />
          
          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  );
}

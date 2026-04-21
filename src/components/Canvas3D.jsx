import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Stars } from '@react-three/drei';

const AnimatedSphere = () => {
  const sphereRef = useRef();

  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.2;
      sphereRef.current.rotation.x = clock.getElapsedTime() * 0.15;
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Sphere visible args={[1, 100, 200]} scale={2.2} ref={sphereRef}>
      <MeshDistortMaterial
        color="#14b8a6"
        attach="material"
        distort={0.45}
        speed={1.5}
        roughness={0.1}
        metalness={0.9}
        transparent
        opacity={0.35}
      />
    </Sphere>
  );
};

export default function Canvas3D() {
  return (
    <div className="absolute inset-0 -z-10 w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <directionalLight position={[-10, -10, -5]} intensity={0.8} color="#0d9488" />
        <pointLight position={[0, 0, 2]} intensity={0.6} color="#2dd4bf" />
        <AnimatedSphere />
        <Stars radius={100} depth={50} count={3000} factor={3} saturation={0} fade speed={0.5} />
      </Canvas>
    </div>
  );
}

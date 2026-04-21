import React, { useRef, useMemo, useLayoutEffect } from 'react';
import { useGLTF, Float } from '@react-three/drei';
import * as THREE from 'three';

const CHUNKS = [
  '/Dor3YHhe.glb',
  '/DQ1nW9Gy.glb',
  '/I618W__A.glb',
  '/QCGZKkrU.glb',
];

export default function AgentModel({ ...props }) {
  const group = useRef();
  
  const gltf0 = useGLTF(CHUNKS[0]);
  const gltf1 = useGLTF(CHUNKS[1]);
  const gltf2 = useGLTF(CHUNKS[2]);
  const gltf3 = useGLTF(CHUNKS[3]);

  const gltfs = [gltf0, gltf1, gltf2, gltf3];

  const charMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#09090b',
    roughness: 0.5,
    metalness: 0.5,
  }), []);

  const brandMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#14b8a6',
    emissive: '#14b8a6',
    emissiveIntensity: 2,
    roughness: 0.2,
    metalness: 1,
  }), []);

  useLayoutEffect(() => {
    gltfs.forEach((gltf) => {
      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          
          const name = child.name.toLowerCase();
          if (name.includes('glow') || name.includes('accent') || name.includes('brand')) {
            child.material = brandMaterial;
          } else {
            child.material = charMaterial;
          }
        }
      });
    });
  }, [gltfs, brandMaterial, charMaterial]);

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={group} {...props} dispose={null}>
        {gltfs.map((gltf, i) => (
          <primitive key={i} object={gltf.scene} />
        ))}
      </group>
    </Float>
  );
}

CHUNKS.forEach((path) => useGLTF.preload(path));

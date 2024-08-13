"use client";

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

function StarField() {
  const starsRef = useRef();

  useFrame((state, delta) => {
    starsRef.current.rotation.x -= delta / 100;
    starsRef.current.rotation.y -= delta / 150;
  });

  return (
    <Stars
      ref={starsRef}
      radius={300}
      depth={50}
      count={5000}
      factor={4}
      saturation={0}
      fade
      speed={1}
    />
  );
}

export default function ThreeScene() {
  return (
    <Canvas camera={{ position: [0, 0, 1], fov: 75 }} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <color attach="background" args={['#000008']} />
      <ambientLight intensity={0.1} />
      <StarField />
    </Canvas>
  );
}
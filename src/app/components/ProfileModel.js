import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export default function ProfileModel({ url }) {
  const group = useRef();
  const { scene, animations } = useGLTF(url);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Memulai semua animasi yang tersedia
    Object.values(actions).forEach(action => {
      action.play();
    });
  }, [actions]);

  return <primitive ref={group} object={scene} />;
}
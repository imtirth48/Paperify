// --- ModelViewer.jsx ---
import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function BagModel() {
  const { scene } = useGLTF('/models/paperBag/scene.gltf');
  const modelRef = useRef();

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.traverse((child) => {
        if (child.isMesh) {
          child.material.color.set('#c8ad7f');
          child.material.roughness = 0.8;
          child.material.metalness = 0.2;
        }
      });
    }
  }, []);

  return <primitive ref={modelRef} object={scene} scale={1.7} />;
}

function ModelViewer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 530);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 530);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      style={{
        width: '100%',
        maxWidth: isMobile ? '100%' : '500px',
        height: isMobile ? '280px' : '450px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <Canvas
        style={{
          width: '100%',
          height: '100%',
          background: 'transparent',
        }}
        camera={{
          position: [0, 1.2, 3],
          fov: isMobile ? 65 : 50,
        }}
      >
        <ambientLight intensity={0.6} color="#ffe8c8" />
        <directionalLight position={[3, 3, 3]} intensity={1} color="#ffe8c8" />
        <Suspense fallback={null}>
          <BagModel />
        </Suspense>
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={1.5}
          maxDistance={4}
          maxPolarAngle={Math.PI / 2}
          target={[0, 1, 0]}
        />
      </Canvas>
    </div>
  );
}

export default ModelViewer;
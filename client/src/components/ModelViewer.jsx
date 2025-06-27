import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function BagModel() {
  const { scene } = useGLTF('/models/paperBag/scene.gltf');
  const modelRef = useRef();

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.traverse((child) => {
        if (child.isMesh) {
          child.material.color.set('#c8ad7f'); // Dark beige
          child.material.roughness = 0.8;
          child.material.metalness = 0.2;
        }
      });
    }
  }, []);

  return <primitive ref={modelRef} object={scene} scale={1.5} />;
}

function ModelViewer() {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '500px',
        margin: '0 auto',
        padding: '0',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Canvas
        style={{
          width: '100%',
          height: '60vw', // Responsive height based on viewport width
          maxHeight: '400px', // Prevents from getting too tall
          background: 'transparent',
        }}
        camera={{ position: [0, 1, 3], fov: 50 }}
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

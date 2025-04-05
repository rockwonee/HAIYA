import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';

const SimpleModel = ({ onLoad }) => {
  const modelRef = useRef();
  const scroll = useScroll();
  
  // Notify that the model is ready
  React.useEffect(() => {
    if (onLoad) onLoad();
  }, [onLoad]);
  
  // Update the model based on scroll position
  useFrame((state) => {
    if (modelRef.current) {
      // Rotate the model based on scroll position
      const scrollOffset = scroll.offset;
      modelRef.current.rotation.y = scrollOffset * Math.PI * 4;
      modelRef.current.rotation.x = scrollOffset * Math.PI * 0.5;
      
      // Add some floating animation
      modelRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });
  
  return (
    <group ref={modelRef} position={[0, 0, 0]}>
      {/* Create a simple 3D model */}
      <mesh>
        <torusKnotGeometry args={[1, 0.3, 100, 16]} />
        <meshStandardMaterial 
          color="#4a90e2" 
          metalness={0.7} 
          roughness={0.2} 
        />
      </mesh>
      
      {/* Add some orbiting rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2, 0.05, 16, 32]} />
        <meshStandardMaterial 
          color="#e24a90" 
          metalness={0.7} 
          roughness={0.2} 
        />
      </mesh>
      
      <mesh rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[2, 0.05, 16, 32]} />
        <meshStandardMaterial 
          color="#e2e24a" 
          metalness={0.7} 
          roughness={0.2} 
        />
      </mesh>
      
      {/* Add some ambient light */}
      <ambientLight intensity={0.5} />
      
      {/* Add directional light */}
      <directionalLight position={[5, 5, 5]} intensity={1} />
      
      {/* Add a spotlight */}
      <spotLight position={[0, 5, 0]} angle={0.3} penumbra={1} intensity={1} />
    </group>
  );
};

export default SimpleModel; 
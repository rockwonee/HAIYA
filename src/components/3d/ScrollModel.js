import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import { Box, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ScrollModel = () => {
  const modelRef = useRef();
  const { viewport } = useThree();
  const scroll = useScroll();
  
  // Create a custom geometry for the AI model
  const createAIModel = () => {
    const group = new THREE.Group();
    
    // Main body
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1.5, 1),
      new THREE.MeshStandardMaterial({ 
        color: '#2196f3',
        metalness: 0.7,
        roughness: 0.2,
      })
    );
    group.add(body);
    
    // Head
    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 32, 32),
      new THREE.MeshStandardMaterial({ 
        color: '#f50057',
        metalness: 0.7,
        roughness: 0.2,
      })
    );
    head.position.y = 1.2;
    group.add(head);
    
    // Eyes
    const eyeGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const eyeMaterial = new THREE.MeshStandardMaterial({ color: '#ffffff' });
    
    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(0.2, 1.3, 0.4);
    group.add(leftEye);
    
    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(-0.2, 1.3, 0.4);
    group.add(rightEye);
    
    // Arms
    const armGeometry = new THREE.BoxGeometry(0.2, 1, 0.2);
    const armMaterial = new THREE.MeshStandardMaterial({ 
      color: '#2196f3',
      metalness: 0.7,
      roughness: 0.2,
    });
    
    const leftArm = new THREE.Mesh(armGeometry, armMaterial);
    leftArm.position.set(0.6, 0, 0);
    group.add(leftArm);
    
    const rightArm = new THREE.Mesh(armGeometry, armMaterial);
    rightArm.position.set(-0.6, 0, 0);
    group.add(rightArm);
    
    return group;
  };
  
  // Create the model
  const aiModel = createAIModel();
  
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
    <group ref={modelRef} position={[0, 0, 0]} scale={[1, 1, 1]}>
      <primitive object={aiModel} />
      
      {/* Add some ambient light */}
      <ambientLight intensity={0.5} />
      
      {/* Add directional light */}
      <directionalLight position={[5, 5, 5]} intensity={1} />
      
      {/* Add a spotlight */}
      <spotLight position={[0, 5, 0]} angle={0.3} penumbra={1} intensity={1} />
    </group>
  );
};

export default ScrollModel; 
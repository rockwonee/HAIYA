import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';

const AIModel = () => {
  const modelRef = useRef();
  const { viewport } = useThree();
  const scroll = useScroll();
  
  // Create a more complex AI model
  const createAIModel = () => {
    const group = new THREE.Group();
    
    // Create a neural network-like structure
    const createNeuralNetwork = () => {
      const neuralGroup = new THREE.Group();
      
      // Create nodes (spheres)
      const nodeCount = 20;
      const nodes = [];
      const nodeGeometry = new THREE.SphereGeometry(0.1, 16, 16);
      const nodeMaterial = new THREE.MeshStandardMaterial({ 
        color: '#2196f3',
        metalness: 0.7,
        roughness: 0.2,
        emissive: '#2196f3',
        emissiveIntensity: 0.2,
      });
      
      for (let i = 0; i < nodeCount; i++) {
        const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
        
        // Position nodes in a spherical pattern
        const phi = Math.acos(-1 + (2 * i) / nodeCount);
        const theta = Math.sqrt(nodeCount * Math.PI) * phi;
        
        node.position.x = Math.sin(phi) * Math.cos(theta) * 2;
        node.position.y = Math.sin(phi) * Math.sin(theta) * 2;
        node.position.z = Math.cos(phi) * 2;
        
        nodes.push(node);
        neuralGroup.add(node);
      }
      
      // Create connections (lines)
      const lineMaterial = new THREE.LineBasicMaterial({ 
        color: '#f50057',
        transparent: true,
        opacity: 0.5,
      });
      
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          // Only connect some nodes to create a network effect
          if (Math.random() > 0.7) {
            const geometry = new THREE.BufferGeometry().setFromPoints([
              nodes[i].position,
              nodes[j].position,
            ]);
            const line = new THREE.Line(geometry, lineMaterial);
            neuralGroup.add(line);
          }
        }
      }
      
      return neuralGroup;
    };
    
    // Create a central core
    const coreGeometry = new THREE.IcosahedronGeometry(0.8, 1);
    const coreMaterial = new THREE.MeshStandardMaterial({ 
      color: '#f50057',
      metalness: 0.8,
      roughness: 0.2,
      emissive: '#f50057',
      emissiveIntensity: 0.3,
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    group.add(core);
    
    // Add neural network
    const neuralNetwork = createNeuralNetwork();
    group.add(neuralNetwork);
    
    // Add orbiting rings
    const createRing = (radius, color) => {
      const ringGeometry = new THREE.TorusGeometry(radius, 0.05, 16, 100);
      const ringMaterial = new THREE.MeshStandardMaterial({ 
        color: color,
        metalness: 0.7,
        roughness: 0.2,
        transparent: true,
        opacity: 0.7,
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.rotation.x = Math.PI / 2;
      return ring;
    };
    
    const ring1 = createRing(1.2, '#2196f3');
    const ring2 = createRing(1.5, '#f50057');
    const ring3 = createRing(1.8, '#2196f3');
    
    group.add(ring1);
    group.add(ring2);
    group.add(ring3);
    
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
      
      // Animate the rings
      const rings = modelRef.current.children.filter(child => child.type === 'Mesh' && child.geometry.type === 'TorusGeometry');
      rings.forEach((ring, index) => {
        ring.rotation.z = state.clock.elapsedTime * (0.2 + index * 0.1);
      });
      
      // Pulse the core
      const core = modelRef.current.children[0];
      if (core) {
        core.scale.x = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
        core.scale.y = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
        core.scale.z = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      }
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

export default AIModel; 
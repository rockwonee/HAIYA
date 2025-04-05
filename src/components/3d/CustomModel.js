import React, { useRef, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

const CustomModel = ({ modelPath, onLoad, onError }) => {
  const modelRef = useRef();
  const { viewport } = useThree();
  const scroll = useScroll();
  const [error, setError] = useState(null);
  const [model, setModel] = useState(null);
  
  // Create a loader manager to handle loading events
  const loaderManager = new THREE.LoadingManager();
  
  // Set up error handling for the loader manager
  loaderManager.onError = (url) => {
    console.error('Error loading model:', url);
    const errorMsg = `Failed to load model: ${url}`;
    setError(errorMsg);
    if (onError) onError(errorMsg);
  };
  
  // Set up load complete callback
  loaderManager.onLoad = () => {
    console.log('Model loaded successfully');
    if (onLoad) onLoad();
  };
  
  // Always call useLoader, but handle errors inside
  const gltf = useLoader(
    GLTFLoader, 
    modelPath, 
    (loader) => {
      // Use our custom loader manager
      loader.manager = loaderManager;
    }
  );
  
  // Process the model after it's loaded
  useEffect(() => {
    if (gltf && gltf.scene) {
      try {
        // Clone the model to avoid modifying the original
        const clonedModel = gltf.scene.clone();
        
        // Calculate the bounding box to center the model
        const box = new THREE.Box3().setFromObject(clonedModel);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        
        // Center the model
        clonedModel.position.x = -center.x;
        clonedModel.position.y = -center.y;
        clonedModel.position.z = -center.z;
        
        // Scale the model to a reasonable size
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 2 / maxDim;
        clonedModel.scale.set(scale, scale, scale);
        
        // Apply any material modifications if needed
        clonedModel.traverse((child) => {
          if (child.isMesh) {
            // Make sure materials are properly set up
            child.castShadow = true;
            child.receiveShadow = true;
            
            // Optional: Modify materials
            if (child.material) {
              child.material.metalness = 0.7;
              child.material.roughness = 0.2;
            }
          }
        });
        
        // Set the processed model
        setModel(clonedModel);
      } catch (err) {
        console.error('Error processing model:', err);
        const errorMsg = `Error processing model: ${err.message}`;
        setError(errorMsg);
        if (onError) onError(errorMsg);
      }
    }
  }, [gltf, onLoad, onError]);
  
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
  
  // If there was an error loading the model, show a message
  if (error) {
    console.error('Model loading error:', error);
    // Return a fallback mesh if loading fails
    return (
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="red" />
      </mesh>
    );
  }
  
  // If model is not loaded yet, show nothing
  if (!model) {
    return null;
  }
  
  return (
    <group ref={modelRef} position={[0, 0, 0]}>
      <primitive object={model} />
      
      {/* Add some ambient light */}
      <ambientLight intensity={0.5} />
      
      {/* Add directional light */}
      <directionalLight position={[5, 5, 5]} intensity={1} />
      
      {/* Add a spotlight */}
      <spotLight position={[0, 5, 0]} angle={0.3} penumbra={1} intensity={1} />
    </group>
  );
};

export default CustomModel; 
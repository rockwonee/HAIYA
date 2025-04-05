import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import { Box, Typography, CircularProgress, Button } from '@mui/material';

// Model wrapper component to handle rotation
const ModelWrapper = ({ model }) => {
  const groupRef = useRef();
  const lastScrollY = useRef(0);
  const decay = 0.90;
  const totalRotation = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate how far we've scrolled as a percentage of total scrollable area
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScrollProgress = window.scrollY / scrollHeight;
      
      // Calculate target rotations based on scroll position
      // Y-axis: full 360 rotation
      const targetYRotation = currentScrollProgress * Math.PI * 2;
      // Z-axis: subtle tilt of 30 degrees
      // const targetZRotation = (currentScrollProgress - 0.5) * Math.PI / 4;

      const targetXRotation = currentScrollProgress * Math.PI / 4;
      
      const currentYRotation = groupRef.current.rotation.y;
      // const currentZRotation = groupRef.current.rotation.z;
      const currentXRotation = groupRef.current.rotation.x;
      
      // Smoothly rotate to targets
      const yRotationDelta = targetYRotation - currentYRotation;
      // const zRotationDelta = targetZRotation - currentZRotation;
      const xRotationDelta = targetXRotation - currentXRotation;
      
      groupRef.current.rotation.y = currentYRotation + (yRotationDelta * 0.05);
      // groupRef.current.rotation.z = currentZRotation + (zRotationDelta * 0.05);
      groupRef.current.rotation.x = currentXRotation + (xRotationDelta * 0.05);
    };

    // Set initial rotation
    if (groupRef.current) {
      groupRef.current.rotation.y = 0;
      // groupRef.current.rotation.z = 0;
      groupRef.current.rotation.x = 0;
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <group ref={groupRef} position={[5, 0, 0]}>
      <primitive object={model} />
      
      {/* Enhanced lighting setup */}
      <ambientLight intensity={1.0} />
      
      {/* Key light - adjusted position for right-aligned model */}
      <directionalLight 
        position={[10, 5, 5]} 
        intensity={3} 
        castShadow
      />
      
      {/* Fill light - adjusted position */}
      <directionalLight 
        position={[0, 3, -5]} 
        intensity={5} 
        color="rgb(224, 211, 138)"
      />
      
      {/* Rim light - adjusted position */}
      <directionalLight 
        position={[5, -5, 0]} 
        intensity={1} 
        color="#ffddaa"
      />
      
      {/* Top spotlight - adjusted position */}
      <spotLight 
        position={[5, 8, 0]} 
        angle={0.5} 
        penumbra={1} 
        intensity={2}
        castShadow
      />
      
      {/* Ground plane - adjusted position */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.4} />
      </mesh>
    </group>
  );
};

const TestModelLoader = ({ modelPath }) => {
  const [model, setModel] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modelInfo, setModelInfo] = useState('');
  const [loadingAttempts, setLoadingAttempts] = useState(0);

  useEffect(() => {
    let isMounted = true;
    let currentLoader = null;

    const loadModel = async (path) => {
      if (!isMounted) return;
      
      console.log(`Attempting to load model from: ${path}`);
      setModelInfo(`Attempting to load from: ${path}`);
      
      const loader = new GLTFLoader();
      currentLoader = loader;
      
      const manager = new THREE.LoadingManager();
      manager.onProgress = (url, loaded, total) => {
        if (!isMounted || currentLoader !== loader) return;
        const progress = Math.round((loaded / total) * 100);
        setModelInfo(`Loading progress: ${progress}%`);
      };
      
      try {
        const gltf = await new Promise((resolve, reject) => {
          loader.load(
            path,
            resolve,
            (progress) => {
              if (!isMounted || currentLoader !== loader) return;
              const percent = progress.total ? Math.round((progress.loaded / progress.total) * 100) : 0;
              setModelInfo(`Loading progress: ${percent}%`);
            },
            reject
          );
        });

        if (!isMounted || currentLoader !== loader) return;
        
        console.log('Model loaded successfully');
        setModel(gltf.scene);
        setIsLoading(false);
        setError(null);
        setModelInfo('Model loaded successfully');
        
      } catch (err) {
        if (!isMounted || currentLoader !== loader) return;
        
        console.error('Error loading model:', err);
        setError(`Error loading model: ${err.message}`);
        setIsLoading(false);
        setModelInfo(`Failed to load from: ${path}`);
        
        // Try the next path format if available
        const nextAttempt = loadingAttempts + 1;
        setLoadingAttempts(nextAttempt);
        
        if (nextAttempt < paths.length) {
          loadModel(paths[nextAttempt]);
        }
      }
    };

    const paths = [
      modelPath,
      `/${modelPath}`,
      `${process.env.PUBLIC_URL}/${modelPath}`,
      `${window.location.origin}/${modelPath}`,
    ];

    if (loadingAttempts < paths.length) {
      loadModel(paths[loadingAttempts]);
    }

    return () => {
      isMounted = false;
      currentLoader = null;
    };
  }, [modelPath, loadingAttempts]);

  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      {/* Loading indicator */}
      {isLoading && (
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: 'white',
          }}
        >
          <CircularProgress color="primary" />
          <Typography variant="h6" sx={{ mt: 2 }}>
            Loading 3D Model...
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            {modelInfo}
          </Typography>
        </Box>
      )}

      {/* Error message */}
      {error && !model && (
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
            backgroundColor: 'rgba(255, 0, 0, 0.7)',
            padding: 3,
            borderRadius: 2,
            color: 'white',
            textAlign: 'center',
          }}
        >
          <Typography variant="h6">Error Loading Model</Typography>
          <Typography variant="body1">{error}</Typography>
          <Typography variant="body2" sx={{ mt: 1, fontSize: '0.8rem' }}>
            {modelInfo}
          </Typography>
        </Box>
      )}

      <Canvas
        camera={{ position: [5, 0, 8], fov: 50 }}
        style={{ 
          position: 'fixed', 
          top: 0, 
          right: 0,
          width: '60%',
          height: '100vh',
          zIndex: 1 
        }}
        shadows
      >
        {model && (
          <>
            <ModelWrapper model={model} />
            <OrbitControls 
              enableZoom={false}
              enablePan={false}
              enableRotate={false}
              minDistance={3}
              maxDistance={3}
              target={[5, 0, 0]}
            />
          </>
        )}
      </Canvas>
    </div>
  );
};

export default TestModelLoader; 
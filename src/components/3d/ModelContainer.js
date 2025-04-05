import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ScrollControls } from '@react-three/drei';
import CustomModel from './CustomModel';
import SimpleModel from './SimpleModel';
import { Box, Typography, CircularProgress, Button } from '@mui/material';

const ModelContainer = ({ modelPath }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [useFallback, setUseFallback] = useState(false);
  const [absolutePath, setAbsolutePath] = useState('');

  // Handle loading state
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Handle error state
  const handleError = (errorMessage) => {
    console.error('Model loading error:', errorMessage);
    setError(errorMessage);
    setIsLoading(false);
  };

  // Switch to fallback model
  const switchToFallback = () => {
    setUseFallback(true);
    setError(null);
  };

  // Try to determine the absolute path to the model
  useEffect(() => {
    // Try different path formats to find the correct one
    const tryPaths = [
      modelPath,                    // Original path
      `/${modelPath}`,             // With leading slash
      `${process.env.PUBLIC_URL}/${modelPath}`, // With PUBLIC_URL
      `${window.location.origin}/${modelPath}`, // With full origin
    ];

    // Function to check if a path is valid
    const checkPath = async (path) => {
      try {
        const response = await fetch(path, { method: 'HEAD' });
        if (response.ok) {
          console.log(`Valid model path found: ${path}`);
          setAbsolutePath(path);
          return true;
        }
        return false;
      } catch (err) {
        console.log(`Path not valid: ${path}`);
        return false;
      }
    };

    // Try each path
    const findValidPath = async () => {
      for (const path of tryPaths) {
        if (await checkPath(path)) {
          break;
        }
      }
    };

    findValidPath();
  }, [modelPath]);

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
        </Box>
      )}

      {/* Error message */}
      {error && !useFallback && (
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
            Tried path: {modelPath}
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={switchToFallback}
            sx={{ mt: 2 }}
          >
            Use Fallback Model
          </Button>
        </Box>
      )}

      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ position: 'fixed', top: 0, left: 0, zIndex: 1 }}
      >
        <Suspense fallback={null}>
          <ScrollControls pages={3} damping={0.25}>
            {useFallback ? (
              <SimpleModel onLoad={handleLoadingComplete} />
            ) : (
              <CustomModel 
                modelPath={absolutePath || modelPath} 
                onLoad={handleLoadingComplete}
                onError={handleError}
              />
            )}
            <OrbitControls enableZoom={false} />
          </ScrollControls>
        </Suspense>
      </Canvas>
      
      {/* Content overlay */}
      <div style={{ 
        position: 'relative', 
        zIndex: 2, 
        height: '300vh', // 3 pages worth of content
        pointerEvents: 'none' // Allow scrolling through the 3D canvas
      }}>
        {/* This div is just to create scrollable space */}
      </div>
    </div>
  );
};

export default ModelContainer; 
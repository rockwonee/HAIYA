import React, { useRef, useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import Globe from 'react-globe.gl';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
// import ModelContainer from '../components/3d/ModelContainer';
// import TestModelLoader from '../components/3d/TestModelLoader';


const MotionBox = motion(Box);

const Home = () => {
  const theme = useTheme();
  const globeRef = useRef();
  const [globeTop, setGlobeTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Only rotate if the user has scrolled
      if (scrollY > 0) {
        const lng = 0 + (scrollY / 10);
        if (globeRef.current) {
          globeRef.current.pointOfView({ lat: 0, lng, altitude: 2.5 }, 0);
        }
      }
      // Move globe up as you scroll, up to -100vh (off the page)
      const newTop = Math.max(-window.innerHeight, -scrollY);
      setGlobeTop(newTop);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      title: 'Company Profile',
      description: 'Cutting-edge artificial intelligence technology for modern businesses',
      image: 'https://source.unsplash.com/random/800x600?ai',
    },
    {
      title: 'Explore the Design Philosophy',
      description: 'State-of-the-art hardware solutions powered by AI',
      image: 'https://source.unsplash.com/random/800x600?technology',
    },
    {
      title: 'Member Introduction',
      description: "Pushing the boundaries of what's possible with AI",
      image: 'https://source.unsplash.com/random/800x600?future',
    },
  ];

  const majorCities = [
    { lat: 35.6895, lng: 139.6917, size: 0.1, color: '#FFD700' }, // Tokyo
    { lat: 28.7041, lng: 77.1025, size: 0.1, color: '#FFD700' }, // Delhi
    { lat: 31.2304, lng: 121.4737, size: 0.1, color: '#FFD700' }, // Shanghai
    { lat: 40.7128, lng: -74.0060, size: 0.1, color: '#FFD700' }, // New York
    { lat: -23.5505, lng: -46.6333, size: 0.1, color: '#FFD700' }, // São Paulo
    { lat: 55.7558, lng: 37.6173, size: 0.1, color: '#FFD700' }, // Moscow
    { lat: 51.5074, lng: -0.1278, size: 0.1, color: '#FFD700' }, // London
    { lat: 34.0522, lng: -118.2437, size: 0.1, color: '#FFD700' }, // Los Angeles
    { lat: 19.0760, lng: 72.8777, size: 0.1, color: '#FFD700' }, // Mumbai
    { lat: 39.9042, lng: 116.4074, size: 0.1, color: '#FFD700' }, // Beijing
    { lat: 48.8566, lng: 2.3522, size: 0.1, color: '#FFD700' }, // Paris
    { lat: 41.0082, lng: 28.9784, size: 0.1, color: '#FFD700' }, // Istanbul
    { lat: -33.8688, lng: 151.2093, size: 0.1, color: '#FFD700' }, // Sydney
    { lat: 1.3521, lng: 103.8198, size: 0.1, color: '#FFD700' }, // Singapore
    { lat: 37.7749, lng: -122.4194, size: 0.1, color: '#FFD700' }, // San Francisco
  ];

  return (
    <>
      {/* Globe Background */}
      <Box sx={{
        position: 'fixed',
        top: `${globeTop}px`,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1,
        pointerEvents: 'none',
        background: 'transparent',
      }}>
        <Globe
          ref={globeRef}
          atmosphereColor="rgba(255, 208, 0, 0)"
          width={window.innerWidth}
          height={window.innerHeight}
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl={"//unpkg.com/three-globe/example/img/earth-dark.jpg"}
          rendererConfig={{ antialias: true, alpha: true, pixelRatio: window.devicePixelRatio }}
          pointsData={majorCities}
          pointLat="lat"
          pointLng="lng"
          pointColor="color"
          pointAltitude="size"
          pointRadius={0.2}
          pointResolution={12}
        />
      </Box>
      <Box sx={{ position: 'relative', zIndex: 3 }}>
        <Box
          sx={{
            backgroundColor: "rgba(59, 59, 59, 0.15)", // transparent white
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)", // for Safari support
            borderRadius: 4,
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
            border: "1px solid rgba(17, 17, 17, 0.2)",
            padding: 4,
            position: 'relative',
            overflow: 'hidden',
            py: 8,
            color: "primary.main", // ensure text is readable
            zIndex: 3,
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <MotionBox
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <Typography variant="h2" component="h1" gutterBottom sx={{ 
                    color: 'rgb(237, 232, 140)',
                    fontWeight: 'bold',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                  }}>
                    HAIYA AI
                  </Typography>
                  <Typography variant="h5" paragraph sx={{
                    color: 'rgb(237, 232, 140)',
                  }}>
                    Pioneering the future of AI technology
                  </Typography>
                  <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
                    <Button variant="contained" color="secondary" href="#company-profile">Company Profile</Button>
                    <Button variant="contained" color="secondary" href="#design-philosophy">Explore Design Philosophy</Button>
                    <Button variant="contained" color="secondary" href="#member-introduction">Member Introduction</Button>
                  </Box>
                </MotionBox>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Container maxWidth="lg" sx={{ py: 8, position: 'relative', zIndex: 3 }}>
          <Typography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom
            sx={{ mb: 6 }}
          >
            Our Solutions
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <MotionBox
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      backgroundColor: 'rgba(16, 17, 17, 0.7)', // semi-transparent background
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)', // for Safari support
                      borderRadius: 4,
                      border: '1px solid rgba(237, 232, 140, 0.1)', // subtle golden border
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        transition: 'transform 0.3s ease-in-out',
                        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.3)',
                        backgroundColor: 'rgba(16, 17, 17, 0.8)', // slightly less transparent on hover
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={feature.image}
                      alt={feature.title}
                      sx={{
                        borderBottom: '1px solid rgba(237, 232, 140, 0.1)',
                      }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h3" sx={{ 
                        color: 'rgb(237, 232, 140)',
                        fontWeight: 'bold',
                      }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: 'rgba(237, 232, 140, 0.8)',
                      }}>
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Container>
        {/* Anchor Sections for Scrolling */}
        <Container maxWidth="md" sx={{ py: 8 }}>
          <Box id="company-profile" sx={{ mb: 8 }}>
            <Typography variant="h4" gutterBottom>Company Profile</Typography>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. Mauris euismod, sapien eu commodo cursus, nisi erat dictum erat, nec dictum erat nisi euismod erat.
            </Typography>
            <Typography paragraph>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus.
            </Typography>
          </Box>
          <Box id="design-philosophy" sx={{ mb: 8 }}>
            <Typography variant="h4" gutterBottom>Explore Design Philosophy</Typography>
            <Typography paragraph>
              Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            </Typography>
            <Typography paragraph>
              Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem.
            </Typography>
          </Box>
          <Box id="member-introduction" sx={{ mb: 8 }}>
            <Typography variant="h4" gutterBottom>Member Introduction</Typography>
            <Typography paragraph>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
            </Typography>
            <Typography paragraph>
              Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui.
            </Typography>
          </Box>
        </Container>

        {/* 3D Pyramid Model Section */}
        <Container maxWidth="md" sx={{ py: 8, minHeight: 400 }}>
          <Canvas style={{ width: '100%', height: 400 }} camera={{ position: [0, 1.5, 4], fov: 50 }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[2, 5, 2]} intensity={1} />
            {/* Solid black pyramid */}
            <mesh rotation={[-Math.PI / 10, Math.PI / 6, 0]}>
              <coneGeometry args={[1, 1.5, 4]} />
              <meshStandardMaterial color="#111" metalness={0.7} roughness={0.3} />
            </mesh>
            {/* Gold wireframe overlay */}
            <mesh rotation={[-Math.PI / 10, Math.PI / 6, 0]}>
              <coneGeometry args={[1.01, 1.51, 4]} />
              <meshBasicMaterial color="#FFD700" wireframe />
            </mesh>
          </Canvas>
        </Container>

        {/* Features Section */}
        
      </Box>
    </>
  );
};

export default Home; 
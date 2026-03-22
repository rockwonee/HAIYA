import React, { useRef, useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
} from '@mui/material';
import { motion } from 'framer-motion';
import Globe from 'react-globe.gl';
import { Canvas } from '@react-three/fiber';
import '../goldTheme.css';

// Add global CSS override for Three.js Canvas overflow
const globalStyles = `
  .MuiBox-root canvas {
    overflow: visible !important;
  }
  .MuiBox-root > div {
    overflow: visible !important;
  }
`;

// Inject global styles
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = globalStyles;
  document.head.appendChild(styleElement);
}
// import ModelContainer from '../components/3d/ModelContainer';
// import TestModelLoader from '../components/3d/TestModelLoader';


const MotionBox = motion(Box);

const Home = () => {
  const globeRef = useRef();
  const [globeTop, setGlobeTop] = useState(0);
  const [globeScale, setGlobeScale] = useState(1.5);
  const [pyramidRotation, setPyramidRotation] = useState(0);
  const [pyramidOpacity, setPyramidOpacity] = useState(0);
  const [pyramidTextOpacity, setPyramidTextOpacity] = useState(0);
  const [companyProfileOpacity, setCompanyProfileOpacity] = useState(0);
  const [designPhilosophyOpacity, setDesignPhilosophyOpacity] = useState(0);
  const [backgroundOpacity, setBackgroundOpacity] = useState(0);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 900px)');
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener?.('change', handler);
    return () => mq.removeEventListener?.('change', handler);
  }, []);

  useEffect(() => {
    if (isMobile) {
     setCompanyProfileOpacity(1);
     setDesignPhilosophyOpacity(1);
     setBackgroundOpacity(1);
     return;
    }


    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight * 2; // Maximum scroll distance for full effect

      // Rotate globe as you scroll
      if (scrollY > 0) {
        const lng = 0 + (scrollY / 10);
        if (globeRef.current) {
          globeRef.current.pointOfView({ lat: 0, lng, altitude: 2.5 }, 0);
        }
      }

      // Move globe up as you scroll, up to -100vh (off the page)
      const newTop = Math.max(-window.innerHeight, -scrollY);
      setGlobeTop(newTop);

      // Scale globe from 1.5 to 0.5 as you scroll (more dramatic scaling)
      const scrollProgress = Math.min(scrollY / maxScroll, 1);
      const newScale = 1.5 - (scrollProgress * 1.0);
      setGlobeScale(newScale);

      // Rotate pyramid slowly as you scroll
      const newRotation = scrollY * 0.001;
      setPyramidRotation(newRotation);

      // Calculate gradual opacity based on scroll position for fluid animations
      const pyramidSection = document.getElementById('pyramid-section');

      if (pyramidSection) {
        const rect = pyramidSection.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Calculate opacity based on section visibility in viewport - pyramid appears much earlier
        let opacity = 0;
        if (rect.top < viewportHeight * 0.9 && rect.bottom > viewportHeight * 0.1) {
          // Section is well within the viewport - much earlier threshold
          opacity = 1;
        } else if (rect.top < viewportHeight && rect.bottom > 0) {
          // Section is partially visible, calculate fade with smoother transition
          const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
          const totalHeight = rect.height;
          const rawOpacity = visibleHeight / totalHeight;
          // Apply easing function for smoother transition
          opacity = Math.max(0, Math.min(1, Math.pow(rawOpacity, 1.5)));
        }
        setPyramidOpacity(opacity);
        setPyramidTextOpacity(opacity);
      }

             // Set content opacity and slide-up animation based on scroll position
       // Make the golden box slide up from bottom as globe disappears
       // Background becomes fully visible much earlier
       const contentScrollProgress = Math.min(scrollY / (window.innerHeight * 0.05), 1); // Reduced from 0.4 to 0.2 for much earlier appearance
       const contentOpacity = Math.max(0, contentScrollProgress);

      // Calculate background opacity: starts at 0, becomes 0.6 (more solid) when appearing,
      // then quickly increases to 1 (fully visible) when centered, then fades out when scrolling past
      const contentSection = document.getElementById('content-section');
      let newBackgroundOpacity = 0;

      if (contentSection) {
        const rect = contentSection.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const centerY = viewportHeight / 2;
        const sectionCenter = rect.top + rect.height / 2;

        if (rect.top < viewportHeight && rect.bottom > 0) {
          // Section is visible
                     if (sectionCenter < centerY) {
             // Section is above center - very quick fade in with much higher minimum opacity
             const distanceFromCenter = Math.abs(centerY - sectionCenter);
             const maxDistance = viewportHeight / 12; // Reduced from /6 to /12 for much faster fade-in
             newBackgroundOpacity = Math.max(0.9, 1 - (distanceFromCenter / maxDistance)); // Increased from 0.8 to 0.9
           } else {
            // Section is below center - fade out
            const distanceFromCenter = Math.abs(centerY - sectionCenter);
            const maxDistance = viewportHeight / 2;
            newBackgroundOpacity = Math.max(0, 1 - (distanceFromCenter / maxDistance));
          }
        }
      }

      setBackgroundOpacity(newBackgroundOpacity);
      setCompanyProfileOpacity(contentOpacity);
      setDesignPhilosophyOpacity(contentOpacity);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
}, []);

  const majorCities = [
    { lat: 35.6895, lng: 139.6917, size: 0.1, color: '#FFD700' },
    { lat: 28.7041, lng: 77.1025, size: 0.1, color: '#FFD700' },
    { lat: 31.2304, lng: 121.4737, size: 0.1, color: '#FFD700' },
    { lat: 40.7128, lng: -74.0060, size: 0.1, color: '#FFD700' },
    { lat: -23.5505, lng: -46.6333, size: 0.1, color: '#FFD700' },
    { lat: 55.7558, lng: 37.6173, size: 0.1, color: '#FFD700' },
    { lat: 51.5074, lng: -0.1278, size: 0.1, color: '#FFD700' },
    { lat: 34.0522, lng: -118.2437, size: 0.1, color: '#FFD700' },
    { lat: 19.0760, lng: 72.8777, size: 0.1, color: '#FFD700' },
    { lat: 39.9042, lng: 116.4074, size: 0.1, color: '#FFD700' },
    { lat: 48.8566, lng: 2.3522, size: 0.1, color: '#FFD700' },
    { lat: 41.0082, lng: 28.9784, size: 0.1, color: '#FFD700' },
    { lat: -33.8688, lng: 151.2093, size: 0.1, color: '#FFD700' },
    { lat: 1.3521, lng: 103.8198, size: 0.1, color: '#FFD700' },
    { lat: 37.7749, lng: -122.4194, size: 0.1, color: '#FFD700' },
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
        transform: `scale(${globeScale})`,
        transformOrigin: 'center center',
        transition: 'transform 0.1s ease-out',
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

            backgroundColor: "rgba(59, 59, 59, 0.15)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            borderRadius: 4,
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
            border: "1px solid rgba(17, 17, 17, 0.2)",
            padding: 4,
            position: 'relative',
            overflow: 'visible',
            py: 8,
            color: "primary.main",
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
                  <Typography variant="h2" component="h1" gutterBottom className="gold-gradient-text" sx={{
                    fontWeight: 'bold',
                    fontSize: '4rem',
                    letterSpacing: '0.1em'
                  }}>
                    HAIYA
                  </Typography>
                  <Typography variant="h5" paragraph className="gold-glow-text" sx={{
                    fontSize: '1.6rem',
                    fontWeight: '500',
                    letterSpacing: '0.05em'
                  }}>
                    Pioneering the future of AI technology
                  </Typography>
                </MotionBox>
              </Grid>
            </Grid>
          </Container>
        </Box>
        {/* Combined Content Section with Golden Background */}
        <Container maxWidth={false} id="content-section" sx={{ py: 24, mt: 64, px: 4, position: 'relative' }}>
          <Box
            sx={{
              backgroundColor: `rgba(218, 165, 32, ${backgroundOpacity})`,
              borderRadius: 0,
              boxShadow: "0 8px 32px rgba(218, 165, 32, 0.3)",
              padding: 8,
              position: 'relative',
              overflow: 'visible',
              transform: `translateY(${(1 - Math.max(companyProfileOpacity, designPhilosophyOpacity)) * 200}px) rotate(-2deg)`,
              transition: 'all 0.6s ease-out',
              width: '120%',
              minHeight: '100vh',
              left: '-10%',

              ...(isMobile && {
                width: '100%',
                left: '0',
                transform: 'none',
                padding: 4,
                minHeight: 'auto',
              }),
            }}
          >
            {/* Text Container - Counter-rotated to keep text straight */}
            <Box
              sx={{
                transform: 'rotate(2deg)',
                transformOrigin: 'center center',
                ...(isMobile && {transform: 'none'}),
              }}
            >
              {/* Company Profile */}
              <Box
                sx={{
                  opacity: isMobile ? 1 : companyProfileOpacity,
                  transform: isMobile ? 'none' : `translateX(${(1 - companyProfileOpacity) * -100}px)`,
                  transition: 'all 0.3s ease-out',
                  mb: 8,
                  maxWidth: '900px',
                  mx: 'auto',
                  px: 2,
                  textAlign: 'justify',
                }}
              >
                <Typography
                  variant="h3"
                  gutterBottom
                  sx={{
                    fontSize: '2.5rem',
                    letterSpacing: '0.05em',
                    mb: 4,
                    color: '#000',
                    fontWeight: 900,
                  }}
                >
                  Company Profile
                </Typography>
                <Typography
                  paragraph
                  sx={{
                    fontSize: '1.4rem',
                    lineHeight: 1.8,
                    mb: 3,
                    color: '#000',
                    fontWeight: 700,
                  }}
                >
                  HAIYA was founded in Shibuya, Tokyo, Japan in 2025 by Taiyo Yumoto and Etsu Hayashi.
                  We are a Japanese startup company working to solve the heat problems of hardware products
                  which are becoming more serious as the AI market expands.
                </Typography>
              </Box>

              {/* Design Philosophy */}
              <Box
                sx={{
                  opacity: isMobile ? 1 :companyProfileOpacity,
                  transform: `translateX(${(1 - companyProfileOpacity) * -100}px)`,
                  transition: 'all 0.3s ease-out',
                  mb: 8,
                  maxWidth: '900px',
                  mx: 'auto',
                  px: 2,
                  textAlign: 'justify',
                }}
              >
                <Typography variant="h3" gutterBottom sx={{
                  fontSize: '2.5rem',
                  letterSpacing: '0.05em',
                  mb: 4,
                  color: '#000',
                  fontWeight: '900'
                }}>
                  Our Mission
                </Typography>
                <Typography paragraph sx={{
                  fontSize: '1.4rem',
                  lineHeight: 1.8,
                  mb: 8,
                  color: '#000',
                  fontWeight: '700'
                }}>
                  Working to solve the cooling issues of CPU QPUs, which are becoming
                  more serious behind the expansion of the AI and quantum markets, and
                  building a sustainable infrastructure.
                </Typography>
                <Typography variant="h3" gutterBottom sx={{
                  fontSize: '2.5rem',
                  letterSpacing: '0.05em',
                  mb: 4,
                  color: '#000',
                  fontWeight: '900'
                }}>
                  Our Vision
                </Typography>
                <Typography paragraph sx={{
                  fontSize: '1.4rem',
                  lineHeight: 1.8,
                  mb: 3,
                  color: '#000',
                  fontWeight: '700'
                }}>
                  Utilizing cutting-edge plasma cooling technology to expand the
                  practical application of local AI hardware products.
                </Typography>
                <Typography paragraph sx={{
                  fontSize: '1.4rem',
                  lineHeight: 1.8,
                  mb: 3,
                  color: '#000',
                  fontWeight: '700'
                }}>
                  Aiming to manufacture and sell personal quantum computers in the future.
                </Typography>

                {/* Link to Philosophy Page */}
                <Box sx={{ mt: 4, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                  <Button
                    component={RouterLink}
                    to="/philosophy"
                    variant="outlined"
                    sx={{
                      borderColor: '#000',
                      color: '#000',
                      fontWeight: '700',
                      fontSize: '1.1rem',
                      padding: '12px 24px',
                      borderRadius: '8px',
                      textTransform: 'none',
                      '&:hover': {
                        borderColor: '#FFD700',
                        backgroundColor: 'rgba(255, 215, 0, 0.1)',
                        color: '#FFD700',
                      },
                      transition: 'all 0.3s ease',
                    }}
                    endIcon={
                      <Box
                        component="span"
                        sx={{
                          fontSize: '1.2rem',
                          fontWeight: 'bold',
                          transform: 'translateX(0)',
                          transition: 'transform 0.3s ease',
                        }}
                      >
                        →
                      </Box>
                    }
                  >
                    Learn More About Our Philosophy
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>

        {/* 3D Pyramid Model Section */}
        <Container maxWidth="lg" id="pyramid-section" sx={{ py: 16, minHeight: 800, mt: 8, pb: 8, overflow: 'visible', position: 'relative' }}>
          <Box sx={{ position: 'relative', minHeight: '100%' }}>
            {/* 3D Pyramid - Much Larger and Positioned */}
            <Box
              sx={{
                position: 'absolute',
                right: '-50%',
                top: '50%',
                width: '120%',
                height: '1200px',
                zIndex: 2,
                opacity: pyramidOpacity,
                transform: `translateY(-50%) translateX(${(1 - pyramidOpacity) * 200}px)`,
                transition: 'all 0.8s ease-out',
                overflow: 'visible',
                '& canvas': {
                  overflow: 'visible !important',
                },
                '& .MuiBox-root': {
                  overflow: 'visible !important',
                },
              }}
            >
              <Canvas
                style={{ width: '100%', height: '100%', overflow: 'visible' }}
                camera={{ position: [3, 8, 20], fov: 25 }}
                gl={{ preserveDrawingBuffer: true, antialias: true }}
              >
                <ambientLight intensity={0.6} />
                <directionalLight position={[2, 5, 2]} intensity={1} />
                {/* Much larger solid black pyramid with square base - 1.5x bigger than before */}
                <group position={[0, 0.78, 0]}> {/* move pyramid down slightly */}
                  <mesh rotation={[-Math.PI / 10, Math.PI / 6 + pyramidRotation, 0]}>
                    <coneGeometry args={[3.9, 6.24, 4]} />
                    <meshStandardMaterial color="#111" metalness={0.7} roughness={0.3} />
                  </mesh>

                  <mesh rotation={[-Math.PI / 10, Math.PI / 6 + pyramidRotation, 0]}>
                    <coneGeometry args={[4.21, 6.55, 4]} />
                    <meshBasicMaterial color="#FFD700" wireframe />
                  </mesh>
                </group>
              </Canvas>
            </Box>

            {/* Text Content - Overlapping the Pyramid */}
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                top: '50%',
                width: '50%',
                zIndex: 3,
                opacity: pyramidTextOpacity,
                transform: `translateY(-50%)`,
                transition: 'opacity 0.5s ease-out',
              }}
            >
              <Box sx={{
                backgroundColor: "rgba(59, 59, 59, 0.15)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                borderRadius: 4,
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                border: "1px solid rgba(17, 17, 17, 0.2)",
                padding: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
                <Typography variant="h4" gutterBottom className="gold-gradient-text" sx={{
                  fontWeight: 'bold',
                  fontSize: '1.8rem',
                  letterSpacing: '0.05em'
                }}>
                  Hierarchy of Resonance
                </Typography>
                <Typography paragraph className="gold-body-text" sx={{
                  textAlign: 'justify',
                  fontSize: '1.1rem',
                  lineHeight: 1.6
                }}>
                  The pyramid illustrates how HAIYA's technology extends to various layers of AI
                  society and infrastructure.
                  <p>
                  Expansion of cooling infrastructure in the supply and demand of autonomous distributed PCs.
                  </p>
                  <p>
                  Infrastructure layer - Improved operation and productivity of next-generation QPU CPUs with
                  silent plasma cooling.
                  </p>
                  <p>
                  Global layer - Stabilizing cloud and local environments in the golden age of AI.
                  </p>
                </Typography>
                <Box sx={{ mt: 4, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                  <Button
                    component={RouterLink}
                    to="/software"
                    variant="outlined"
                    className="gold-body-text"
                    sx={{
                      borderColor: ' rgba(255, 238, 191, 0.9)',
                      color: ' rgba(255, 238, 191, 0.9)',
                      fontWeight: '700',
                      fontSize: '1.1rem',
                      padding: '12px 24px',
                      borderRadius: '8px',
                      textTransform: 'none',
                      '&:hover': {
                        borderColor: '#FFD700',
                        backgroundColor: 'rgba(255, 215, 0, 0.1)',
                        color: '#FFD700',
                      },
                      transition: 'all 0.3s ease',
                    }}
                    endIcon={
                      <Box
                        component="span"
                        sx={{
                          color: ' rgba(255, 238, 191, 0.9)',
                          fontSize: '1.2rem',
                          fontWeight: 'bold',
                          transform: 'translateX(0)',
                          transition: 'transform 0.3s ease',
                        }}
                      >
                        →
                      </Box>
                    }
                  >
                    Learn More About Our Software
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>

        {/* Footer Section */}
        <Box sx={{
          backgroundColor: '#111',
          color: '#fff',
          py: 8,
          mt: 4,
          borderTop: '1px solid rgba(255, 215, 0, 0.2)'
        }}>
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              {/* Company Info */}
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom sx={{ color: '#FFD700', fontWeight: 'bold', mb: 3 }}>
                  HAIYA
                </Typography>
                <Typography variant="body2" sx={{ color: '#ccc', mb: 2 }}>
                  Pioneering the future of AI technology through emotional resonance and quantum consciousness.
                </Typography>
                <Typography variant="body2" sx={{ color: '#ccc' }}>
                  Founded in Tokyo, Japan 2025
                </Typography>
              </Grid>

              {/* Quick Links */}
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom sx={{ color: '#FFD700', fontWeight: 'bold', mb: 3 }}>
                  Quick Links
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Button
                    component={RouterLink}
                    to="/"
                    sx={{
                      color: '#ccc',
                      textTransform: 'none',
                      justifyContent: 'flex-start',
                      p: 0,
                      '&:hover': { color: '#FFD700' }
                    }}
                  >
                    Home
                  </Button>
                  <Button
                    component={RouterLink}
                    to="/philosophy"
                    sx={{
                      color: '#ccc',
                      textTransform: 'none',
                      justifyContent: 'flex-start',
                      p: 0,
                      '&:hover': { color: '#FFD700' }
                    }}
                  >
                    Philosophy
                  </Button>
                  <Button
                    component={RouterLink}
                    to="/software"
                    sx={{
                      color: '#ccc',
                      textTransform: 'none',
                      justifyContent: 'flex-start',
                      p: 0,
                      '&:hover': { color: '#FFD700' }
                    }}
                  >
                    Software
                  </Button>
                  <Button
                    component={RouterLink}
                    to="/contact"
                    sx={{
                      color: '#ccc',
                      textTransform: 'none',
                      justifyContent: 'flex-start',
                      p: 0,
                      '&:hover': { color: '#FFD700' }
                    }}
                  >
                    Contact
                  </Button>
                </Box>
              </Grid>

              {/* Legal & Contact */}
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom sx={{ color: '#FFD700', fontWeight: 'bold', mb: 3 }}>
                  Legal & Contact
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Button
                    component={RouterLink}
                    to="/privacy"
                    sx={{
                      color: '#ccc',
                      textTransform: 'none',
                      justifyContent: 'flex-start',
                      p: 0,
                      '&:hover': { color: '#FFD700' }
                    }}
                  >
                    Privacy Policy
                  </Button>
                  <Button
                    component={RouterLink}
                    to="/terms"
                    sx={{
                      color: '#ccc',
                      textTransform: 'none',
                      justifyContent: 'flex-start',
                      p: 0,
                      '&:hover': { color: '#FFD700' }
                    }}
                  >
                    Terms of Service
                  </Button>
                  <Button
                    component={RouterLink}
                    to="/contact"
                    sx={{
                      color: '#ccc',
                      textTransform: 'none',
                      justifyContent: 'flex-start',
                      p: 0,
                      '&:hover': { color: '#FFD700' }
                    }}
                  >
                    Contact Us
                  </Button>
                </Box>
              </Grid>
            </Grid>

            {/* Copyright Bar */}
            <Box sx={{
              borderTop: '1px solid rgba(255, 215, 0, 0.2)',
              mt: 4,
              pt: 4,
              textAlign: 'center'
            }}>
              <Typography variant="body2" sx={{ color: '#999' }}>
                © 2025 HAIYA LLC. All rights reserved. | Pioneering emotional AI technology
              </Typography>
            </Box>
          </Container>
        </Box>  
      </Box>
    </>
  );
};

export default Home; 
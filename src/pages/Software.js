import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
} from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  PhoneIphone,
  Psychology,
  Security,
  Lightbulb,
  Computer,
  Storage,
  SevereCold,
  Handshake,
} from '@mui/icons-material';

const MotionBox = motion(Box);
const MotionCard = motion(Card);
const MotionPaper = motion(Paper);

const Software = () => {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Psychology sx={{ fontSize: 40, color: '#FFD700' }} />,
      title: 'Right-Brain AI',
      description: ' Edge right-brain AI for adaptive, intuitive, and creative computing.',
    },
    {
      icon: <Security sx={{ fontSize: 40, color: '#FFD700' }} />,
      title: 'Plasma Cooling',
      description: 'Plasma-assisted thermal control for vibration-free cooling in quantum systems.',
    },
    {
      icon: <Lightbulb sx={{ fontSize: 40, color: '#FFD700' }} />,
      title: 'Quantum Hardware',
      description: 'Quantum-enabled hardware orchestration for integrating computing with the physical environment.',
    },
  ];

  const timeline = [
    {
      date: 'Q4 2025',
      title: 'Closed Prototype',
      description: 'Internal demonstration of the HAIYA I plasma cooling prototype.',
      color: '#FFD700',
    },
    {
      date: '2026',
      title: ' Edge Integration Testing',
      description: 'Integration of the right-brain AI OS with a prototype quantum CPU.',
      color: '#FF6B35',
    },
    {
      date: '2027',
      title: 'Strategic Rollout',
      description: 'Industry licensing and cross-industry deployment.',
      color: '#4ECDC4',
    },
  ];


  const marketingAreas = [
    'Quantum computing research institutes',
    'Defense and aerospace contractors',
    'Advanced data center and edge cloud providers',
    'Semiconductor and cooling material innovators',
  ];

  return (
    <>
    <Box sx={{ minHeight: '100vh', backgroundColor: '#0a0a0a' }}>
      {/* Hero Section with Parallax */}
      <MotionBox
        sx={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: `linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(255,215,0,0.1) 100%)`,
          position: 'relative',
          overflow: 'hidden',
        }}
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, -300]).get(),
        }}
      >
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            sx={{ textAlign: 'center', color: 'white' }}
          >
            <PhoneIphone sx={{ fontSize: 120, color: '#FFD700', mb: 4 }} />
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 'bold',
                mb: 3,
                background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              HAIYA Quantum Edge AI
            </Typography>
            <Typography
              variant="h4"
              sx={{
                mb: 4,
                color: '#ccc',
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.4,
              }}
            >
              HAIYA breaks new ground in right-brain AI. It's not just about logical processing;
              it's about creativity, intuition, and intelligence that resonates with physical reality.
            </Typography>
          </MotionBox>
        </Container>
      </MotionBox>
      <MotionBox
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            sx={{ textAlign: 'center', color: 'white' }}
          >
            <Typography
              variant="h3"
              component="h3"
              sx={{ mb: 4, color: '#FFD700', textAlign: 'center' }}
            >
              Our Technologies
            </Typography>
            <Typography
              variant="h6"
              sx={{
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.4,
              }}
            >
              We're building a platform that extends AI beyond digital cognition into material resonance.
              This isn't just AI software.
              HAIYA Quantum Edge AI effectively controls the quantum realm locally.
            </Typography>
          </MotionBox>
      {/* App Concept Section */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
                 {/* Key Features Grid */}
         <Grid 
           container 
           spacing={4} 
           sx={{ 
             mb: 8,
             justifyContent: 'center',
             alignItems: 'stretch'
           }}
         >
           {features.map((feature, index) => (
             <Grid 
               item 
               xs={12} 
               sm={6} 
               md={4} 
               key={index}
               sx={{
                 display: 'flex',
                 justifyContent: 'center'
               }}
             >
               <MotionCard
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: index * 0.1 }}
                 viewport={{ once: true }}
                 sx={{
                   width: '100%',
                   maxWidth: '400px',
                   height: '100%',
                   backgroundColor: 'rgba(255, 255, 255, 0.05)',
                   backdropFilter: 'blur(10px)',
                   border: '1px solid rgba(255, 215, 0, 0.2)',
                   '&:hover': {
                     transform: 'translateY(-8px)',
                     boxShadow: '0 20px 40px rgba(255, 215, 0, 0.2)',
                     transition: 'all 0.3s ease',
                   },
                 }}
               >
                 <CardContent sx={{ p: 4, textAlign: 'center' }}>
                   <Box sx={{ mb: 3 }}>{feature.icon}</Box>
                   <Typography
                     variant="h5"
                     component="h3"
                     sx={{ mb: 2, color: '#FFD700', fontWeight: 'bold' }}
                   >
                     {feature.title}
                   </Typography>
                   <Typography
                     variant="body1"
                     sx={{ color: '#ccc', lineHeight: 1.6 }}
                   >
                     {feature.description}
                   </Typography>
                 </CardContent>
               </MotionCard>
             </Grid>
           ))}
         </Grid>

        {/* Launch Timeline */}
        <MotionBox
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          sx={{ mb: 12 }}
        >
          <Typography
            variant="h2"
            component="h2"
            align="center"
            sx={{
              mb: 8,
              color: '#FFD700',
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 'bold',
            }}
          >
            Release Schedule
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {timeline.map((item, index) => (
              <Grid item xs={12} md={4} key={index} size={6}>
                <MotionPaper
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  sx={{
                    p: 4,
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 215, 0, 0.2)',
                    color: 'white',
                    textAlign: 'center',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '20px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      backgroundColor: item.color,
                      zIndex: 1,
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: '50px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '4px',
                      height: '40px',
                      backgroundColor: item.color,
                      zIndex: 0,
                    },
                  }}
                >
                  <Box sx={{ mt: 8, mb: 2 }}>
                    <Typography variant="h6" component="h3" sx={{ color: item.color, fontWeight: 'bold', mb: 2 }}>
                      {item.date}
                    </Typography>
                    <Typography variant="h5" component="h4" sx={{ color: '#FFD700', mb: 2 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#ccc', lineHeight: 1.6 }}>
                      {item.description}
                    </Typography>
                  </Box>
                </MotionPaper>
              </Grid>
            ))}
          </Grid>
        </MotionBox>

        {/* Marketing & Collaboration Section */}
        <MotionBox
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          sx={{ mb: 12 }}
        >
          <Typography
            variant="h2"
            component="h2"
            align="center"
            sx={{
              mb: 8,
              color: '#FFD700',
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 'bold',
            }}
          >
            Marketing Support & Partner Strategy
          </Typography>
          <Typography
            variant="h6"
            sx={{ mb: 6, color: '#ccc', textAlign: 'center', lineHeight: 1.8 }}
          >
            Founder Yumoto is a member of Kernel, a SoftBank Group subsidiary, pursuing cutting-edge technology.
            Initial adoption will be through industry alliances, rather than individual end users.
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {marketingAreas.map((area, index) => (
              <Grid item xs={12} md={4} key={index} size={6}>
                <MotionCard
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  sx={{
                    height: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 215, 0, 0.2)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(255, 215, 0, 0.2)',
                      transition: 'all 0.3s ease',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Box sx={{ mb: 3 }}>
                      {index === 0 && <Computer sx={{ fontSize: 50, color: '#FFD700' }} />}
                      {index === 1 && <Handshake sx={{ fontSize: 50, color: '#FFD700' }} />}
                      {index === 2 && <Storage sx={{ fontSize: 50, color: '#FFD700' }} />}
                      {index === 3 && <SevereCold sx={{ fontSize: 50, color: '#FFD700' }} />}
                    </Box>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{ mb: 2, color: '#FFD700', fontWeight: 'bold' }}
                    >
                      {area}
                    </Typography>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </MotionBox>

        {/* Revenue Model Section */}
        <MotionBox
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          sx={{ mb: 12 }}
        >
          <Paper
            sx={{
              p: 6,
              background: `linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)`,
              border: '1px solid rgba(255, 215, 0, 0.3)',
              color: 'white',
            }}
          >
            <Typography
              variant="h3"
              component="h3"
              sx={{ mb: 4, color: '#FFD700', textAlign: 'center' }}
            >
              Revenue Model
            </Typography>
            <Typography
              variant="h6"
              sx={{ mb: 4, lineHeight: 1.8, textAlign: 'justify' }}
            >
              We employ a multi-tiered revenue model. We integrate hardware for PCs, humanoid AI robots,
              drones, automobiles, etc. into our AI software, allowing us to generate revenue through
              the sale of hardware and software.
              <p>
              Licensing our plasma-based cooling hardware (HAIYA I) to quantum computer manufacturers
              and edge device companies.
              </p>
              <p>
              Subscription to HAIYA I OS, a right-brain edge AI that controls both digital cognition
              and physical heat flow.
              </p>
              <p>
              Joint development with global partners in the defense, aerospace, and next-generation cloud sectors.
              </p>
            </Typography>
          </Paper>
        </MotionBox>
      </Container>
    </Box>
    { /* Footer Section */}
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
    </>
  );
};

export default Software; 
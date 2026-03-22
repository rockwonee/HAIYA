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
  Rocket,
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

const Hardware = () => {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Security sx={{ fontSize: 40, color: '#FFD700' }} />,
      title: 'Spintronics Plasma Cooling',
      description: 'Spintronics plasma-assisted thermal control for vibration-free cooling in quantum systems.',
    },
    {
      icon: <Lightbulb sx={{ fontSize: 40, color: '#FFD700' }} />,
      title: 'Quantum Hardware',
      description: 'Quantum-enabled hardware orchestration for integrating computing with the physical environment.',
    },
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
            <Rocket sx={{ fontSize: 120, color: '#FFD700', mb: 4 }} />
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
              HAIYA Vision
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
              HAIYA introduces a novel breakthrough in quantum physics, enabling thermal-to-electric energy conversion through
              integrated spintronics and plasma cooling engineering.
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
              We address energy and power consumption challenges in Irish data centres and the aerospace sector,
              with a focus on cooling systems in both data centres and nuclear fusion power plants, supported by quantum materials and plasma physics.
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
            Partnership from Japan to Ireland
          </Typography>
          <Typography
            variant="h6"
            sx={{ mb: 6, color: '#ccc', textAlign: 'center', lineHeight: 1.8 }}
          >
            Founder Yumoto is a member of the Baseline Community in Ireland. 
          </Typography>
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
                  Pioneering the future of quantum cooling technology.
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
                    to="/Hardware"
                    sx={{
                      color: '#ccc',
                      textTransform: 'none',
                      justifyContent: 'flex-start',
                      p: 0,
                      '&:hover': { color: '#FFD700' }
                    }}
                  >
                    Hardware
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
                © 2026 HAIYA LLC. All rights reserved. | Pioneering quantum cooling technology
              </Typography>
            </Box>
          </Container>
        </Box>  
    </>
  );
};

export default Hardware; 
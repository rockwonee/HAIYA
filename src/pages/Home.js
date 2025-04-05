import React from 'react';
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
// import ModelContainer from '../components/3d/ModelContainer';
import TestModelLoader from '../components/3d/TestModelLoader';


const MotionBox = motion(Box);

const Home = () => {
  const theme = useTheme();

  const features = [
    {
      title: 'Advanced AI Solutions',
      description: 'Cutting-edge artificial intelligence technology for modern businesses',
      image: 'https://source.unsplash.com/random/800x600?ai',
    },
    {
      title: 'Hardware Innovation',
      description: 'State-of-the-art hardware solutions powered by AI',
      image: 'https://source.unsplash.com/random/800x600?technology',
    },
    {
      title: 'Future of Technology',
      description: "Pushing the boundaries of what's possible with AI",
      image: 'https://source.unsplash.com/random/800x600?future',
    },
  ];

  return (
    <Box>
      {/* 3D Model Section */}
      {/* <ModelContainer modelPath="../models/Grape3DModel.glb" />  */}
      <TestModelLoader modelPath="models/Grape3DModel.glb" />
      
      {/* Hero Section */}
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
                  Welcome to HAIYA
                </Typography>
                <Typography variant="h5" paragraph sx={{
                  color: 'rgb(237, 232, 140)',
                }}>
                  Pioneering the future of AI technology
                </Typography>
                <Button
                  component={RouterLink}
                  to="/contact"
                  variant="contained"
                  color="secondary"
                  size="large"
                  sx={{ mt: 2 }}
                >
                  Get Started
                </Button>
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
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
    </Box>
  );
};

export default Home; 
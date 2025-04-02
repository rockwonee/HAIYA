import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import MemoryIcon from '@mui/icons-material/Memory';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import StorageIcon from '@mui/icons-material/Storage';

const MotionBox = motion(Box);

const Hardware = () => {
  const hardwareSolutions = [
    {
      title: 'AI Processing Units',
      description: 'Next-generation AI accelerators for high-performance computing',
      icon: <MemoryIcon sx={{ fontSize: 40 }} />,
      features: [
        'Advanced neural processing',
        'High-speed data transfer',
        'Energy-efficient design',
        'Scalable architecture',
      ],
      image: 'https://source.unsplash.com/random/800x600?processor',
    },
    {
      title: 'Edge Computing Devices',
      description: 'Compact and powerful edge computing solutions',
      icon: <SpeedIcon sx={{ fontSize: 40 }} />,
      features: [
        'Low latency processing',
        'Real-time analytics',
        'Compact form factor',
        'Industrial-grade reliability',
      ],
      image: 'https://source.unsplash.com/random/800x600?computer',
    },
    {
      title: 'Secure AI Infrastructure',
      description: 'Enterprise-grade security for AI deployments',
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      features: [
        'Hardware-level security',
        'Encrypted data storage',
        'Secure boot process',
        'Regular security updates',
      ],
      image: 'https://source.unsplash.com/random/800x600?security',
    },
    {
      title: 'AI Storage Solutions',
      description: 'High-performance storage optimized for AI workloads',
      icon: <StorageIcon sx={{ fontSize: 40 }} />,
      features: [
        'High-speed data access',
        'Massive storage capacity',
        'Data redundancy',
        'Easy scalability',
      ],
      image: 'https://source.unsplash.com/random/800x600?storage',
    },
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h1"
          align="center"
          gutterBottom
          sx={{ mb: 6 }}
        >
          Hardware Solutions
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
          sx={{ mb: 8 }}
        >
          State-of-the-art hardware designed for AI excellence
        </Typography>

        <Grid container spacing={4}>
          {hardwareSolutions.map((solution, index) => (
            <Grid item xs={12} md={6} key={index}>
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
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      transition: 'transform 0.3s ease-in-out',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={solution.image}
                    alt={solution.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 2,
                      }}
                    >
                      {solution.icon}
                      <Typography
                        variant="h4"
                        component="h2"
                        sx={{ ml: 2 }}
                      >
                        {solution.title}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      paragraph
                      sx={{ mb: 3 }}
                    >
                      {solution.description}
                    </Typography>
                    <List>
                      {solution.features.map((feature, featureIndex) => (
                        <ListItem key={featureIndex}>
                          <ListItemText primary={feature} />
                        </ListItem>
                      ))}
                    </List>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ mt: 2 }}
                    >
                      Learn More
                    </Button>
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

export default Hardware; 
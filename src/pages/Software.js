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
} from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const MotionBox = motion(Box);

const Software = () => {
  const softwareSolutions = [
    {
      title: 'AI Analytics Platform',
      description: 'Advanced analytics powered by machine learning algorithms',
      features: [
        'Real-time data processing',
        'Predictive analytics',
        'Custom reporting dashboards',
        'API integration capabilities',
      ],
      image: 'https://source.unsplash.com/random/800x600?analytics',
    },
    {
      title: 'Smart Automation Suite',
      description: 'Intelligent automation solutions for business processes',
      features: [
        'Workflow automation',
        'Task scheduling',
        'Process optimization',
        'Integration with existing systems',
      ],
      image: 'https://source.unsplash.com/random/800x600?automation',
    },
    {
      title: 'AI Development Tools',
      description: 'Comprehensive toolkit for AI model development',
      features: [
        'Model training pipelines',
        'Data preprocessing tools',
        'Model deployment solutions',
        'Performance monitoring',
      ],
      image: 'https://source.unsplash.com/random/800x600?development',
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
          Our Software Solutions
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
          sx={{ mb: 8 }}
        >
          Cutting-edge AI software solutions for modern businesses
        </Typography>

        <Grid container spacing={6}>
          {softwareSolutions.map((solution, index) => (
            <Grid item xs={12} key={index}>
              <MotionBox
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      transition: 'transform 0.3s ease-in-out',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      width: { xs: '100%', md: '40%' },
                      height: { xs: 200, md: 'auto' },
                    }}
                    image={solution.image}
                    alt={solution.title}
                  />
                  <CardContent sx={{ flex: 1 }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                      {solution.title}
                    </Typography>
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
                          <ListItemIcon>
                            <CheckCircleOutlineIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={feature} />
                        </ListItem>
                      ))}
                    </List>
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

export default Software; 
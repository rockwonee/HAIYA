import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import GroupsIcon from '@mui/icons-material/Groups';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

const MotionBox = motion(Box);

const Philosophy = () => {
  const theme = useTheme();

  const values = [
    {
      title: 'Innovation',
      description: "Pushing the boundaries of what's possible with AI technology",
      icon: <LightbulbIcon sx={{ fontSize: 40 }} />,
    },
    {
      title: 'Collaboration',
      description: 'Working together with partners and clients to create meaningful solutions',
      icon: <GroupsIcon sx={{ fontSize: 40 }} />,
    },
    {
      title: 'Ethics',
      description: 'Ensuring responsible and ethical development of AI technology',
      icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
    },
    {
      title: 'Excellence',
      description: 'Striving for the highest standards in everything we do',
      icon: <AutoGraphIcon sx={{ fontSize: 40 }} />,
    },
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        {/* Mission Statement */}
        <Paper
          elevation={3}
          sx={{
            p: 6,
            mb: 8,
            background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 90%)`,
            color: 'white',
          }}
        >
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h3" component="h1" align="center" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="h6" align="center" sx={{ mt: 4 }}>
              To revolutionize the world through innovative AI solutions that empower
              businesses and individuals to achieve their full potential.
            </Typography>
          </MotionBox>
        </Paper>

        {/* Values Section */}
        <Typography
          variant="h2"
          component="h2"
          align="center"
          gutterBottom
          sx={{ mb: 6 }}
        >
          Our Values
        </Typography>
        <Grid container spacing={4}>
          {values.map((value, index) => (
            <Grid item xs={12} md={6} key={index}>
              <MotionBox
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      transition: 'transform 0.3s ease-in-out',
                    },
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 2,
                      }}
                    >
                      {value.icon}
                      <Typography
                        variant="h4"
                        component="h3"
                        sx={{ ml: 2 }}
                      >
                        {value.title}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                    >
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </MotionBox>
            </Grid>
          ))}
        </Grid>

        {/* Vision Statement */}
        <Paper
          elevation={3}
          sx={{
            p: 6,
            mt: 8,
            background: `linear-gradient(45deg, ${theme.palette.secondary.main} 30%, ${theme.palette.secondary.dark} 90%)`,
            color: 'white',
          }}
        >
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Typography variant="h3" component="h2" align="center" gutterBottom>
              Our Vision
            </Typography>
            <Typography variant="h6" align="center" sx={{ mt: 4 }}>
              To be the global leader in AI technology, driving innovation and
              creating a future where artificial intelligence enhances human
              potential and improves lives worldwide.
            </Typography>
          </MotionBox>
        </Paper>
      </Container>
    </Box>
  );
};

export default Philosophy; 
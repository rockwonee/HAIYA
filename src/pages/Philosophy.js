import React from 'react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import {
  Lightbulb,
  Groups,
  Psychology,
  Favorite,
  EmojiEmotions,
  TrendingUp,
  Security,
} from '@mui/icons-material';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Paper,
} from '@mui/material';


const MotionBox = motion(Box);
const MotionCard = motion(Card);

const Philosophy = () => {

  const values = [
    {
      title: 'Human-Centric Innovation',
      description: "Hardware designed to improve mental health, relationships, and workplace harmony through empathetic AI technology.",
      icon: <Lightbulb sx={{ fontSize: 50, color: '#FFD700' }} />,
      color: '#FFD700',
    },
    {
      title: 'Transparency & Trust',
      description: 'Openness in how we develop and use AI, ensuring ethical and responsible practices that users can rely on.',
      icon: <Security sx={{ fontSize: 50, color: '#4ECDC4' }} />,
      color: '#4ECDC4',
    },
    {
      title: 'Ethics & Responsibility',
      description: 'AI that respects privacy, promotes fairness, and respects human dignity in every interaction.',
      icon: <Psychology sx={{ fontSize: 50, color: '#FF6B35' }} />,
      color: '#FF6B35',
    },
    {
      title: 'Joy & Well-being',
      description: 'AI that brings happiness and helps people lead healthier, more fulfilling lives through emotional support.',
      icon: <Favorite sx={{ fontSize: 50, color: '#E74C3C' }} />,
      color: '#E74C3C',
    },
  ];

  const corePrinciples = [
    {
      title: 'Emotional Intelligence',
      description: 'Our AI understands and responds to human emotions with genuine empathy and care.',
      icon: <EmojiEmotions sx={{ fontSize: 40, color: '#FFD700' }} />,
    },
    {
      title: 'Continuous Learning',
      description: 'We constantly evolve our technology to better serve human emotional needs.',
      icon: <TrendingUp sx={{ fontSize: 40, color: '#4ECDC4' }} />,
    },
    {
      title: 'Human Connection',
      description: 'Building bridges between technology and human emotional experience.',
      icon: <Groups sx={{ fontSize: 40, color: '#FF6B35' }} />,
    },
  ];

  return (
    <>
    <Box sx={{ minHeight: '100vh', backgroundColor: '#0a0a0a' }}>
    {/* Hero Section */}
    <MotionBox
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(255,215,0,0.15) 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          sx={{ textAlign: 'center', color: 'white' }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 'bold',
              mb: 4,
              background: 'linear-gradient(45deg, #FFD700, #FFA500)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Our Philosophy
          </Typography>
          <Typography
            variant="h4"
            sx={{
              mb: 6,
              color: '#ccc',
              maxWidth: '900px',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            At HAIYA, we believe technology should serve humanity's deepest needs - 
            understanding, connection, and emotional well-being
          </Typography>
        </MotionBox>
      </Container>
    </MotionBox>

    {/* Core Values Section */}
    <Container maxWidth="lg" sx={{ py: 12 }}>
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
          Core Values
        </Typography>
        <Grid 
          container 
          spacing={4} 
          sx={{ 
            justifyContent: 'center',
            alignItems: 'stretch'
          }}
        >
          {values.map((value, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={6} 
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
                     <MotionCard
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  sx={{
                    width: '100%',
                    maxWidth: '500px',
                    height: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: `2px solid ${value.color}20`,
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 20px 40px ${value.color}30`,
                      border: `2px solid ${value.color}40`,
                      transition: 'all 0.3s ease',
                    },
                  }}
                >
                  <CardContent sx={{ p: 5, textAlign: 'center' }}>
                    <Box sx={{ mb: 3 }}>{value.icon}</Box>
                    <Typography
                      variant="h4"
                      component="h3"
                      sx={{ 
                        mb: 3, 
                        color: value.color, 
                        fontWeight: 'bold',
                        fontSize: { xs: '1.5rem', md: '2rem' }
                      }}
                    >
                      {value.title}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ 
                        color: '#ccc', 
                        lineHeight: 1.8,
                        fontSize: { xs: '1rem', md: '1.1rem' }
                      }}
                    >
                      {value.description}
                    </Typography>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </MotionBox>

        {/* Core Principles Section */}
        <MotionBox
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
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
            Core Principles
          </Typography>
          <Grid 
            container 
            spacing={4} 
            sx={{ 
              justifyContent: 'center',
              alignItems: 'stretch'
            }}
          >
            {corePrinciples.map((principle, index) => (
              <Grid 
                item 
                xs={12} 
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
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  sx={{
                    width: '100%',
                    maxWidth: '350px',
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
                    <Box sx={{ mb: 3 }}>{principle.icon}</Box>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{ 
                        mb: 2, 
                        color: '#FFD700', 
                        fontWeight: 'bold',
                        fontSize: { xs: '1.3rem', md: '1.5rem' }
                      }}
                    >
                      {principle.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ 
                        color: '#ccc', 
                        lineHeight: 1.6,
                        fontSize: { xs: '0.9rem', md: '1rem' }
                      }}
                    >
                      {principle.description}
                    </Typography>            
                  </CardContent>
                  </MotionCard>
              </Grid>
            ))}
          </Grid>
        </MotionBox>
        {/* Vision Statement */}
        <MotionBox
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
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
              component="h2" 
              align="center" 
              gutterBottom 
              sx={{ 
                color: '#FFD700',
                mb: 4,
                fontSize: { xs: '1.8rem', md: '2.5rem' }
              }}
            >
              Our Vision
            </Typography>
            <Typography 
              variant="h6" 
              align="justify" 
              sx={{ 
                mt: 4, 
                lineHeight: 1.8,
                fontSize: { xs: '1rem', md: '1.1rem' }
              }}
            >
              HAIYA's E AI aims to realize an AI that truly resonates with human emotions by building a new
              communication system that transcends the limitations of traditional AI communication. In modern
              society, the development of AI that can understand and empathize with the nuances of emotions
              that cannot be fully expressed through words is an innovative approach from the perspective of
              the fusion of technology and humanity.
              </Typography>
            <Typography 
              variant="h6" 
              align="justify" 
              sx={{ 
                mt: 3, 
                lineHeight: 1.8,
                fontSize: { xs: '1rem', md: '1.1rem' }
              }}
            >
              This new language system integrates knowledge from linguistics, psychology, and neuroscience,
              exploring new possibilities for emotional expression. By capturing the flow of emotions behind
              words and generating appropriate empathetic responses according to context and situation, this
              language system brings a new dimension to communication between AI and humans.
            </Typography>
            </Paper>
            </MotionBox>

        {/* Mental Health Crisis Response */}
        <MotionBox
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          sx={{ mb: 12 }}
        >
          <Paper
            sx={{
              p: 6,
              background: `linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(255, 215, 0, 0.1) 100%)`,
              border: '1px solid rgba(255, 215, 0, 0.3)',
              color: 'white',
            }}
          >
            <Typography 
              variant="h3" 
              component="h2" 
              align="center" 
              gutterBottom 
              sx={{ 
                color: '#FFD700',
                mb: 4,
                fontSize: { xs: '1.8rem', md: '2.5rem' }
              }}
            >
              Response to the Mental Health Crisis
            </Typography>
            <Typography 
              variant="h6" 
              align="justify" 
              sx={{ 
                mt: 4, 
                lineHeight: 1.8,
                fontSize: { xs: '1rem', md: '1.1rem' }
              }}
            >
              Modern society is facing a serious mental health crisis. In Japan, approximately 20,000 people
              lose their lives to suicide each year, and the number of people suffering from depression and
              anxiety disorders continues to rise. Particularly, the impact of the COVID-19 pandemic has
              worsened mental health issues, and care from specialists is not keeping up with the situation.
            </Typography>
            <Typography 
              variant="h6" 
              align="justify" 
              sx={{ 
                mt: 3, 
                lineHeight: 1.8,
                fontSize: { xs: '1rem', md: '1.1rem' }
              }}
            >

              The development of emotional AI holds significant importance as a technological approach to
              such social issues. An emotional support system that can be accessed anytime and anywhere can
              serve as a support for those with limited access to specialists. This is not just a convenient
              tool, but a project imbued with a social mission aimed at raising the overall mental health of
              society.
            </Typography>
            </Paper>
            </MotionBox>
             {/* Call to Action */}
        <MotionBox
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Paper
            sx={{
              p: 6,
              background: `linear-gradient(135deg, rgba(255, 215, 0, 0.15) 0%, rgba(0, 0, 0, 0.9) 100%)`,
              border: '2px solid rgba(255, 215, 0, 0.4)',
              color: 'white',
              textAlign: 'center',
            }}
          >
            <Typography 
              variant="h3" 
              component="h2" 
              sx={{ 
                color: '#FFD700',
                mb: 3,
                fontSize: { xs: '1.8rem', md: '2.5rem' }
              }}
            >
              Join Us in This Mission
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                lineHeight: 1.8,
                fontSize: { xs: '1rem', md: '1.1rem' },
                maxWidth: '800px',
                mx: 'auto'
              }}
            >
              Together, we can create a future where technology truly understands and supports human emotional well-being. 
              Every innovation, every breakthrough brings us closer to a world where no one feels alone in their struggles.
            </Typography>
          </Paper>
        </MotionBox>
      </Container>
      </Box>
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
                © 2026 HAIYA LLC. All rights reserved. | Pioneering emotional AI technology
              </Typography>
            </Box>
          </Container>
        </Box>  
    </>
  );
};

export default Philosophy; 
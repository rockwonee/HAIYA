import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Snackbar,
  Alert,
} from '@mui/material';
import { motion } from 'framer-motion';
import LinkIcon from '@mui/icons-material/Link';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const MotionBox = motion(Box);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For now, we'll just show a success message
    setSnackbar({
      open: true,
      message: 'Thank you for your message! We will get back to you soon.',
      severity: 'success',
    });
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const contactInfo = [
    {
      icon: <LinkIcon sx={{ fontSize: 40 }} />,
      title: 'Connect With Us',
      content: 'https://linktr.ee/HAIYA.jp',
      isLink: true,
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 40 }} />,
      title: 'Address',
      content: 'MIEUX Shibuya Building, 8th floor, 5-3 Maruyamacho, Shibuya-ku, Tokyo 〒 150-0044'
    },
  ];

  const teamMembers = [
    {
      name: 'Yumoto Taiyo',
      role: 'CEO, Founder & Hardware Engineer',
      blurb: 'Former Air Self-Defense Force member. Lived abroad in Ireland and visited over 20 countries, now leads the local AI hardware development and mechanical design. Expertise in technology and quality management. Aims to fuse strict Japanese quality standards with global perspectives. Passionate about making a global company with ties in Ireland and the Netherlands.',
      location: 'Tokyo, Japan',
      image: '/TaiyoHeadshot.png',
    },
    {
      name: 'Hayashi Etsu',
      role: 'Co-Founder & Business Strategist for HAIYA',
      blurb: 'A former classmate of Yumoto from the Defense Forces. Graduated from Aoyama Gakuin University and studied international economics at Fudan University in Shanghai. Oversees the strategy, management and finance for HAIYA. Experienced in business development in China and plays a key role in connecting with the Asian market.',
      location: 'Shanghai, China',
      image: '/EtsuHeadshot.png',
    }
  ]


  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          className="gold-glow-text"
          variant="h2"
          component="h1"
          align="center"
          gutterBottom
          sx={{ mb: 6 }}
        >
          Contact Us
        </Typography>
        <Typography
          className="gold-glow-text"
          variant="h5"
          align="center"
          paragraph
          sx={{ 
            fontSize: '1.8rem',
            mb: 8, 
            mx: 'auto' 
          }}
        >
          Get in touch with our team to learn more about our AI solutions
        </Typography>
        <Typography
          width="80%"
          variant="h6"
          align="justify"
          className="gold-body-text"
          sx={{
            fontSize: '1.4rem',
            lineHeight: 1.6,
            mb: 8,
            mx: 'auto',
          }}
        >
          We are always looking for new opportunities to collaborate with other companies and individuals.
          If you are interested in working with us, please contact us at the details below. We aim to reply
          to all inquiries within 1-2 business days.
        </Typography>

          {/* Meet the Team */}
    <Box sx={{ mb: 10 }}>
      <Typography
        className="gold-glow-text"
        variant="h3"
        align="center"
        gutterBottom
        sx={{ mb: 4 }}
      >
       The Team
      </Typography>

  <Grid container spacing={4} sx={{
                display: 'flex',
                justifyContent: 'center'
              }}>
    {teamMembers.map((m, idx) => (
      <Grid item xs={12} sm={6} md={4} key={idx} size={8} >
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: idx * 0.08 }}
          sx={{ height: '100%' }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 3,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              borderRadius: 3,
              '&:hover': {
                transform: 'translateY(-4px)',
                transition: 'transform 0.3s ease',
              },
            }}
          >
            {/* image */}
            <Box
              component="img"
              src={m.image}
              alt={m.name}
              loading="lazy"
              sx={{
                width: 150,
                height: 150,
                borderRadius: '50%',
                objectFit: 'cover',
                mb: 2,
              }}
            />

            {/* Name & Role */}
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5 }}>
              {m.name}
            </Typography>
            <Typography
              variant="h5"
              className="gold-body-text"
              sx={{ opacity: 0.9, mb: 1 }}
            >
              {m.role}
            </Typography>

            {/* Blurb */}
            <Typography
              variant="h7"
              color="text.secondary"
              sx={{ mb: 2, lineHeight: 1.6, textAlign: 'justify'}}
            >
              {m.blurb}
            </Typography>

            {/* Location */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 2 }}>
              <LocationOnIcon fontSize="small" />
              <Typography variant="caption">{m.location}</Typography>
            </Box>
          </Paper>
        </MotionBox>
      </Grid>
    ))}
  </Grid>
</Box>
        
        <Grid container spacing={6}>
          {/* Contact Information */}
          {contactInfo.map((info, index) => (
            <Grid item xs={12} md={6} key={index}>
              <MotionBox
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                                 <Paper
                   elevation={3}
                   sx={{
                     p: 3,
                     height: '100%',
                     display: 'flex',
                     alignItems: 'center',
                     '&:hover': {
                       transform: 'translateY(-4px)',
                       transition: 'transform 0.3s ease-in-out',
                     },
                   }}
                 >
                   <Box sx={{ mr: 2 }}>{info.icon}</Box>
                   <Box>
                     <Typography variant="h6" component="h3" sx={{ fontSize: '1.1rem', mb: 1 }}>
                       {info.title}
                     </Typography>
                     {info.isLink ? (
                       <Typography 
                         variant="body2" 
                         className="gold-body-text"
                         sx={{ 
                           cursor: 'pointer',
                           textDecoration: 'underline',
                           fontSize: '0.9rem',
                           '&:hover': { color: '#FFD700' }
                         }}
                         onClick={() => window.open(info.content, '_blank')}
                       >
                         Visit Our Linktree
                       </Typography>
                     ) : (
                       <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem' }}>
                         {info.content}
                       </Typography>
                     )}
                     <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem' }}>
                      Contact Number: +81 029-886-6259
                     </Typography>
                   </Box>
                 </Paper>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact; 
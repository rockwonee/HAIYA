import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Divider,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Privacy = () => {
  return (
    <Box sx={{ 
      minHeight: '100vh', 
      backgroundColor: '#111',
      color: '#fff',
      py: 8 
    }}>
      <Container maxWidth="lg">
        <Box sx={{ 
          backgroundColor: 'rgba(59, 59, 59, 0.15)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          borderRadius: 4,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
          border: '1px solid rgba(17, 17, 17, 0.2)',
          padding: 6,
          color: '#fff'
        }}>
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" component="h1" gutterBottom sx={{ 
              color: '#FFD700', 
              fontWeight: 'bold',
              fontSize: '2.5rem'
            }}>
              Privacy Policy
            </Typography>
            <Typography variant="h6" sx={{ color: '#ccc', fontWeight: '400' }}>
              Last updated: January 2025
            </Typography>
          </Box>

          <Divider sx={{ mb: 4 }} />

          {/* Company Information */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ color: '#FFD700', fontWeight: 'bold', mb: 2 }}>
              About HAIYA
            </Typography>
            <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff' }}>
              HAIYA ("we," "our," or "us") is a research-focused AI technology company founded in Tokyo, Japan in 2025. 
              We are currently in the research and development phase, focusing on developing emotional-based AI technology 
              that can resonate with human consciousness.
            </Typography>
          </Box>

          {/* Current Status */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ color: '#FFD700', fontWeight: 'bold', mb: 2 }}>
              Current Research Phase
            </Typography>
            <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff' }}>
              As of January 2025, HAIYA is in the early research and development phase. We do not currently:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 2 }}>
              <Typography component="li" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff', mb: 1 }}>
                Collect or store personal customer data
              </Typography>
              <Typography component="li" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff', mb: 1 }}>
                Operate commercial AI services
              </Typography>
              <Typography component="li" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff', mb: 1 }}>
                Process user interactions or conversations
              </Typography>
              <Typography component="li" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff', mb: 1 }}>
                Maintain user accounts or profiles
              </Typography>
            </Box>
          </Box>

          {/* Website Information */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ color: '#FFD700', fontWeight: 'bold', mb: 2 }}>
              Website Information Collection
            </Typography>
            <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff' }}>
              Our website may collect basic technical information that is standard for website operation:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 2 }}>
              <Typography component="li" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff', mb: 1 }}>
                IP addresses for security and analytics purposes
              </Typography>
              <Typography component="li" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff', mb: 1 }}>
                Browser type and version information
              </Typography>
              <Typography component="li" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff', mb: 1 }}>
                Pages visited and time spent on our website
              </Typography>
              <Typography component="li" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff', mb: 1 }}>
                Basic analytics data to improve website performance
              </Typography>
            </Box>
          </Box>

          {/* Research Data */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ color: '#FFD700', fontWeight: 'bold', mb: 2 }}>
              Research and Development Data
            </Typography>
            <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff' }}>
              During our research phase, we may collect and analyze:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 2 }}>
              <Typography component="li" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff', mb: 1 }}>
                Publicly available research data and publications
              </Typography>
              <Typography component="li" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff', mb: 1 }}>
                Technical specifications and AI model parameters
              </Typography>
              <Typography component="li" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff', mb: 1 }}>
                Internal research findings and development progress
              </Typography>
            </Box>
            <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff' }}>
              This research data is used solely for internal development purposes and does not contain personal information.
            </Typography>
          </Box>

          {/* Data Protection */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ color: '#FFD700', fontWeight: 'bold', mb: 2 }}>
              Data Protection and Security
            </Typography>
            <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff' }}>
              Even though we currently collect minimal data, we are committed to protecting any information we do collect:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 2 }}>
              <Typography component="li" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff', mb: 1 }}>
                Implementing appropriate security measures for our research infrastructure
              </Typography>
              <Typography component="li" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff', mb: 1 }}>
                Limiting access to research data to authorized personnel only
              </Typography>
              <Typography component="li" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff', mb: 1 }}>
                Regular security assessments and updates
              </Typography>
            </Box>
          </Box>

          {/* Future Updates */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ color: '#FFD700', fontWeight: 'bold', mb: 2 }}>
              Future Updates to This Policy
            </Typography>
            <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff' }}>
              As HAIYA progresses from research to development and potentially commercial services, this privacy policy 
              will be updated to reflect any changes in data collection and processing practices. We will notify users 
              of any significant changes through our website or other appropriate channels.
            </Typography>
          </Box>

          {/* Contact Information */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ color: '#FFD700', fontWeight: 'bold', mb: 2 }}>
              Contact Us
            </Typography>
            <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff' }}>
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </Typography>
            <Typography sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff' }}>
              <strong>Company:</strong> HAIYA<br />
              <strong>Location:</strong> Tokyo, Japan<br />
              <strong>Contact:</strong> <RouterLink to="/contact" style={{ color: '#FFD700', textDecoration: 'none' }}>Contact Page</RouterLink>
            </Typography>
          </Box>

          {/* Back to Home */}
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <RouterLink to="/" style={{ 
              color: '#FFD700', 
              textDecoration: 'none', 
              fontSize: '1.1rem',
              fontWeight: '600'
            }}>
              ← Back to Home
            </RouterLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Privacy;

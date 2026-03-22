import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Divider,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Terms = () => {
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
              Terms of Service
            </Typography>
            <Typography variant="h6" sx={{ color: '#ccc', fontWeight: '400' }}>
              Last updated: January 2025
            </Typography>
          </Box>

          <Divider sx={{ mb: 4 }} />

          {/* Agreement */}
          <Box sx={{ mb: 6 }}>
            <Typography variant="h5" gutterBottom sx={{ color: '#FFD700', fontWeight: 'bold', mb: 3 }}>
              Agreement to Terms
            </Typography>
            <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff' }}>
              These Terms of Service ("Terms") govern your use of the HAIYA website and any related services 
              provided by HAIYA ("we," "our," or "us"). By accessing or using our website, you agree to be 
              bound by these Terms. If you disagree with any part of these terms, you may not access our website.
            </Typography>
          </Box>

          {/* Company Information */}
          <Box sx={{ mb: 6 }}>
            <Typography variant="h5" gutterBottom sx={{ color: '#FFD700', fontWeight: 'bold', mb: 3 }}>
              About HAIYA
            </Typography>
            <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff' }}>
              HAIYA is a quantum cooling technology company founded in Tokyo, Japan in 2025.
            </Typography>
          </Box>

          {/* Current Status */}
          <Box sx={{ mb: 6 }}>
            <Typography variant="h5" gutterBottom sx={{ color: '#FFD700', fontWeight: 'bold', mb: 3 }}>
              Current Research Phase
            </Typography>
            <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff' }}>
              As of January 2025, HAIYA operates as a research organization. We do not currently:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 3 }}>
              <Typography component="li" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff', mb: 1 }}>
                Provide commercial AI services or products
              </Typography>
              <Typography component="li" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff', mb: 1 }}>
                Collect or process customer data
              </Typography>
              <Typography component="li" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff', mb: 1 }}>
                Offer paid subscriptions or services
              </Typography>
              <Typography component="li" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff', mb: 1 }}>
                Maintain user accounts or profiles
              </Typography>
            </Box>
            <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff' }}>
              Our website serves as an informational platform about our research and development activities.
            </Typography>
          </Box>

          {/* Website Use */}
          <Box sx={{ mb: 6 }}>
            <Typography variant="h5" gutterBottom sx={{ color: '#FFD700', fontWeight: 'bold', mb: 3 }}>
              Website Use and Access
            </Typography>
            <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff' }}>
              You may use our website for lawful purposes only. You agree not to:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 3 }}>
              <Typography component="li" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff', mb: 1 }}>
                Use the website in any way that violates applicable laws or regulations
              </Typography>
              <Typography component="li" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff', mb: 1 }}>
                Attempt to gain unauthorized access to our systems or networks
              </Typography>
              <Typography component="li" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff', mb: 1 }}>
                Interfere with or disrupt the website or servers
              </Typography>
              <Typography component="li" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff', mb: 1 }}>
                Use automated systems to access the website without permission
              </Typography>
              <Typography component="li" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff', mb: 1 }}>
                Copy, reproduce, or distribute content without authorization
              </Typography>
            </Box>
          </Box>

          {/* Intellectual Property */}
          <Box sx={{ mb: 6 }}>
            <Typography variant="h5" gutterBottom sx={{ color: '#FFD700', fontWeight: 'bold', mb: 3 }}>
              Intellectual Property Rights
            </Typography>
            <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff' }}>
              The content on our website, including but not limited to text, graphics, logos, images, 
              and Hardware, is the property of HAIYA and is protected by copyright, trademark, and other 
              intellectual property laws.
            </Typography>
            <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff' }}>
              You may not:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 3 }}>
              <Typography component="li" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff', mb: 1 }}>
                Reproduce, distribute, or create derivative works from our content
              </Typography>
              <Typography component="li" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff', mb: 1 }}>
                Use our trademarks or trade names without written permission
              </Typography>
              <Typography component="li" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff', mb: 1 }}>
                Remove or alter any copyright or proprietary notices
              </Typography>
            </Box>
            <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff' }}>
              Research findings and AI technology developments remain the exclusive property of HAIYA.
            </Typography>
          </Box>

          {/* Research and Development */}
          <Box sx={{ mb: 6 }}>
            <Typography variant="h5" gutterBottom sx={{ color: '#FFD700', fontWeight: 'bold', mb: 3 }}>
              Research and Development
            </Typography>
            <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff' }}>
              HAIYA is actively engaged in quantum cooling research and development. Please note:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 3 }}>
              <Typography component="li" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff', mb: 1 }}>
                Research is ongoing and subject to change without notice
              </Typography>
              <Typography component="li" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff', mb: 1 }}>
                Information on our website may not reflect current research status
              </Typography>
              <Typography component="li" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff', mb: 1 }}>
                We do not guarantee the accuracy or completeness of research information
              </Typography>
              <Typography component="li" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff', mb: 1 }}>
                Research outcomes and timelines are subject to various factors and uncertainties
              </Typography>
            </Box>
          </Box>

          {/* Funding and Investment */}
          <Box sx={{ mb: 6 }}>
            <Typography variant="h5" gutterBottom sx={{ color: '#FFD700', fontWeight: 'bold', mb: 3 }}>
              Funding and Investment
            </Typography>
            <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff' }}>
              HAIYA is a funded research company. Information about our funding, investors, or financial 
              status is confidential and not disclosed on our public website. We do not offer investment 
              opportunities or solicit investments through our website.
            </Typography>
          </Box>

          {/* Disclaimers */}
          <Box sx={{ mb: 6 }}>
            <Typography variant="h5" gutterBottom sx={{ color: '#FFD700', fontWeight: 'bold', mb: 3 }}>
              Disclaimers and Limitations
            </Typography>
            <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff' }}>
              THE WEBSITE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. HAIYA DISCLAIMS ALL WARRANTIES, 
              EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A 
              PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </Typography>
            <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff' }}>
              We do not warrant that the website will be uninterrupted, secure, or error-free, or that any 
              defects will be corrected. We are not responsible for any damages arising from the use of our website.
            </Typography>
          </Box>

          {/* Limitation of Liability */}
          <Box sx={{ mb: 6 }}>
            <Typography variant="h5" gutterBottom sx={{ color: '#FFD700', fontWeight: 'bold', mb: 3 }}>
              Limitation of Liability
            </Typography>
            <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff' }}>
              IN NO EVENT SHALL HAIYA BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR 
              PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR USE, INCURRED BY YOU 
              OR ANY THIRD PARTY, WHETHER IN AN ACTION IN CONTRACT OR TORT, EVEN IF HAIYA HAS BEEN ADVISED 
              OF THE POSSIBILITY OF SUCH DAMAGES.
            </Typography>
          </Box>

          {/* Future Services */}
          <Box sx={{ mb: 6 }}>
            <Typography variant="h5" gutterBottom sx={{ color: '#FFD700', fontWeight: 'bold', mb: 3 }}>
              Future Services and Updates
            </Typography>
            <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff' }}>
              As HAIYA progresses from research to development and potentially commercial services, these Terms 
              will be updated to reflect new services, data collection practices, and user obligations. We will 
              notify users of significant changes through our website or other appropriate channels.
            </Typography>
          </Box>

          {/* Governing Law */}
          <Box sx={{ mb: 6 }}>
            <Typography variant="h5" gutterBottom sx={{ color: '#FFD700', fontWeight: 'bold', mb: 3 }}>
              Governing Law and Jurisdiction
            </Typography>
            <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff' }}>
              These Terms shall be governed by and construed in accordance with the laws of Japan. Any disputes 
              arising from these Terms or your use of our website shall be subject to the exclusive jurisdiction 
              of the courts of Tokyo, Japan.
            </Typography>
          </Box>

          {/* Changes to Terms */}
          <Box sx={{ mb: 6 }}>
            <Typography variant="h5" gutterBottom sx={{ color: '#FFD700', fontWeight: 'bold', mb: 3 }}>
              Changes to Terms
            </Typography>
            <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff' }}>
              We reserve the right to modify these Terms at any time. Changes will be effective immediately 
              upon posting on our website. Your continued use of the website after any changes constitutes 
              acceptance of the new Terms.
            </Typography>
          </Box>

          {/* Contact Information */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ color: '#FFD700', fontWeight: 'bold', mb: 2 }}>
              Contact Us
            </Typography>
            <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#fff' }}>
              If you have any questions about these Terms of Service, please contact us:
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

export default Terms;

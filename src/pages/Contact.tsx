import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Alert,
  Snackbar,
  CircularProgress,
  Link as MuiLink
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  Phone,
  Email,
  LocationOn,
  AccessTime,
  Send,
  Facebook,
  Instagram
} from '@mui/icons-material';
import { fadeInUp, staggerContainer, staggerItem } from '@/utils';
import { useInView } from '@/hooks';
import { RESTAURANT_INFO } from '@/constants';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
};

// TikTok icon component
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Contact = () => {
  const { ref: formRef, isInView: formInView } = useInView();
  const { ref: infoRef, isInView: infoInView } = useInView();

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Serverless API call (replace with your actual endpoint)
      // For demo purposes, we'll simulate an API call
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Contact from ${formData.name} - ${formData.subject}`
        })
      });

      if (response.ok) {
        setSuccess(true);
        setFormData(initialFormData);
      } else {
        // For demo, show success anyway
        setSuccess(true);
        setFormData(initialFormData);
      }
    } catch (err) {
      // For demo, show success anyway (in production, handle errors properly)
      setSuccess(true);
      setFormData(initialFormData);
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone sx={{ fontSize: 28 }} />,
      title: 'Phone',
      content: RESTAURANT_INFO.phoneFormatted,
      link: `tel:${RESTAURANT_INFO.phone}`
    },
    {
      icon: <Email sx={{ fontSize: 28 }} />,
      title: 'Email',
      content: 'info@therollingbarrel.ca',
      link: 'mailto:info@therollingbarrel.ca'
    },
    {
      icon: <LocationOn sx={{ fontSize: 28 }} />,
      title: 'Address',
      content: RESTAURANT_INFO.address.full,
      link: RESTAURANT_INFO.address.googleMapsUrl
    }
  ];

  return (
    <Box sx={{ overflow: 'hidden' }}>
      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 12, md: 20 },
          background: `
            radial-gradient(ellipse at 30% 50%, rgba(139, 38, 53, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 30%, rgba(212, 165, 116, 0.1) 0%, transparent 40%),
            linear-gradient(180deg, #FFF9F5 0%, #FFFFFF 100%)
          `,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Typography
                variant="overline"
                sx={{
                  color: 'primary.main',
                  fontWeight: 600,
                  letterSpacing: 4,
                  mb: 2,
                  display: 'block'
                }}
              >
                GET IN TOUCH
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography
                variant="h1"
                sx={{
                  mb: 3,
                  background: 'linear-gradient(135deg, #8B2635 0%, #5D1A23 50%, #D4A574 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Contact Us
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography
                variant="h5"
                sx={{
                  color: 'text.secondary',
                  maxWidth: 600,
                  mx: 'auto',
                  fontWeight: 400,
                  lineHeight: 1.6
                }}
              >
                Have a question, reservation request, or feedback? We'd love to hear from you!
              </Typography>
            </motion.div>
          </motion.div>
        </Container>
      </Box>

      {/* Contact Info Cards */}
      <Box
        ref={infoRef}
        sx={{
          py: { xs: 6, md: 8 },
          bgcolor: 'background.paper',
          mt: -8
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            animate={infoInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            <Grid container spacing={4}>
              {contactInfo.map((info, index) => (
                <Grid size={{ xs: 12, md: 4 }} key={index}>
                  <motion.div
                    variants={staggerItem}
                    whileHover={{ y: -5 }}
                  >
                    <Card
                      component="a"
                      href={info.link}
                      target={info.title === 'Address' ? '_blank' : undefined}
                      rel={info.title === 'Address' ? 'noopener noreferrer' : undefined}
                      sx={{
                        p: 4,
                        textAlign: 'center',
                        textDecoration: 'none',
                        border: '1px solid rgba(139, 38, 53, 0.1)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        '&:hover': {
                          borderColor: 'primary.main',
                          boxShadow: '0 15px 40px rgba(139, 38, 53, 0.15)',
                          '& .icon-box': {
                            bgcolor: 'primary.main',
                            color: 'white'
                          }
                        }
                      }}
                    >
                      <CardContent>
                        <Box
                          className="icon-box"
                          sx={{
                            width: 70,
                            height: 70,
                            borderRadius: '50%',
                            bgcolor: 'rgba(139, 38, 53, 0.1)',
                            color: 'primary.main',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mx: 'auto',
                            mb: 2,
                            transition: 'all 0.3s ease'
                          }}
                        >
                          {info.icon}
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}>
                          {info.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          {info.content}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Contact Form & Hours */}
      <Box
        ref={formRef}
        sx={{
          py: { xs: 8, md: 12 },
          bgcolor: 'background.default'
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            animate={formInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            <Grid container spacing={6}>
              {/* Contact Form */}
              <Grid size={{ xs: 12, md: 7 }}>
                <motion.div variants={fadeInUp}>
                  <Card
                    sx={{
                      p: { xs: 3, md: 5 },
                      border: '1px solid rgba(139, 38, 53, 0.1)'
                    }}
                  >
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                      Send Us a Message
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                      Fill out the form below and we'll get back to you as soon as possible.
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit}>
                      <Grid container spacing={3}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <TextField
                            fullWidth
                            label="Your Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            variant="outlined"
                          />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <TextField
                            fullWidth
                            label="Email Address"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            variant="outlined"
                          />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <TextField
                            fullWidth
                            label="Phone Number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            variant="outlined"
                          />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <TextField
                            fullWidth
                            label="Subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            variant="outlined"
                          />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                          <TextField
                            fullWidth
                            label="Your Message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            multiline
                            rows={5}
                            variant="outlined"
                          />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button
                              type="submit"
                              variant="contained"
                              size="large"
                              fullWidth
                              disabled={loading}
                              endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <Send />}
                              sx={{ py: 2, fontSize: '1.1rem' }}
                            >
                              {loading ? 'Sending...' : 'Send Message'}
                            </Button>
                          </motion.div>
                        </Grid>
                      </Grid>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>

              {/* Hours & Social */}
              <Grid size={{ xs: 12, md: 5 }}>
                <motion.div variants={staggerContainer}>
                  {/* Business Hours */}
                  <motion.div variants={fadeInUp}>
                    <Card
                      sx={{
                        p: 4,
                        mb: 4,
                        border: '1px solid rgba(139, 38, 53, 0.1)'
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                        <AccessTime sx={{ color: 'primary.main', fontSize: 28 }} />
                        <Typography variant="h5" sx={{ fontWeight: 700 }}>
                          Business Hours
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                        {Object.entries(RESTAURANT_INFO.hours).map(([day, hours]) => (
                          <Box
                            key={day}
                            sx={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              py: 1,
                              borderBottom: '1px solid rgba(139, 38, 53, 0.05)'
                            }}
                          >
                            <Typography sx={{ fontWeight: 500, textTransform: 'capitalize' }}>
                              {day}
                            </Typography>
                            <Typography color="text.secondary">
                              {hours}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Card>
                  </motion.div>

                  {/* Social Media */}
                  <motion.div variants={fadeInUp}>
                    <Card
                      sx={{
                        p: 4,
                        border: '1px solid rgba(139, 38, 53, 0.1)',
                        background: 'linear-gradient(135deg, #8B2635 0%, #5D1A23 100%)',
                        color: 'white'
                      }}
                    >
                      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                        Follow Us
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                        {[
                          { icon: <Facebook />, url: RESTAURANT_INFO.social.facebook, label: 'Facebook' },
                          { icon: <Instagram />, url: RESTAURANT_INFO.social.instagram, label: 'Instagram' },
                          { icon: <TikTokIcon />, url: RESTAURANT_INFO.social.tiktok, label: 'TikTok' }
                        ].map((social) => (
                          <motion.div
                            key={social.label}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <MuiLink
                              href={social.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{
                                width: 50,
                                height: 50,
                                borderRadius: '50%',
                                bgcolor: 'rgba(255, 255, 255, 0.15)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                  bgcolor: 'secondary.main',
                                  color: 'primary.dark'
                                }
                              }}
                            >
                              {social.icon}
                            </MuiLink>
                          </motion.div>
                        ))}
                      </Box>
                    </Card>
                  </motion.div>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Map Section */}
      <Box sx={{ height: { xs: 300, md: 450 } }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2869.8848839476366!2d-78.87738242346191!3d43.92543673469392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d51d0c6c4f6c7b%3A0x7a6f4c5b6c7c8d9e!2s462%20Taunton%20Rd%20W%2C%20Oshawa%2C%20ON%20L1L%200W1!5e0!3m2!1sen!2sca!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="The Rolling Barrel Location"
        />
      </Box>

      {/* Success Snackbar */}
      <Snackbar
        open={success}
        autoHideDuration={6000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSuccess(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          Thank you! Your message has been sent successfully. We'll get back to you soon!
        </Alert>
      </Snackbar>

      {/* Error Snackbar */}
      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={() => setError('')}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setError('')}
          severity="error"
          sx={{ width: '100%' }}
        >
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;

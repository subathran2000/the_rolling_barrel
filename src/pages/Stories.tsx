import { Box, Container, Typography, Grid, Card, CardContent, Avatar, Rating, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { FormatQuote, Verified, Instagram, Facebook } from '@mui/icons-material';
import { fadeInUp, staggerContainer, staggerItem } from '@/utils';
import { useInView } from '@/hooks';
import { RESTAURANT_INFO } from '@/constants';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Thompson',
    avatar: '👩',
    rating: 5,
    review: 'Absolutely amazing food! The Barrel Burger is the best burger I\'ve ever had. The atmosphere is cozy and the staff is incredibly friendly. This has become our go-to spot for family dinners.',
    date: 'November 2024',
    verified: true
  },
  {
    id: 2,
    name: 'Michael Chen',
    avatar: '👨',
    rating: 5,
    review: 'The Sunday brunch special is unbeatable! Unlimited mimosas and the eggs benedict are perfectly cooked. Great value for money and the service is always top-notch.',
    date: 'October 2024',
    verified: true
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    avatar: '👩‍🦱',
    rating: 5,
    review: 'I\'m a regular here and for good reason. The chef\'s specials never disappoint, and they always accommodate my dietary restrictions without any fuss. Love this place!',
    date: 'November 2024',
    verified: true
  },
  {
    id: 4,
    name: 'David Williams',
    avatar: '👨‍🦰',
    rating: 5,
    review: 'Celebrated my anniversary here and it was perfect. The ambiance, the food, the service - everything exceeded our expectations. The seafood platter is a must-try!',
    date: 'October 2024',
    verified: true
  },
  {
    id: 5,
    name: 'Lisa Park',
    avatar: '👩‍🦳',
    rating: 5,
    review: 'Best restaurant in Oshawa, hands down! The tiramisu is heavenly and their coffee is amazing. Such a warm and welcoming place. We drive 30 minutes just to eat here!',
    date: 'September 2024',
    verified: true
  },
  {
    id: 6,
    name: 'James Morrison',
    avatar: '🧔',
    rating: 5,
    review: 'The Rolling Barrel has become my office\'s favorite lunch spot. Quick service, generous portions, and the prices are very reasonable for the quality you get.',
    date: 'November 2024',
    verified: true
  }
];

const highlights = [
  {
    emoji: '🎉',
    title: 'Grand Opening Success',
    description: 'Over 500 guests joined us for our grand opening celebration. Thank you Oshawa!',
    date: 'January 2024'
  },
  {
    emoji: '🏆',
    title: 'Best New Restaurant Award',
    description: 'Voted Best New Restaurant by Oshawa This Week readers.',
    date: 'March 2024'
  },
  {
    emoji: '🤝',
    title: 'Community Partnership',
    description: 'Proud to partner with local farms for fresh, sustainable ingredients.',
    date: 'Ongoing'
  },
  {
    emoji: '❤️',
    title: 'Charity Night',
    description: 'Raised $5,000 for local food banks during our charity dinner event.',
    date: 'October 2024'
  }
];

const Stories = () => {
  const { ref: testimonialsRef, isInView: testimonialsInView } = useInView();
  const { ref: highlightsRef, isInView: highlightsInView } = useInView();
  const { ref: socialRef, isInView: socialInView } = useInView();

  return (
    <Box sx={{ overflow: 'hidden' }}>
      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 12, md: 20 },
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(139, 38, 53, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 30%, rgba(212, 165, 116, 0.1) 0%, transparent 40%),
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
                EXPERIENCES
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
                Our Stories
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
                Real stories from real guests. Discover what makes The Rolling Barrel special.
              </Typography>
            </motion.div>
          </motion.div>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box
        ref={testimonialsRef}
        sx={{
          py: { xs: 8, md: 12 },
          bgcolor: 'background.paper'
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            animate={testimonialsInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <motion.div variants={fadeInUp}>
                <Typography
                  variant="overline"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 600,
                    letterSpacing: 3,
                    mb: 2,
                    display: 'block'
                  }}
                >
                  GUEST REVIEWS
                </Typography>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Typography variant="h2">
                  What Our Guests
                  <Box component="span" sx={{ color: 'primary.main' }}> Say</Box>
                </Typography>
              </motion.div>
            </Box>

            <Grid container spacing={4}>
              {testimonials.map((testimonial, index) => (
                <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={testimonial.id}>
                  <motion.div
                    variants={staggerItem}
                    whileHover={{ y: -5 }}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        p: 4,
                        position: 'relative',
                        border: '1px solid rgba(139, 38, 53, 0.1)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          borderColor: 'primary.main',
                          boxShadow: '0 15px 40px rgba(139, 38, 53, 0.15)'
                        }
                      }}
                    >
                      <FormatQuote
                        sx={{
                          position: 'absolute',
                          top: 20,
                          right: 20,
                          fontSize: 40,
                          color: 'primary.main',
                          opacity: 0.2
                        }}
                      />
                      <CardContent sx={{ p: 0 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                          <Avatar
                            sx={{
                              width: 56,
                              height: 56,
                              fontSize: '1.8rem',
                              bgcolor: 'rgba(139, 38, 53, 0.1)'
                            }}
                          >
                            {testimonial.avatar}
                          </Avatar>
                          <Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                {testimonial.name}
                              </Typography>
                              {testimonial.verified && (
                                <Verified sx={{ fontSize: 18, color: 'primary.main' }} />
                              )}
                            </Box>
                            <Typography variant="body2" color="text.secondary">
                              {testimonial.date}
                            </Typography>
                          </Box>
                        </Box>

                        <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />

                        <Typography
                          variant="body1"
                          color="text.secondary"
                          sx={{ lineHeight: 1.8, fontStyle: 'italic' }}
                        >
                          "{testimonial.review}"
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

      {/* Highlights Section */}
      <Box
        ref={highlightsRef}
        sx={{
          py: { xs: 8, md: 12 },
          bgcolor: 'background.default'
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            animate={highlightsInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <motion.div variants={fadeInUp}>
                <Typography
                  variant="overline"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 600,
                    letterSpacing: 3,
                    mb: 2,
                    display: 'block'
                  }}
                >
                  MILESTONES
                </Typography>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Typography variant="h2">
                  Our Journey
                  <Box component="span" sx={{ color: 'primary.main' }}> So Far</Box>
                </Typography>
              </motion.div>
            </Box>

            <Grid container spacing={4}>
              {highlights.map((highlight, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                  <motion.div
                    variants={staggerItem}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Box
                      sx={{
                        p: 4,
                        textAlign: 'center',
                        borderRadius: 4,
                        bgcolor: 'background.paper',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                        height: '100%',
                        transition: 'all 0.3s ease',
                        border: '1px solid transparent',
                        '&:hover': {
                          borderColor: 'primary.main',
                          boxShadow: '0 10px 40px rgba(139, 38, 53, 0.15)'
                        }
                      }}
                    >
                      <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{ fontSize: '3rem', display: 'block', marginBottom: 16 }}
                      >
                        {highlight.emoji}
                      </motion.span>
                      <Chip
                        label={highlight.date}
                        size="small"
                        sx={{
                          mb: 2,
                          bgcolor: 'rgba(139, 38, 53, 0.1)',
                          color: 'primary.main'
                        }}
                      />
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                        {highlight.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {highlight.description}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Social Media Section */}
      <Box
        ref={socialRef}
        sx={{
          py: { xs: 10, md: 14 },
          background: 'linear-gradient(135deg, #8B2635 0%, #5D1A23 100%)',
          color: 'white',
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial="hidden"
            animate={socialInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Typography
                variant="overline"
                sx={{
                  color: 'secondary.main',
                  fontWeight: 600,
                  letterSpacing: 3,
                  mb: 2,
                  display: 'block'
                }}
              >
                CONNECT WITH US
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography variant="h2" sx={{ mb: 3 }}>
                Follow Our Journey
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography variant="h6" sx={{ opacity: 0.9, mb: 5, fontWeight: 400 }}>
                Stay updated with our latest dishes, behind-the-scenes moments, and special events. 
                Tag us in your photos - we love seeing your experiences!
              </Typography>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
                {[
                  { icon: <Instagram />, label: 'Instagram', url: RESTAURANT_INFO.social.instagram },
                  { icon: <Facebook />, label: 'Facebook', url: RESTAURANT_INFO.social.facebook },
                  { 
                    icon: (
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    ), 
                    label: 'TikTok', 
                    url: RESTAURANT_INFO.social.tiktok 
                  }
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ textDecoration: 'none' }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.5,
                        px: 4,
                        py: 2,
                        borderRadius: 50,
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        color: 'white',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          bgcolor: 'secondary.main',
                          color: 'primary.dark'
                        }
                      }}
                    >
                      {social.icon}
                      <Typography variant="button" sx={{ fontWeight: 600 }}>
                        {social.label}
                      </Typography>
                    </Box>
                  </motion.a>
                ))}
              </Box>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Typography
                variant="h5"
                sx={{
                  mt: 6,
                  fontWeight: 700,
                  color: 'secondary.main'
                }}
              >
                @rollingbarrelrestaurant
              </Typography>
            </motion.div>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default Stories;

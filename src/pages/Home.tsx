import { Box, Container, Typography, Button, Grid, Card, CardContent, Chip } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Restaurant,
  LocalBar,
  Schedule,
  Star,
  ArrowForward,
  DeliveryDining
} from '@mui/icons-material';
import { RESTAURANT_INFO } from '@/constants';
import { fadeInUp, staggerContainer, staggerItem, heroTextAnimation } from '@/utils';
import { useInView } from '@/hooks';

const Home = () => {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const { ref: featuresRef, isInView: featuresInView } = useInView();
  const { ref: specialsRef, isInView: specialsInView } = useInView();
  const { ref: deliveryRef, isInView: deliveryInView } = useInView();

  const features = [
    {
      icon: <Restaurant sx={{ fontSize: 40 }} />,
      title: 'Fresh Ingredients',
      description: 'Locally sourced, farm-fresh ingredients prepared with passion and expertise.'
    },
    {
      icon: <LocalBar sx={{ fontSize: 40 }} />,
      title: 'Craft Beverages',
      description: 'Handcrafted cocktails and curated selections to complement your meal.'
    },
    {
      icon: <Schedule sx={{ fontSize: 40 }} />,
      title: 'Open Daily',
      description: 'Serving breakfast, lunch, and dinner with warm hospitality every day.'
    }
  ];

  const deliveryPlatforms = [
    { name: 'Uber Eats', url: RESTAURANT_INFO.delivery.uberEats, color: '#06C167' },
    { name: 'DoorDash', url: RESTAURANT_INFO.delivery.doorDash, color: '#FF3008' },
    { name: 'Skip The Dishes', url: RESTAURANT_INFO.delivery.skipTheDishes, color: '#FF6B35' }
  ];

  return (
    <Box sx={{ overflow: 'hidden' }}>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(139, 38, 53, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(212, 165, 116, 0.1) 0%, transparent 40%),
            radial-gradient(ellipse at 60% 80%, rgba(139, 38, 53, 0.05) 0%, transparent 40%),
            linear-gradient(180deg, #FFF9F5 0%, #FFFFFF 100%)
          `,
          overflow: 'hidden'
        }}
      >
        {/* Animated Background Elements */}
        <Box
          component={motion.div}
          style={{ y: heroY }}
          sx={{
            position: 'absolute',
            top: '10%',
            right: '5%',
            width: { xs: 150, md: 300 },
            height: { xs: 150, md: 300 },
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(139, 38, 53, 0.1) 0%, rgba(212, 165, 116, 0.1) 100%)',
            filter: 'blur(60px)',
            pointerEvents: 'none'
          }}
        />
        <Box
          component={motion.div}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
          sx={{
            position: 'absolute',
            bottom: '20%',
            left: '10%',
            width: { xs: 100, md: 200 },
            height: { xs: 100, md: 200 },
            border: '2px dashed rgba(139, 38, 53, 0.2)',
            borderRadius: '50%',
            pointerEvents: 'none'
          }}
        />

        {/* Floating barrel decorations */}
        {[...Array(5)].map((_, i) => (
          <Box
            key={i}
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              y: [0, -30, 0],
              rotate: [0, 10, 0]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
            sx={{
              position: 'absolute',
              top: `${20 + i * 15}%`,
              left: `${10 + i * 18}%`,
              width: { xs: 20, md: 40 },
              height: { xs: 20, md: 40 },
              borderRadius: '40%',
              bgcolor: 'primary.main',
              opacity: 0.1,
              pointerEvents: 'none',
              display: { xs: 'none', md: 'block' }
            }}
          />
        ))}

        <Container maxWidth="lg">
          <motion.div style={{ opacity: heroOpacity }}>
            <Grid container spacing={4} alignItems="center">
              <Grid size={{ xs: 12, md: 7 }}>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                >
                  {/* Badge */}
                  <motion.div variants={fadeInUp}>
                    <Chip
                      label="🍽️ Now Open for Dine-in & Delivery"
                      sx={{
                        mb: 3,
                        py: 2.5,
                        px: 1,
                        bgcolor: 'rgba(139, 38, 53, 0.1)',
                        color: 'primary.main',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        '& .MuiChip-label': {
                          px: 2
                        }
                      }}
                    />
                  </motion.div>

                  {/* Main Title */}
                  <motion.div variants={heroTextAnimation}>
                    <Typography
                      variant="h1"
                      sx={{
                        color: 'text.primary',
                        mb: 1,
                        position: 'relative'
                      }}
                    >
                      Welcome to
                    </Typography>
                  </motion.div>

                  <motion.div variants={heroTextAnimation}>
                    <Typography
                      variant="h1"
                      sx={{
                        background: 'linear-gradient(135deg, #8B2635 0%, #5D1A23 50%, #D4A574 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        mb: 3
                      }}
                    >
                      {RESTAURANT_INFO.name}
                    </Typography>
                  </motion.div>

                  {/* Tagline */}
                  <motion.div variants={fadeInUp}>
                    <Typography
                      variant="h5"
                      sx={{
                        color: 'text.secondary',
                        mb: 4,
                        maxWidth: 500,
                        lineHeight: 1.6,
                        fontWeight: 400
                      }}
                    >
                      {RESTAURANT_INFO.tagline}. Experience authentic flavors in the heart of Oshawa.
                    </Typography>
                  </motion.div>

                  {/* CTA Buttons */}
                  <motion.div variants={fadeInUp}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          component={Link}
                          to="/menu"
                          variant="contained"
                          size="large"
                          endIcon={<ArrowForward />}
                          sx={{
                            py: 1.8,
                            px: 4,
                            fontSize: '1.1rem'
                          }}
                        >
                          View Our Menu
                        </Button>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          component={Link}
                          to="/contact"
                          variant="outlined"
                          size="large"
                          sx={{
                            py: 1.8,
                            px: 4,
                            fontSize: '1.1rem'
                          }}
                        >
                          Reserve a Table
                        </Button>
                      </motion.div>
                    </Box>
                  </motion.div>

                  {/* Stats */}
                  <motion.div variants={fadeInUp}>
                    <Box
                      sx={{
                        display: 'flex',
                        gap: { xs: 3, md: 5 },
                        mt: 6,
                        flexWrap: 'wrap'
                      }}
                    >
                      {[
                        { value: '50+', label: 'Menu Items' },
                        { value: '4.8', label: 'Rating', icon: <Star sx={{ fontSize: 16, color: '#FFB800', ml: 0.5 }} /> },
                        { value: '1000+', label: 'Happy Customers' }
                      ].map((stat, index) => (
                        <Box key={index} sx={{ textAlign: 'center' }}>
                          <Typography
                            variant="h3"
                            sx={{
                              fontWeight: 800,
                              color: 'primary.main',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            {stat.value}
                            {stat.icon}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {stat.label}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </motion.div>
                </motion.div>
              </Grid>

              {/* Hero Image/Illustration */}
              <Grid size={{ xs: 12, md: 5 }} sx={{ display: { xs: 'none', md: 'block' } }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    {/* Decorative circle */}
                    <Box
                      component={motion.div}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                      sx={{
                        position: 'absolute',
                        width: 400,
                        height: 400,
                        borderRadius: '50%',
                        border: '2px dashed',
                        borderColor: 'primary.main',
                        opacity: 0.2
                      }}
                    />
                    <Box
                      component={motion.div}
                      animate={{ rotate: -360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                      sx={{
                        position: 'absolute',
                        width: 350,
                        height: 350,
                        borderRadius: '50%',
                        border: '1px solid',
                        borderColor: 'secondary.main',
                        opacity: 0.3
                      }}
                    />
                    <Box
                      component={motion.img}
                      src="/barrel-logo.svg"
                      alt="The Rolling Barrel"
                      animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                      sx={{
                        width: 250,
                        height: 250,
                        filter: 'drop-shadow(0 20px 40px rgba(139, 38, 53, 0.3))'
                      }}
                    />
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Container>

        {/* Scroll indicator */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          sx={{
            position: 'absolute',
            bottom: 40,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1
          }}
        >
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem', letterSpacing: 2 }}>
            SCROLL
          </Typography>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Box
              sx={{
                width: 24,
                height: 40,
                border: '2px solid',
                borderColor: 'primary.main',
                borderRadius: 12,
                display: 'flex',
                justifyContent: 'center',
                pt: 1
              }}
            >
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{
                  width: 4,
                  height: 8,
                  borderRadius: 2,
                  backgroundColor: '#8B2635'
                }}
              />
            </Box>
          </motion.div>
        </Box>
      </Box>

      {/* Features Section */}
      <Box
        ref={featuresRef}
        sx={{
          py: { xs: 10, md: 15 },
          bgcolor: 'background.paper'
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            animate={featuresInView ? 'visible' : 'hidden'}
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
                  WHY CHOOSE US
                </Typography>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Typography variant="h2" sx={{ color: 'text.primary', mb: 2 }}>
                  A Dining Experience
                  <br />
                  <Box component="span" sx={{ color: 'primary.main' }}>Like No Other</Box>
                </Typography>
              </motion.div>
            </Box>

            <Grid container spacing={4}>
              {features.map((feature, index) => (
                <Grid size={{ xs: 12, md: 4 }} key={index}>
                  <motion.div
                    variants={staggerItem}
                    whileHover={{ y: -10 }}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        textAlign: 'center',
                        p: 4,
                        border: '1px solid',
                        borderColor: 'rgba(139, 38, 53, 0.1)',
                        position: 'relative',
                        overflow: 'visible',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: '50%',
                          transform: 'translateX(-50%) translateY(-50%)',
                          width: 80,
                          height: 80,
                          borderRadius: '50%',
                          bgcolor: 'background.paper',
                          border: '1px solid rgba(139, 38, 53, 0.1)',
                          zIndex: 1
                        }
                      }}
                    >
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: '50%',
                          transform: 'translateX(-50%) translateY(-50%)',
                          width: 70,
                          height: 70,
                          borderRadius: '50%',
                          bgcolor: 'primary.main',
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          zIndex: 2,
                          boxShadow: '0 10px 30px rgba(139, 38, 53, 0.3)'
                        }}
                      >
                        {feature.icon}
                      </Box>
                      <CardContent sx={{ pt: 5 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, mt: 2 }}>
                          {feature.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          {feature.description}
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

      {/* Specials CTA Section */}
      <Box
        ref={specialsRef}
        sx={{
          py: { xs: 10, md: 15 },
          background: `
            linear-gradient(135deg, #8B2635 0%, #5D1A23 100%)
          `,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Decorative elements */}
        <Box
          component={motion.div}
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          sx={{
            position: 'absolute',
            top: -200,
            right: -200,
            width: 500,
            height: 500,
            borderRadius: '50%',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        />

        <Container maxWidth="md">
          <motion.div
            initial="hidden"
            animate={specialsInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            <Box sx={{ textAlign: 'center', color: 'white' }}>
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
                  DON'T MISS OUT
                </Typography>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Typography variant="h2" sx={{ mb: 3 }}>
                  Check Out Our
                  <br />
                  Today's Specials
                </Typography>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Typography
                  variant="h6"
                  sx={{ mb: 5, opacity: 0.9, fontWeight: 400, maxWidth: 600, mx: 'auto' }}
                >
                  Discover our chef's special creations, available for a limited time only.
                  Fresh, flavorful, and unforgettable.
                </Typography>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  component={Link}
                  to="/specials"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward />}
                  sx={{
                    py: 2,
                    px: 5,
                    bgcolor: 'secondary.main',
                    color: 'primary.dark',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    '&:hover': {
                      bgcolor: 'secondary.light'
                    }
                  }}
                >
                  View Specials
                </Button>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Delivery Platforms Section */}
      <Box
        ref={deliveryRef}
        sx={{
          py: { xs: 10, md: 12 },
          bgcolor: 'background.default'
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            animate={deliveryInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <motion.div variants={fadeInUp}>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                  <DeliveryDining sx={{ fontSize: 50, color: 'primary.main' }} />
                </Box>
                <Typography variant="h3" sx={{ color: 'text.primary', mb: 2 }}>
                  Order Online
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 500, mx: 'auto' }}>
                  Can't make it to us? No problem! Order your favorite dishes through our delivery partners.
                </Typography>
              </motion.div>
            </Box>

            <Grid container spacing={3} justifyContent="center">
              {deliveryPlatforms.map((platform, index) => (
                <Grid size={{ xs: 12, sm: 4 }} key={index}>
                  <motion.div
                    variants={staggerItem}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card
                      component="a"
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 4,
                        textDecoration: 'none',
                        cursor: 'pointer',
                        border: '2px solid transparent',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          borderColor: platform.color,
                          boxShadow: `0 10px 40px ${platform.color}30`
                        }
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          color: platform.color
                        }}
                      >
                        {platform.name}
                      </Typography>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Location Preview */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          bgcolor: 'background.paper'
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <Grid container spacing={6} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
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
                    FIND US
                  </Typography>
                  <Typography variant="h2" sx={{ mb: 3 }}>
                    Visit Us Today
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
                    Located in the heart of Oshawa, The Rolling Barrel is easily accessible
                    and offers ample parking. Come experience our warm hospitality and
                    delicious cuisine in person.
                  </Typography>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      📍 Address
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {RESTAURANT_INFO.address.full}
                    </Typography>
                  </Box>
                  <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      📞 Phone
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {RESTAURANT_INFO.phoneFormatted}
                    </Typography>
                  </Box>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      component="a"
                      href={RESTAURANT_INFO.address.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="contained"
                      size="large"
                    >
                      Get Directions
                    </Button>
                  </motion.div>
                </motion.div>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <motion.div variants={fadeInUp}>
                  <Box
                    sx={{
                      borderRadius: 4,
                      overflow: 'hidden',
                      boxShadow: '0 20px 60px rgba(139, 38, 53, 0.2)',
                      height: { xs: 300, md: 400 }
                    }}
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2869.8848839476366!2d-78.87738242346191!3d43.92543673469392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d51d0c6c4f6c7b%3A0x7a6f4c5b6c7c8d9e!2s462%20Taunton%20Rd%20W%2C%20Oshawa%2C%20ON%20L1L%200W1!5e0!3m2!1sen!2sca!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Restaurant Location"
                    />
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;

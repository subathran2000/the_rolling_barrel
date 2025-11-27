import { Box, Container, Typography, Grid, Card, CardContent, Chip, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { AccessTime, LocalOffer, Star } from '@mui/icons-material';
import { fadeInUp, staggerContainer, staggerItem } from '@/utils';
import { useInView } from '@/hooks';

const specials = [
  {
    id: 1,
    name: "Chef's Special Steak",
    description: 'Premium 14oz ribeye with truffle butter, roasted garlic mashed potatoes, and grilled asparagus',
    originalPrice: '$42.99',
    specialPrice: '$34.99',
    image: '🥩',
    available: 'Friday & Saturday Only',
    badge: 'Limited Time'
  },
  {
    id: 2,
    name: 'Seafood Platter for Two',
    description: 'Lobster tail, grilled shrimp, pan-seared scallops, and calamari with lemon butter sauce',
    originalPrice: '$68.99',
    specialPrice: '$54.99',
    image: '🦞',
    available: 'Weekends',
    badge: 'Best Seller'
  },
  {
    id: 3,
    name: 'Sunday Brunch Special',
    description: 'Unlimited mimosas with any brunch entree. Includes eggs benedict, pancakes, or avocado toast',
    originalPrice: '$32.99',
    specialPrice: '$24.99',
    image: '🥂',
    available: 'Sundays 10am-2pm',
    badge: 'Weekend Special'
  },
  {
    id: 4,
    name: 'Happy Hour Burger Deal',
    description: 'Signature Barrel Burger with fries and a craft beer or cocktail',
    originalPrice: '$28.99',
    specialPrice: '$19.99',
    image: '🍔',
    available: 'Mon-Thu 4pm-7pm',
    badge: 'Happy Hour'
  },
  {
    id: 5,
    name: 'Family Feast',
    description: 'Whole roasted chicken, ribs, corn on the cob, coleslaw, and cornbread. Feeds 4-5 people',
    originalPrice: '$89.99',
    specialPrice: '$69.99',
    image: '🍗',
    available: 'Every Day',
    badge: 'Family Deal'
  },
  {
    id: 6,
    name: 'Dessert Duo',
    description: 'Any two desserts of your choice plus two specialty coffees',
    originalPrice: '$28.99',
    specialPrice: '$19.99',
    image: '🍰',
    available: 'After 8pm',
    badge: 'Sweet Deal'
  }
];

const weeklySpecials = [
  { day: 'Monday', special: 'Pasta Night - 20% off all pasta dishes', emoji: '🍝' },
  { day: 'Tuesday', special: 'Taco Tuesday - $3 tacos & $5 margaritas', emoji: '🌮' },
  { day: 'Wednesday', special: 'Wing Wednesday - Half-price wings', emoji: '🍗' },
  { day: 'Thursday', special: 'Throwback Thursday - Classic comfort foods', emoji: '🍖' },
  { day: 'Friday', special: 'Fish Friday - Fresh catch of the day', emoji: '🐟' },
  { day: 'Saturday', special: 'Date Night - Couples dinner special', emoji: '💑' },
  { day: 'Sunday', special: 'Brunch Bonanza - All-day brunch menu', emoji: '🥞' }
];

const Specials = () => {
  const { ref: specialsRef, isInView: specialsInView } = useInView();
  const { ref: weeklyRef, isInView: weeklyInView } = useInView();

  return (
    <Box sx={{ overflow: 'hidden' }}>
      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 12, md: 20 },
          background: `
            radial-gradient(ellipse at 50% 50%, rgba(139, 38, 53, 0.15) 0%, transparent 60%),
            linear-gradient(180deg, #FFF9F5 0%, #FFFFFF 100%)
          `,
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Animated background elements */}
        {[...Array(6)].map((_, i) => (
          <Box
            key={i}
            component={motion.div}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
            sx={{
              position: 'absolute',
              top: `${20 + i * 12}%`,
              left: `${10 + i * 15}%`,
              fontSize: { xs: '2rem', md: '3rem' },
              pointerEvents: 'none'
            }}
          >
            {['⭐', '🔥', '✨', '💫', '🌟', '⚡'][i]}
          </Box>
        ))}

        <Container maxWidth="md">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Chip
                icon={<LocalOffer />}
                label="Limited Time Offers"
                sx={{
                  mb: 3,
                  py: 2.5,
                  px: 2,
                  bgcolor: 'primary.main',
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  '& .MuiChip-icon': { color: 'white' }
                }}
              />
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
                Today's Specials
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
                Exclusive deals and seasonal favorites crafted by our chef. 
                Don't miss these incredible offers!
              </Typography>
            </motion.div>
          </motion.div>
        </Container>
      </Box>

      {/* Featured Specials */}
      <Box
        ref={specialsRef}
        sx={{
          py: { xs: 8, md: 12 },
          bgcolor: 'background.paper'
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            animate={specialsInView ? 'visible' : 'hidden'}
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
                  FEATURED DEALS
                </Typography>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Typography variant="h2">
                  Unmissable
                  <Box component="span" sx={{ color: 'primary.main' }}> Offers</Box>
                </Typography>
              </motion.div>
            </Box>

            <Grid container spacing={4}>
              {specials.map((special) => (
                <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={special.id}>
                  <motion.div
                    variants={staggerItem}
                    whileHover={{ y: -10, scale: 1.02 }}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        position: 'relative',
                        overflow: 'visible',
                        border: '2px solid transparent',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          borderColor: 'primary.main',
                          boxShadow: '0 20px 60px rgba(139, 38, 53, 0.2)'
                        }
                      }}
                    >
                      {/* Badge */}
                      <Chip
                        icon={<Star sx={{ fontSize: 16 }} />}
                        label={special.badge}
                        sx={{
                          position: 'absolute',
                          top: -12,
                          right: 16,
                          bgcolor: 'primary.main',
                          color: 'white',
                          fontWeight: 700,
                          '& .MuiChip-icon': { color: 'white' }
                        }}
                      />

                      <CardContent sx={{ p: 4 }}>
                        {/* Emoji Icon */}
                        <Box
                          sx={{
                            fontSize: '4rem',
                            mb: 2,
                            display: 'flex',
                            justifyContent: 'center'
                          }}
                        >
                          <motion.span
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            {special.image}
                          </motion.span>
                        </Box>

                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, textAlign: 'center' }}>
                          {special.name}
                        </Typography>

                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ mb: 3, textAlign: 'center', lineHeight: 1.7 }}
                        >
                          {special.description}
                        </Typography>

                        {/* Pricing */}
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, mb: 3 }}>
                          <Typography
                            sx={{
                              textDecoration: 'line-through',
                              color: 'text.secondary',
                              fontSize: '1.1rem'
                            }}
                          >
                            {special.originalPrice}
                          </Typography>
                          <Typography
                            variant="h4"
                            sx={{
                              color: 'primary.main',
                              fontWeight: 800
                            }}
                          >
                            {special.specialPrice}
                          </Typography>
                        </Box>

                        {/* Availability */}
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 1,
                            color: 'text.secondary'
                          }}
                        >
                          <AccessTime sx={{ fontSize: 18 }} />
                          <Typography variant="body2">
                            {special.available}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Weekly Specials */}
      <Box
        ref={weeklyRef}
        sx={{
          py: { xs: 8, md: 12 },
          background: 'linear-gradient(135deg, #8B2635 0%, #5D1A23 100%)',
          color: 'white'
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            animate={weeklyInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            <Box sx={{ textAlign: 'center', mb: 8 }}>
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
                  PLAN YOUR WEEK
                </Typography>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Typography variant="h2">
                  Weekly Specials
                </Typography>
              </motion.div>
            </Box>

            <Grid container spacing={3}>
              {weeklySpecials.map((item) => (
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 12/7 * 2 }} key={item.day}>
                  <motion.div
                    variants={staggerItem}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Box
                      sx={{
                        p: 3,
                        borderRadius: 3,
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        textAlign: 'center',
                        transition: 'all 0.3s ease',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        '&:hover': {
                          bgcolor: 'rgba(255, 255, 255, 0.15)',
                          borderColor: 'secondary.main'
                        }
                      }}
                    >
                      <Typography sx={{ fontSize: '2rem', mb: 1 }}>
                        {item.emoji}
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: 'secondary.main' }}>
                        {item.day}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        {item.special}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          bgcolor: 'background.default',
          textAlign: 'center'
        }}
      >
        <Container maxWidth="sm">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Typography variant="h3" sx={{ mb: 3 }}>
              Ready to
              <Box component="span" sx={{ color: 'primary.main' }}> Indulge?</Box>
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              These specials won't last forever. Visit us today and treat yourself!
            </Typography>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                component="a"
                href="tel:905-743-0722"
                variant="contained"
                size="large"
                sx={{ py: 2, px: 5, fontSize: '1.1rem' }}
              >
                Reserve Your Table
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default Specials;

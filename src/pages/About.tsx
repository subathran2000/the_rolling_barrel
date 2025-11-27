import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Restaurant,
  Groups,
  EmojiEvents,
  Favorite
} from '@mui/icons-material';
import { fadeInUp, staggerContainer, staggerItem } from '@/utils';
import { useInView } from '@/hooks';

const About = () => {
  const { ref: storyRef, isInView: storyInView } = useInView();
  const { ref: valuesRef, isInView: valuesInView } = useInView();
  const { ref: teamRef, isInView: teamInView } = useInView();

  const values = [
    {
      icon: <Restaurant sx={{ fontSize: 40 }} />,
      title: 'Quality First',
      description: 'We never compromise on the quality of our ingredients. Every dish is crafted with care using the freshest local produce.'
    },
    {
      icon: <Groups sx={{ fontSize: 40 }} />,
      title: 'Community',
      description: 'We believe in building a strong community. Our restaurant is a place where neighbors become friends over great food.'
    },
    {
      icon: <EmojiEvents sx={{ fontSize: 40 }} />,
      title: 'Excellence',
      description: 'Striving for excellence in every aspect - from our recipes to our service. Your satisfaction is our greatest achievement.'
    },
    {
      icon: <Favorite sx={{ fontSize: 40 }} />,
      title: 'Passion',
      description: 'Cooking with love and serving with heart. Our passion for food drives us to create memorable dining experiences.'
    }
  ];

  return (
    <Box sx={{ overflow: "hidden" }}>
      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 12, md: 20 },
          background: `
            radial-gradient(ellipse at 30% 50%, rgba(139, 38, 53, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 80%, rgba(212, 165, 116, 0.1) 0%, transparent 40%),
            linear-gradient(180deg, #FFF9F5 0%, #FFFFFF 100%)
          `,
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Decorative elements */}
        <Box
          component={motion.div}
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          sx={{
            position: "absolute",
            top: "20%",
            right: "10%",
            width: 100,
            height: 100,
            borderRadius: "50%",
            border: "2px dashed rgba(139, 38, 53, 0.2)",
            display: { xs: "none", md: "block" },
          }}
        />

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
                  color: "primary.main",
                  fontWeight: 600,
                  letterSpacing: 4,
                  mb: 2,
                  display: "block",
                }}
              >
                OUR STORY
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography
                variant="h1"
                sx={{
                  mb: 3,
                  background:
                    "linear-gradient(135deg, #8B2635 0%, #5D1A23 50%, #D4A574 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                About Us
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography
                variant="h5"
                sx={{
                  color: "text.secondary",
                  maxWidth: 700,
                  mx: "auto",
                  lineHeight: 1.8,
                  fontWeight: 400,
                }}
              >
                A journey of passion, flavor, and community in the heart of
                Oshawa
              </Typography>
            </motion.div>
          </motion.div>
        </Container>
      </Box>

      {/* Story Section */}
      <Box
        ref={storyRef}
        sx={{
          py: { xs: 10, md: 15 },
          bgcolor: "background.paper",
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            animate={storyInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <Grid container spacing={8} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <motion.div variants={fadeInUp}>
                  <Box
                    sx={{
                      position: "relative",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: -20,
                        left: -20,
                        width: "100%",
                        height: "100%",
                        border: "3px solid",
                        borderColor: "primary.main",
                        borderRadius: 4,
                        opacity: 0.3,
                        zIndex: 0,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        zIndex: 1,
                        borderRadius: 4,
                        overflow: "hidden",
                        bgcolor: "primary.main",
                        height: { xs: 300, md: 450 },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <Box
                          component="img"
                          src="/the-rolling-barrel-logo.webp"
                          alt="The Rolling Barrel"
                          sx={{
                            width: { xs: 150, md: 200 },
                            height: { xs: 150, md: 200 },
                            borderRadius: "50%",
                            objectFit: "cover",
                          }}
                        />
                      </motion.div>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <motion.div variants={staggerContainer}>
                  <motion.div variants={fadeInUp}>
                    <Typography
                      variant="overline"
                      sx={{
                        color: "primary.main",
                        fontWeight: 600,
                        letterSpacing: 3,
                        mb: 2,
                        display: "block",
                      }}
                    >
                      EST. 2024
                    </Typography>
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <Typography variant="h2" sx={{ mb: 4 }}>
                      From Dream to
                      <Box component="span" sx={{ color: "primary.main" }}>
                        {" "}
                        Reality
                      </Box>
                    </Typography>
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <Typography
                      variant="body1"
                      sx={{ mb: 3, color: "text.secondary", lineHeight: 1.9 }}
                    >
                      The Rolling Barrel was born from a simple dream: to create
                      a place where exceptional food meets genuine hospitality.
                      Nestled in the vibrant community of Oshawa, we've built
                      more than just a restaurant – we've created a home away
                      from home.
                    </Typography>
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <Typography
                      variant="body1"
                      sx={{ mb: 3, color: "text.secondary", lineHeight: 1.9 }}
                    >
                      Our name reflects our philosophy: like a barrel that rolls
                      forward, we're constantly evolving, experimenting with new
                      flavors while honoring traditional recipes that have been
                      passed down through generations.
                    </Typography>
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary", lineHeight: 1.9 }}
                    >
                      Every dish we serve tells a story – of fresh ingredients
                      sourced from local farms, of recipes perfected over time,
                      and of the love and care that goes into every plate that
                      leaves our kitchen.
                    </Typography>
                  </motion.div>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Values Section */}
      <Box
        ref={valuesRef}
        sx={{
          py: { xs: 10, md: 15 },
          bgcolor: "background.default",
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <Box sx={{ textAlign: "center", mb: 8 }}>
              <motion.div variants={fadeInUp}>
                <Typography
                  variant="overline"
                  sx={{
                    color: "primary.main",
                    fontWeight: 600,
                    letterSpacing: 3,
                    mb: 2,
                    display: "block",
                  }}
                >
                  WHAT DRIVES US
                </Typography>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Typography variant="h2" sx={{ mb: 2 }}>
                  Our Core Values
                </Typography>
              </motion.div>
            </Box>

            <Grid container spacing={4}>
              {values.map((value, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                  <motion.div variants={staggerItem} whileHover={{ y: -10 }}>
                    <Card
                      sx={{
                        height: "100%",
                        p: 4,
                        textAlign: "center",
                        border: "1px solid rgba(139, 38, 53, 0.1)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          borderColor: "primary.main",
                          boxShadow: "0 20px 50px rgba(139, 38, 53, 0.15)",
                        },
                      }}
                    >
                      <CardContent>
                        <Box
                          sx={{
                            width: 80,
                            height: 80,
                            borderRadius: "50%",
                            bgcolor: "rgba(139, 38, 53, 0.1)",
                            color: "primary.main",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mx: "auto",
                            mb: 3,
                          }}
                        >
                          {value.icon}
                        </Box>
                        <Typography
                          variant="h5"
                          sx={{ fontWeight: 700, mb: 2 }}
                        >
                          {value.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ lineHeight: 1.7 }}
                        >
                          {value.description}
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

      {/* Team Section */}
      <Box
        ref={teamRef}
        sx={{
          py: { xs: 10, md: 15 },
          background: "linear-gradient(135deg, #8B2635 0%, #5D1A23 100%)",
          color: "white",
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <Box sx={{ textAlign: "center" }}>
              <motion.div variants={fadeInUp}>
                <Typography
                  variant="overline"
                  sx={{
                    color: "secondary.main",
                    fontWeight: 600,
                    letterSpacing: 3,
                    mb: 2,
                    display: "block",
                  }}
                >
                  THE HEART OF OUR RESTAURANT
                </Typography>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Typography variant="h2" sx={{ mb: 4 }}>
                  Meet Our Team
                </Typography>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Typography
                  variant="h6"
                  sx={{
                    opacity: 0.9,
                    fontWeight: 400,
                    maxWidth: 600,
                    mx: "auto",
                    lineHeight: 1.8,
                  }}
                >
                  Behind every great meal is a team of dedicated individuals who
                  pour their hearts into creating unforgettable experiences.
                  From our talented chefs to our warm and welcoming staff,
                  everyone at The Rolling Barrel shares a common goal: to make
                  your visit truly special.
                </Typography>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Box
                  sx={{
                    mt: 6,
                    p: 4,
                    borderRadius: 4,
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <Typography variant="h4" sx={{ fontStyle: "italic", mb: 2 }}>
                    "Food is our love language, and every dish is a letter to
                    your soul."
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "secondary.main", fontWeight: 600 }}
                  >
                    — The Rolling Barrel Family
                  </Typography>
                </Box>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box
        sx={{
          py: { xs: 10, md: 12 },
          bgcolor: "background.paper",
          textAlign: "center",
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
              Ready to Experience
              <Box component="span" sx={{ color: "primary.main" }}>
                {" "}
                The Difference?
              </Box>
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Join us for a meal and discover why our guests keep coming back.
              We can't wait to welcome you to our table.
            </Typography>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default About;

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SEO, FloatingElements } from "@/components/common";
import Scene3D from "@/components/3d/Scene";
import { FaUtensils, FaUsers, FaTrophy, FaHeart } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils";
import { useInView } from "@/hooks";

const About = () => {
  const { ref: storyRef, isInView: storyInView } = useInView();
  const { ref: valuesRef, isInView: valuesInView } = useInView();
  const { ref: teamRef, isInView: teamInView } = useInView();

  const values = [
    {
      icon: <FaUtensils size={40} />,
      title: "Quality First",
      description:
        "We never compromise on the quality of our ingredients. Every dish is crafted with care using the freshest local produce.",
    },
    {
      icon: <FaUsers size={40} />,
      title: "Community",
      description:
        "We believe in building a strong community. Our restaurant is a place where neighbors become friends over great food.",
    },
    {
      icon: <FaTrophy size={40} />,
      title: "Excellence",
      description:
        "Striving for excellence in every aspect - from our recipes to our service. Your satisfaction is our greatest achievement.",
    },
    {
      icon: <FaHeart size={40} />,
      title: "Passion",
      description:
        "Cooking with love and serving with heart. Our passion for food drives us to create memorable dining experiences.",
    },
  ];

  return (
    <>
      <SEO
        title="About Us"
        description="Learn about The Rolling Barrel's story, our passion for authentic Sri Lankan cuisine, and our commitment to bringing family recipes to your table."
      />
      <Box sx={{ overflowX: "hidden" }}>
        <Box
          sx={{
            py: { xs: 12, md: 20 },
            background: `
            radial-gradient(ellipse at 30% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 80%, rgba(255, 255, 255, 0.02) 0%, transparent 40%),
            linear-gradient(180deg, #0A0A0A 0%, #050505 100%)
          `,
            textAlign: "center",
            position: "relative",
            minHeight: { xs: "auto", md: "60vh" },
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* 3D Background Scene */}
          <Scene3D variant="ambient" intensity={0.6} />
          {/* Premium floating elements */}
          <FloatingElements variant="light" density="sparse" />
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
              border: "2px dashed rgba(255, 255, 255, 0.1)",
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
                      "linear-gradient(135deg, #FFFFFF 0%, #888888 100%)",
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
                          borderColor: "rgba(255, 255, 255, 0.2)",
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
                          bgcolor: "rgba(20, 20, 20, 0.95)",
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
                            src="/the-rolling-barrel-logo.png"
                            alt="The Rolling Barrel"
                            sx={{
                              width: { xs: 150, md: 200 },
                              height: { xs: 150, md: 200 },
                              objectFit: "contain",
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
                        The Rolling Barrel was born from a simple dream: to
                        create a place where exceptional food meets genuine
                        hospitality. Nestled in the vibrant community of Oshawa,
                        we've built more than just a restaurant – we've created
                        a home away from home.
                      </Typography>
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <Typography
                        variant="body1"
                        sx={{ mb: 3, color: "text.secondary", lineHeight: 1.9 }}
                      >
                        Our name reflects our philosophy: like a barrel that
                        rolls forward, we're constantly evolving, experimenting
                        with new flavors while honoring traditional recipes that
                        have been passed down through generations.
                      </Typography>
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <Typography
                        variant="body1"
                        sx={{ color: "text.secondary", lineHeight: 1.9 }}
                      >
                        Every dish we serve tells a story – of fresh ingredients
                        sourced from local farms, of recipes perfected over
                        time, and of the love and care that goes into every
                        plate that leaves our kitchen.
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
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.02) 0%, transparent 50%), radial-gradient(circle at 90% 80%, rgba(255, 255, 255, 0.02) 0%, transparent 50%)",
              pointerEvents: "none",
            },
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
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          bgcolor: "rgba(15, 15, 15, 0.9)",
                          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          position: "relative",
                          overflow: "hidden",
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            height: "3px",
                            background:
                              "linear-gradient(90deg, #FFFFFF, #888888)",
                            transform: "scaleX(0)",
                            transformOrigin: "left",
                            transition: "transform 0.4s ease",
                          },
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            inset: 0,
                            background:
                              "linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, transparent 50%)",
                            opacity: 0,
                            transition: "opacity 0.4s ease",
                          },
                          "&:hover": {
                            borderColor: "rgba(255, 255, 255, 0.3)",
                            boxShadow: "0 25px 60px rgba(0, 0, 0, 0.4)",
                          },
                          "&:hover::before": {
                            transform: "scaleX(1)",
                          },
                          "&:hover::after": {
                            opacity: 1,
                          },
                        }}
                      >
                        <CardContent>
                          <Box
                            sx={{
                              width: 80,
                              height: 80,
                              borderRadius: "50%",
                              bgcolor: "rgba(255, 255, 255, 0.08)",
                              color: "#FFFFFF",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              mx: "auto",
                              mb: 3,
                              transition: "all 0.4s ease",
                              position: "relative",
                              "&::after": {
                                content: '""',
                                position: "absolute",
                                inset: -4,
                                borderRadius: "50%",
                                border: "2px dashed rgba(255, 255, 255, 0.1)",
                                opacity: 0,
                                transition: "all 0.4s ease",
                              },
                              "&:hover": {
                                bgcolor: "rgba(255, 255, 255, 0.15)",
                                transform: "scale(1.05)",
                              },
                              "&:hover::after": {
                                opacity: 1,
                              },
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
            background: "linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%)",
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
                      color: "#AAAAAA",
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
                    Behind every great meal is a team of dedicated individuals
                    who pour their hearts into creating unforgettable
                    experiences. From our talented chefs to our warm and
                    welcoming staff, everyone at The Rolling Barrel shares a
                    common goal: to make your visit truly special.
                  </Typography>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <Box
                    sx={{
                      mt: 6,
                      p: 4,
                      borderRadius: 4,
                      bgcolor: "rgba(255, 255, 255, 0.05)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{ fontStyle: "italic", mb: 2 }}
                    >
                      "Food is our love language, and every dish is a letter to
                      your soul."
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "#AAAAAA", fontWeight: 600 }}
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
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    component={Link}
                    to="/menu"
                    variant="contained"
                    size="large"
                    endIcon={<FiChevronRight />}
                    sx={{ py: 1.5, px: 4 }}
                  >
                    View Menu
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    component={Link}
                    to="/contact?subject=Reservation"
                    variant="outlined"
                    size="large"
                    sx={{ py: 1.5, px: 4 }}
                  >
                    Make a Reservation
                  </Button>
                </motion.div>
              </Box>
            </motion.div>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default About;

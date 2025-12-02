import { Box, Container, Typography, Button, Grid, Card, CardContent, Chip } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaUtensils,
  FaStar,
  FaTruck,
  FaGamepad,
  FaCalendarAlt,
  FaConciergeBell,
  FaChild,
  FaCoffee,
} from "react-icons/fa";
import { FiClock, FiChevronRight, FiPhone, FiMapPin } from "react-icons/fi";
import { RESTAURANT_INFO } from "@/constants";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  heroTextAnimation,
} from "@/utils";
import { useInView } from "@/hooks";

const Home = () => {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const { ref: featuresRef, isInView: featuresInView } = useInView();
  const { ref: specialsRef, isInView: specialsInView } = useInView();
  const { ref: deliveryRef, isInView: deliveryInView } = useInView();

  const features = [
    {
      icon: <FaUtensils size={40} />,
      title: "Breakfast, Lunch & Dinner",
      description:
        "Fresh meals every day! From stacked breakfasts to sizzling dinners.",
    },
    {
      icon: <FiClock size={40} />,
      title: "Open 7 Days a Week",
      description:
        "Monday through Sunday. Sunday early hours starting at 9 AM!",
    },
    {
      icon: <FaGamepad size={40} />,
      title: "Game Nights",
      description: "Catch the action on our big screens. Join the fun!",
    },
  ];

  const deliveryPlatforms = [
    {
      name: "Uber Eats",
      url: RESTAURANT_INFO.delivery.uberEats,
      color: "#06C167",
    },
    ...(RESTAURANT_INFO.onlineOrdering.enabled
      ? [
          {
            name: "Online Ordering",
            url: RESTAURANT_INFO.onlineOrdering.link,
            color: "#8B2635",
          },
        ]
      : []),
  ];

  return (
    <Box sx={{ overflow: "hidden" }}>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(139, 38, 53, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(212, 165, 116, 0.1) 0%, transparent 40%),
            radial-gradient(ellipse at 60% 80%, rgba(139, 38, 53, 0.05) 0%, transparent 40%),
            linear-gradient(180deg, #FFF9F5 0%, #FFFFFF 100%)
          `,
          overflow: "hidden",
        }}
      >
        {/* Animated Background Elements */}
        <Box
          component={motion.div}
          style={{ y: heroY }}
          sx={{
            position: "absolute",
            top: "10%",
            right: "5%",
            width: { xs: 150, md: 300 },
            height: { xs: 150, md: 300 },
            borderRadius: "50%",
            background:
              "linear-gradient(135deg, rgba(139, 38, 53, 0.1) 0%, rgba(212, 165, 116, 0.1) 100%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />
        <Box
          component={motion.div}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          sx={{
            position: "absolute",
            bottom: "20%",
            left: "10%",
            width: { xs: 100, md: 200 },
            height: { xs: 100, md: 200 },
            border: "2px dashed rgba(139, 38, 53, 0.2)",
            borderRadius: "50%",
            pointerEvents: "none",
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
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            sx={{
              position: "absolute",
              top: `${20 + i * 15}%`,
              left: `${10 + i * 18}%`,
              width: { xs: 20, md: 40 },
              height: { xs: 20, md: 40 },
              borderRadius: "40%",
              bgcolor: "primary.main",
              opacity: 0.1,
              pointerEvents: "none",
              display: { xs: "none", md: "block" },
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
                      label="Now Open for Dine-in & Delivery"
                      sx={{
                        mb: { xs: 2, md: 3 },
                        mt: { xs: -2, md: 0 },
                        py: 2.5,
                        px: 1,
                        bgcolor: "rgba(139, 38, 53, 0.1)",
                        color: "primary.main",
                        fontWeight: 600,
                        fontSize: { xs: "0.8rem", sm: "0.9rem" },
                        "& .MuiChip-label": {
                          px: 2,
                        },
                      }}
                    />
                  </motion.div>

                  {/* Main Title */}
                  <motion.div variants={heroTextAnimation}>
                    <Typography
                      variant="h1"
                      sx={{
                        color: "text.primary",
                        mb: 1,
                        position: "relative",
                      }}
                    >
                      Welcome to
                    </Typography>
                  </motion.div>

                  <motion.div variants={heroTextAnimation}>
                    <Typography
                      variant="h1"
                      sx={{
                        background:
                          "linear-gradient(135deg, #8B2635 0%, #5D1A23 50%, #D4A574 100%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        mb: 3,
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
                        color: "text.secondary",
                        mb: 4,
                        maxWidth: 500,
                        lineHeight: 1.6,
                        fontWeight: 400,
                      }}
                    >
                      {RESTAURANT_INFO.tagline}. Experience authentic flavors in
                      the heart of Oshawa.
                    </Typography>
                  </motion.div>

                  {/* CTA Buttons */}
                  <motion.div variants={fadeInUp}>
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "nowrap",
                        gap: { xs: 1.5, sm: 2 },
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
                          sx={{
                            py: { xs: 1.5, sm: 1.8 },
                            px: { xs: 2.5, sm: 4 },
                            fontSize: { xs: "0.95rem", sm: "1.1rem" },
                          }}
                        >
                          <Box
                            component="span"
                            sx={{ display: { xs: "none", sm: "inline" } }}
                          >
                            View Our{" "}
                          </Box>
                          Menu
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
                          sx={{
                            py: { xs: 1.5, sm: 1.8 },
                            px: { xs: 2.5, sm: 4 },
                            fontSize: { xs: "0.95rem", sm: "1.1rem" },
                          }}
                        >
                          Reservation
                        </Button>
                      </motion.div>
                    </Box>
                  </motion.div>

                  {/* Stats */}
                  <motion.div variants={fadeInUp}>
                    <Box
                      sx={{
                        display: "flex",
                        gap: { xs: 3, md: 5 },
                        mt: 6,
                        flexWrap: "wrap",
                      }}
                    >
                      {[
                        { value: "100+", label: "Menu Items" },
                        {
                          value: "4.8",
                          label: "Rating",
                          icon: (
                            <FaStar
                              size={16}
                              style={{ color: "#FFB800", marginLeft: 8 }}
                            />
                          ),
                        },
                        { value: "1000+", label: "Happy Customers" },
                      ].map((stat, index) => (
                        <Box key={index} sx={{ textAlign: "center" }}>
                          <Typography
                            variant="h3"
                            sx={{
                              fontWeight: 800,
                              color: "primary.main",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
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
              <Grid
                size={{ xs: 12, md: 5 }}
                sx={{ display: { xs: "none", md: "block" } }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* Decorative circle */}
                    <Box
                      component={motion.div}
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      sx={{
                        position: "absolute",
                        width: 400,
                        height: 400,
                        borderRadius: "50%",
                        border: "2px dashed",
                        borderColor: "primary.main",
                        opacity: 0.2,
                      }}
                    />
                    <Box
                      component={motion.div}
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      sx={{
                        position: "absolute",
                        width: 350,
                        height: 350,
                        borderRadius: "50%",
                        border: "1px solid",
                        borderColor: "secondary.main",
                        opacity: 0.3,
                      }}
                    />
                    <Box
                      component={motion.img}
                      src="/the-rolling-barrel.png"
                      alt="The Rolling Barrel"
                      animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      sx={{
                        width: 250,
                        height: 250,
                        filter:
                          "drop-shadow(0 20px 40px rgba(139, 38, 53, 0.3))",
                      }}
                    />
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Features Section */}
      <Box
        ref={featuresRef}
        sx={{
          py: { xs: 10, md: 15 },
          bgcolor: "background.paper",
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
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
                  WHY CHOOSE US
                </Typography>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Typography variant="h2" sx={{ color: "text.primary", mb: 2 }}>
                  A Dining Experience
                  <br />
                  <Box component="span" sx={{ color: "primary.main" }}>
                    Like No Other
                  </Box>
                </Typography>
              </motion.div>
            </Box>

            <Grid container spacing={4}>
              {features.map((feature, index) => (
                <Grid size={{ xs: 12, md: 4 }} key={index}>
                  <motion.div variants={staggerItem} whileHover={{ y: -10 }}>
                    <Card
                      sx={{
                        height: "100%",
                        textAlign: "center",
                        p: 4,
                        border: "1px solid",
                        borderColor: "rgba(139, 38, 53, 0.1)",
                        position: "relative",
                        overflow: "visible",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: "50%",
                          transform: "translateX(-50%) translateY(-50%)",
                          width: 80,
                          height: 80,
                          borderRadius: "50%",
                          bgcolor: "background.paper",
                          border: "1px solid rgba(139, 38, 53, 0.1)",
                          zIndex: 1,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: "50%",
                          transform: "translateX(-50%) translateY(-50%)",
                          width: 70,
                          height: 70,
                          borderRadius: "50%",
                          bgcolor: "primary.main",
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          zIndex: 2,
                          boxShadow: "0 10px 30px rgba(139, 38, 53, 0.3)",
                        }}
                      >
                        {feature.icon}
                      </Box>
                      <CardContent sx={{ pt: 5 }}>
                        <Typography
                          variant="h5"
                          sx={{ fontWeight: 700, mb: 2, mt: 2 }}
                        >
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

      {/* What We Offer Section */}
      <Box
        sx={{
          py: { xs: 8, md: 10 },
          bgcolor: "background.default",
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <Box sx={{ textAlign: "center", mb: 6 }}>
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
                  WE INVITE YOU
                </Typography>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Typography variant="h2" sx={{ color: "text.primary", mb: 2 }}>
                  What We Offer
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ maxWidth: 600, mx: "auto" }}
                >
                  Families, friends, food lovers — come on in! Whether you're
                  catching a game, celebrating a special day, or grabbing a cozy
                  bite, we've got something for everyone.
                </Typography>
              </motion.div>
            </Box>

            <Grid container spacing={3} justifyContent="center">
              {[
                {
                  icon: <FaChild size={28} />,
                  label: "Kids Menu & Sweet Desserts",
                  link: "/menu",
                },
                {
                  icon: <FaConciergeBell size={28} />,
                  label: "Dine-In & Takeout",
                  link: null,
                },
                {
                  icon: <FaCalendarAlt size={28} />,
                  label: "Reservations Welcome",
                  link: "/contact?subject=Reservation",
                },
                {
                  icon: <FaUtensils size={28} />,
                  label: "Catering for All Occasions",
                  link: "/contact?subject=Catering",
                },
                {
                  icon: <FaStar size={28} />,
                  label: "Daily Specials",
                  link: "/specials",
                },
              ].map((item, index) => (
                <Grid size={{ xs: 6, sm: 4, md: 2.4 }} key={index}>
                  <motion.div
                    variants={staggerItem}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <Box
                      component={item.link ? Link : "div"}
                      {...(item.link ? { to: item.link } : {})}
                      sx={{
                        textAlign: "center",
                        p: 3,
                        borderRadius: 2,
                        bgcolor: "background.paper",
                        border: "1px solid",
                        borderColor: "divider",
                        height: "100%",
                        display: "block",
                        textDecoration: "none",
                        cursor: item.link ? "pointer" : "default",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          borderColor: "primary.main",
                          boxShadow: "0 8px 30px rgba(139, 38, 53, 0.15)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          color: "primary.main",
                          mb: 2,
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 600, color: "text.primary" }}
                      >
                        {item.label}
                      </Typography>
                    </Box>
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
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative elements */}
        <Box
          component={motion.div}
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          sx={{
            position: "absolute",
            top: -200,
            right: -200,
            width: 500,
            height: 500,
            borderRadius: "50%",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        />

        <Container maxWidth="md">
          <motion.div
            initial="hidden"
            animate={specialsInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <Box sx={{ textAlign: "center", color: "white" }}>
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
                  DON'T MISS OUT
                </Typography>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Typography variant="h2" sx={{ mb: 3 }}>
                  Daily Specials
                  <br />
                  Come See What's Cooking!
                </Typography>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 5,
                    opacity: 0.9,
                    fontWeight: 400,
                    maxWidth: 600,
                    mx: "auto",
                  }}
                >
                  Discover our chef's special creations. Fresh, flavorful, and
                  unforgettable. Every bite keeps you rolling back for more!
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
                  endIcon={<FiChevronRight />}
                  sx={{
                    py: 2,
                    px: 5,
                    bgcolor: "secondary.main",
                    color: "white",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    "&:hover": {
                      bgcolor: "secondary.light",
                    },
                  }}
                >
                  View Specials
                </Button>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Our Menus Section */}
      <Box
        sx={{
          py: { xs: 8, md: 10 },
          bgcolor: "background.paper",
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <Box sx={{ textAlign: "center", mb: 6 }}>
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
                  OUR MENUS
                </Typography>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Typography variant="h2" sx={{ color: "text.primary", mb: 2 }}>
                  Something for Every Meal
                </Typography>
              </motion.div>
            </Box>

            <Grid container spacing={4} justifyContent="center">
              {[
                {
                  icon: <FaCoffee size={36} />,
                  title: "Breakfast",
                  subtitle: "Rise & Shine",
                  description: "Start your day with our stacked breakfasts",
                  color: "#D4A574",
                },
                {
                  icon: <FaUtensils size={36} />,
                  title: "Lunch",
                  subtitle: "The Lunch Barrel",
                  description: "Perfect midday meals to keep you going",
                  color: "#8B2635",
                },
                {
                  icon: <FaStar size={36} />,
                  title: "Dinner",
                  subtitle: "Rolling Nights",
                  description: "Sizzling dinners for memorable evenings",
                  color: "#5D1A23",
                },
              ].map((menu, index) => (
                <Grid size={{ xs: 12, sm: 4 }} key={index}>
                  <motion.div variants={staggerItem} whileHover={{ y: -10 }}>
                    <Card
                      component={Link}
                      to="/menu"
                      sx={{
                        p: 4,
                        textAlign: "center",
                        textDecoration: "none",
                        height: "100%",
                        border: "2px solid",
                        borderColor: "divider",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          borderColor: menu.color,
                          boxShadow: `0 15px 40px ${menu.color}30`,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: "50%",
                          bgcolor: `${menu.color}15`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mx: "auto",
                          mb: 3,
                          color: menu.color,
                        }}
                      >
                        {menu.icon}
                      </Box>
                      <Typography
                        variant="h5"
                        sx={{ fontWeight: 700, color: "text.primary", mb: 0.5 }}
                      >
                        {menu.title}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: menu.color, fontWeight: 600, mb: 1 }}
                      >
                        {menu.subtitle}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {menu.description}
                      </Typography>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ textAlign: "center", mt: 5 }}>
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  component={Link}
                  to="/menu"
                  variant="outlined"
                  size="large"
                  endIcon={<FiChevronRight />}
                  sx={{
                    py: 1.5,
                    px: 4,
                  }}
                >
                  View Full Menu
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
          bgcolor: "background.default",
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            animate={deliveryInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <Box sx={{ textAlign: "center", mb: 6 }}>
              <motion.div variants={fadeInUp}>
                <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
                  <FaTruck size={50} style={{ color: "#8B2635" }} />
                </Box>
                <Typography variant="h3" sx={{ color: "text.primary", mb: 2 }}>
                  Order Online
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ maxWidth: 500, mx: "auto" }}
                >
                  Can't make it to us? No problem! Order your favorite dishes
                  through our delivery partners.
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
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        p: 4,
                        textDecoration: "none",
                        cursor: "pointer",
                        border: "2px solid transparent",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          borderColor: platform.color,
                          boxShadow: `0 10px 40px ${platform.color}30`,
                        },
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          color: platform.color,
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
          bgcolor: "background.paper",
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
                      color: "primary.main",
                      fontWeight: 600,
                      letterSpacing: 3,
                      mb: 2,
                      display: "block",
                    }}
                  >
                    FIND US
                  </Typography>
                  <Typography variant="h2" sx={{ mb: 3 }}>
                    Visit Us Today
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 4, lineHeight: 1.8 }}
                  >
                    Located in the heart of Oshawa, The Rolling Barrel is easily
                    accessible and offers ample parking. Come experience our
                    warm hospitality and delicious cuisine in person.
                  </Typography>
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 1,
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <FiMapPin size={20} /> Address
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {RESTAURANT_INFO.address.full}
                    </Typography>
                  </Box>
                  <Box sx={{ mb: 4 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 1,
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <FiPhone size={20} /> Phone
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
                      borderRadius: 1,
                      overflow: "hidden",
                      boxShadow: "0 20px 60px rgba(139, 38, 53, 0.2)",
                      height: { xs: 300, md: 400 },
                    }}
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2869.885!2d-78.8796!3d43.9254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s462+Taunton+Rd+W%2C+Oshawa%2C+ON+L1L+0W1%2C+Canada!5e0!3m2!1sen!2sca!4v1701500000000!5m2!1sen!2sca"
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

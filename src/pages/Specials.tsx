import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import { SEO, FloatingElements } from "@/components/common";
import Scene3D from "@/components/3d/Scene";
import {
  FaTag,
  FaDrumstickBite,
  FaFish,
  FaHamburger,
  FaCocktail,
  FaUtensils,
  FaPizzaSlice,
  FaFootballBall,
  FaBasketballBall,
  FaBaseballBall,
  FaHockeyPuck,
} from "react-icons/fa";
import { GiChickenLeg, GiSteak, GiTacos } from "react-icons/gi";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils";
import { useInView } from "@/hooks";

type SpecialItem = {
  name: string;
  price: string;
  icon: string;
  note?: string;
};

const weeklyIcons: Record<string, React.ReactNode> = {
  wings: <FaDrumstickBite size={32} />,
  chicken: <GiChickenLeg size={32} />,
  tacos: <GiTacos size={32} />,
  burger: <FaHamburger size={32} />,
  wraps: <FaUtensils size={32} />,
  fish: <FaFish size={32} />,
  steak: <GiSteak size={32} />,
  pasta: <FaPizzaSlice size={32} />,
  breakfast: <FaCocktail size={32} />,
};

const weeklySpecials: { day: string; items: SpecialItem[] }[] = [
  {
    day: "Monday",
    items: [
      { name: "Wings", price: "80¢", icon: "wings" },
      { name: "Chicken or Pork Souvlaki", price: "$18", icon: "chicken" },
    ],
  },
  {
    day: "Tuesday",
    items: [
      { name: "Tacos", price: "$4.50", icon: "tacos" },
      { name: "Tequila", price: "$4.50", icon: "tacos" },
    ],
  },
  {
    day: "Wednesday",
    items: [{ name: "Any Burger & Fries", price: "$10", icon: "burger" }],
  },
  {
    day: "Thursday",
    items: [{ name: "Wraps & Fries", price: "$12", icon: "wraps" }],
  },
  {
    day: "Friday",
    items: [
      { name: "2 Pc Fish & Chips", price: "$14", icon: "fish" },
      { name: "Rib & Wing Combo", price: "$18", icon: "wings" },
    ],
  },
  {
    day: "Saturday",
    items: [
      { name: "Steak & Wings", price: "$28", icon: "steak" },
      { name: "Steak & Lobster Tail", price: "$28", icon: "steak" },
    ],
  },
  {
    day: "Sunday",
    items: [
      {
        name: "Any Pasta",
        price: "$14",
        note: "(Excluding seafood pastas)",
        icon: "pasta",
      },
    ],
  },
];

const brunchSpecials = [
  { name: "Classic Breakfast", price: "$8" },
  { name: "Buttermilk Pancakes", price: "$8" },
  { name: "French Toast Stack", price: "$8" },
  { name: "French Toast Combo", price: "$8" },
];

const gameTimeSpecial = {
  title: "Game Time Specials",
  description: "30% off appetizers | 80¢ wings",
  teams: [
    { name: "Toronto Raptors", icon: <FaBasketballBall size={24} /> },
    { name: "Toronto Blue Jays", icon: <FaBaseballBall size={24} /> },
    { name: "NFL", icon: <FaFootballBall size={24} /> },
    { name: "Toronto Maple Leafs", icon: <FaHockeyPuck size={24} /> },
  ],
};

const Specials = () => {
  const { ref: specialsRef, isInView: specialsInView } = useInView();
  const { ref: brunchRef, isInView: brunchInView } = useInView();
  const { ref: gameRef, isInView: gameInView } = useInView();

  return (
    <>
      <SEO
        title="Specials"
        description="Discover our daily specials and weekly featured dishes. Amazing deals on authentic food at The Rolling Barrel."
      />
      <Box sx={{ overflowX: "hidden" }}>
        <Box
          sx={{
            py: { xs: 12, md: 20 },
            background: `
            radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 60%),
            linear-gradient(180deg, #0A0A0A 0%, #050505 100%)
          `,
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            minHeight: { xs: "auto", md: "60vh" },
            display: "flex",
            alignItems: "center",
          }}
        >
          <Scene3D variant="ambient" intensity={0.7} />
          <FloatingElements variant="light" density="dense" />
          <Container maxWidth="md">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <Chip
                  icon={<FaTag />}
                  label="Amazing Deals"
                  sx={{
                    mb: 3,
                    py: 2.5,
                    px: 2,
                    bgcolor: "#FFFFFF",
                    color: "#000000",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    "& .MuiChip-icon": { color: "#000000" },
                  }}
                />
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
                  Our Specials
                </Typography>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Typography
                  variant="h5"
                  sx={{
                    color: "text.secondary",
                    maxWidth: 600,
                    mx: "auto",
                    fontWeight: 400,
                    lineHeight: 1.6,
                  }}
                >
                  From weekly features to game-time offers and brunch delights
                </Typography>
              </motion.div>
            </motion.div>
          </Container>
        </Box>

        {/* Weekly Specials */}
        <Box
          ref={specialsRef}
          sx={{
            py: { xs: 8, md: 12 },
            bgcolor: "background.paper",
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.02) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.02) 0%, transparent 50%)",
              pointerEvents: "none",
            },
          }}
        >
          <Container maxWidth="lg">
            <motion.div
              initial="hidden"
              animate={specialsInView ? "visible" : "hidden"}
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
                    DAILY DEALS
                  </Typography>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <Typography variant="h2">
                    This Week's
                    <Box component="span" sx={{ color: "primary.main" }}>
                      {" "}
                      Specials
                    </Box>
                  </Typography>
                </motion.div>
              </Box>

              <Grid container spacing={3}>
                {weeklySpecials.map((special) => (
                  <Grid
                    size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                    key={special.day}
                  >
                    <motion.div
                      variants={staggerItem}
                      whileHover={{ y: -8, scale: 1.02 }}
                    >
                      <Card
                        sx={{
                          height: "100%",
                          p: 3,
                          position: "relative",
                          overflow: "hidden",
                          border: "2px solid rgba(255, 255, 255, 0.1)",
                          bgcolor: "rgba(15, 15, 15, 0.95)",
                          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            inset: 0,
                            borderRadius: "inherit",
                            background:
                              "linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, transparent 50%)",
                            opacity: 0,
                            transition: "opacity 0.4s ease",
                            pointerEvents: "none",
                          },
                          "&:hover": {
                            borderColor: "rgba(255, 255, 255, 0.3)",
                            boxShadow: "0 25px 70px rgba(0, 0, 0, 0.4)",
                          },
                          "&:hover::after": {
                            opacity: 1,
                          },
                        }}
                      >
                        <CardContent sx={{ p: 0 }}>
                          <Typography
                            variant="h5"
                            sx={{
                              fontWeight: 900,
                              mb: 3,
                              textAlign: "center",
                              color: "primary.main",
                              textTransform: "uppercase",
                              letterSpacing: "0.05em",
                            }}
                          >
                            {special.day}
                          </Typography>

                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              gap: 2,
                            }}
                          >
                            {special.items.map((item, itemIndex) => (
                              <Box
                                key={itemIndex}
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 2,
                                  p: 2,
                                  borderRadius: 4,
                                  bgcolor: "rgba(255, 255, 255, 0.03)",
                                  transition: "all 0.3s ease",
                                  "&:hover": {
                                    bgcolor: "rgba(255, 255, 255, 0.06)",
                                  },
                                }}
                              >
                                <Box
                                  sx={{
                                    color: "primary.main",
                                    flexShrink: 0,
                                  }}
                                >
                                  {weeklyIcons[item.icon]}
                                </Box>
                                <Box sx={{ flex: 1 }}>
                                  <Typography
                                    variant="body1"
                                    sx={{
                                      fontWeight: 700,
                                      color: "text.primary",
                                      fontSize: "0.95rem",
                                      mb: item.note ? 0.5 : 0,
                                    }}
                                  >
                                    {item.name}
                                  </Typography>
                                  {item.note && (
                                    <Typography
                                      variant="caption"
                                      sx={{
                                        color: "text.secondary",
                                        fontSize: "0.75rem",
                                      }}
                                    >
                                      {item.note}
                                    </Typography>
                                  )}
                                </Box>
                                <Typography
                                  variant="h6"
                                  sx={{
                                    fontWeight: 800,
                                    color: "#FFFFFF",
                                    fontSize: "1.1rem",
                                    flexShrink: 0,
                                  }}
                                >
                                  {item.price}
                                </Typography>
                              </Box>
                            ))}
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

        {/* Weekend Brunch */}
        <Box
          ref={brunchRef}
          sx={{
            py: { xs: 8, md: 12 },
            background: "linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%)",
            color: "white",
          }}
        >
          <Container maxWidth="lg">
            <motion.div
              initial="hidden"
              animate={brunchInView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <Box sx={{ textAlign: "center", mb: 6 }}>
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
                    SATURDAY & SUNDAY
                  </Typography>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <Typography variant="h2" sx={{ mb: 2 }}>
                    Weekend Brunch
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ color: "#CCCCCC", fontWeight: 400 }}
                  >
                    10:00 AM TO 1:00 PM
                  </Typography>
                </motion.div>
              </Box>

              <Grid container spacing={3} justifyContent="center">
                {brunchSpecials.map((item, index) => (
                  <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                    <motion.div
                      variants={staggerItem}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Box
                        sx={{
                          p: 4,
                          textAlign: "center",
                          borderRadius: 4,
                          bgcolor: "rgba(255, 255, 255, 0.05)",
                          backdropFilter: "blur(10px)",
                          transition: "all 0.3s ease",
                          border: "1px solid rgba(255, 255, 255, 0.08)",
                          height: "100%",
                          "&:hover": {
                            bgcolor: "rgba(255, 255, 255, 0.1)",
                            borderColor: "rgba(255, 255, 255, 0.2)",
                          },
                        }}
                      >
                        <Box sx={{ color: "#FFFFFF", mb: 2 }}>
                          {weeklyIcons.breakfast}
                        </Box>
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 700, mb: 1, color: "#FFFFFF" }}
                        >
                          {item.name}
                        </Typography>
                        <Typography
                          variant="h4"
                          sx={{ fontWeight: 800, color: "primary.main", mb: 1 }}
                        >
                          {item.price}
                        </Typography>
                        <Chip
                          label="Free for Kids"
                          size="small"
                          sx={{
                            bgcolor: "rgba(255, 255, 255, 0.15)",
                            color: "#FFFFFF",
                            fontWeight: 600,
                          }}
                        />
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>

              <motion.div variants={fadeInUp}>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: "center",
                    mt: 4,
                    color: "#CCCCCC",
                    fontStyle: "italic",
                  }}
                >
                  All classic breakfast items are served with home fries & fresh
                  fruit.
                </Typography>
              </motion.div>
            </motion.div>
          </Container>
        </Box>

        {/* Game Time */}
        <Box
          ref={gameRef}
          sx={{
            py: { xs: 10, md: 14 },
            bgcolor: "background.default",
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.02) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.02) 0%, transparent 50%)",
              pointerEvents: "none",
            },
          }}
        >
          <Container maxWidth="md">
            <motion.div
              initial="hidden"
              animate={gameInView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <Box sx={{ textAlign: "center" }}>
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
                    WATCH THE GAME
                  </Typography>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <Typography variant="h2" sx={{ mb: 3 }}>
                    {gameTimeSpecial.title}
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ mb: 5, color: "primary.main", fontWeight: 700 }}
                  >
                    {gameTimeSpecial.description}
                  </Typography>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Grid container spacing={2} justifyContent="center">
                    {gameTimeSpecial.teams.map((team, index) => (
                      <Grid size={{ xs: 6, sm: 3 }} key={index}>
                        <Box
                          sx={{
                            p: 3,
                            borderRadius: 4,
                            bgcolor: "rgba(255, 255, 255, 0.03)",
                            border: "1px solid rgba(255, 255, 255, 0.08)",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              bgcolor: "rgba(255, 255, 255, 0.06)",
                              borderColor: "rgba(255, 255, 255, 0.15)",
                            },
                          }}
                        >
                          <Box sx={{ color: "primary.main", mb: 2 }}>
                            {team.icon}
                          </Box>
                          <Typography
                            variant="body2"
                            sx={{
                              fontWeight: 700,
                              color: "text.primary",
                              fontSize: "0.85rem",
                            }}
                          >
                            {team.name}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </motion.div>
              </Box>
            </motion.div>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Specials;

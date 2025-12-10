import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { motion, MotionValue } from "framer-motion";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import { RESTAURANT_INFO } from "@/constants";
import Scene3D from "@/components/3d/Scene";
import AnimatedText from "@/components/ui/AnimatedText";

interface HeroSectionProps {
  heroY: MotionValue<number>;
  heroOpacity: MotionValue<number>;
}

const HeroSection = ({ heroY, heroOpacity }: HeroSectionProps) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        background: "transparent",
        overflow: "hidden",
      }}
    >
      {/* 3D Scene Background */}
      <Scene3D variant="hero" intensity={1} key="hero-scene" />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div style={{ opacity: heroOpacity, y: heroY }}>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 8 }}>
              <Box sx={{ mb: 4 }}>
                <AnimatedText
                  text="WELCOME TO"
                  variant="h6"
                  sx={{
                    color: "primary.main",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    mb: 2,
                    opacity: 0.8,
                  }}
                />
                <AnimatedText
                  text={RESTAURANT_INFO.name.toUpperCase()}
                  variant="h1"
                  sx={{
                    color: "text.primary",
                    mixBlendMode: "difference", // Lusion style contrast
                    mb: 2,
                  }}
                  delay={0.2}
                />
                <Typography
                  variant="h4"
                  component={motion.p}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  sx={{
                    color: "text.secondary",
                    maxWidth: 600,
                    fontWeight: 300,
                    mb: 6,
                  }}
                >
                  {RESTAURANT_INFO.tagline}
                </Typography>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                >
                  <Button
                    component={Link}
                    to="/menu"
                    variant="contained"
                    size="large"
                    endIcon={<FiChevronRight />}
                    sx={{
                      py: 2,
                      px: 5,
                      fontSize: "1rem",
                      letterSpacing: "0.1em",
                    }}
                  >
                    Discover Menu
                  </Button>
                </motion.div>
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default HeroSection;

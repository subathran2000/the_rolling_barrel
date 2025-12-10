import { Box, Container, Typography, Grid, Card, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCoffee, FaUtensils, FaStar } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  tiltHoverTransition,
} from "@/utils";
import type { ReactNode } from "react";

interface Menu {
  icon: ReactNode;
  title: string;
  subtitle: string;
  description: string;
  color: string;
}

const menus: Menu[] = [
  {
    icon: <FaCoffee size={36} />,
    title: "Breakfast",
    subtitle: "Rise & Shine",
    description: "Start your day with our stacked breakfasts",
    color: "#888888",
  },
  {
    icon: <FaUtensils size={36} />,
    title: "Lunch",
    subtitle: "The Lunch Barrel",
    description: "Perfect midday meals to keep you going",
    color: "#FFFFFF",
  },
  {
    icon: <FaStar size={36} />,
    title: "Dinner",
    subtitle: "Rolling Nights",
    description: "Sizzling dinners for memorable evenings",
    color: "#CCCCCC",
  },
];

const MenusSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: "background.paper",
        position: "relative",
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent)",
        },
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
            {menus.map((menu, index) => (
              <Grid size={{ xs: 12, sm: 4 }} key={index}>
                <motion.div
                  variants={staggerItem}
                  whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
                  transition={tiltHoverTransition}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Card
                    component={Link}
                    to="/menu"
                    sx={{
                      p: 4,
                      textAlign: "center",
                      textDecoration: "none",
                      height: "100%",
                      border: "1px solid",
                      borderColor: "rgba(255, 255, 255, 0.1)",
                      background:
                        "linear-gradient(140deg, rgba(20, 20, 20, 0.95), rgba(15, 15, 15, 0.9))",
                      backdropFilter: "blur(10px)",
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
                        background: `linear-gradient(90deg, transparent, ${menu.color}, transparent)`,
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                      },
                      "&:hover": {
                        borderColor: menu.color,
                        boxShadow: `0 20px 50px rgba(0, 0, 0, 0.5)`,
                        transform: "translateY(-4px)",
                      },
                      "&:hover::before": {
                        opacity: 1,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: "50%",
                        bgcolor: "rgba(255, 255, 255, 0.08)",
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
  );
};

export default MenusSection;

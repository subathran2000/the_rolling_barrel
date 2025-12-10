import { Box, Container, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaChild,
  FaConciergeBell,
  FaCalendarAlt,
  FaUtensils,
  FaStar,
} from "react-icons/fa";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  tiltHoverTransition,
} from "@/utils";
import type { ReactNode } from "react";

interface OfferItem {
  icon: ReactNode;
  label: string;
  link: string | null;
}

const offerItems: OfferItem[] = [
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
];

const WhatWeOfferSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
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
            {offerItems.map((item, index) => (
              <Grid size={{ xs: 6, sm: 4, md: 2.4 }} key={index}>
                <motion.div
                  variants={staggerItem}
                  whileHover={{ scale: 1.05, y: -5, rotateZ: -1 }}
                  transition={tiltHoverTransition}
                >
                  <Box
                    component={item.link ? Link : "div"}
                    {...(item.link ? { to: item.link } : {})}
                    sx={{
                      textAlign: "center",
                      p: 3,
                      borderRadius: 4,
                      bgcolor: "rgba(20, 20, 20, 0.9)",
                      border: "1px solid",
                      borderColor: "rgba(255, 255, 255, 0.1)",
                      backgroundImage:
                        "linear-gradient(150deg, rgba(25, 25, 25, 0.95), rgba(15, 15, 15, 0.9))",
                      backdropFilter: "blur(8px)",
                      height: "100%",
                      display: "block",
                      textDecoration: "none",
                      cursor: item.link ? "pointer" : "default",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      position: "relative",
                      overflow: "hidden",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: "-100%",
                        width: "100%",
                        height: "100%",
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                        transition: "left 0.6s ease",
                      },
                      "&:hover": {
                        borderColor: "rgba(255, 255, 255, 0.3)",
                        boxShadow: "0 12px 40px rgba(0, 0, 0, 0.4)",
                        transform: "translateY(-2px)",
                      },
                      "&:hover::before": {
                        left: "100%",
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
  );
};

export default WhatWeOfferSection;

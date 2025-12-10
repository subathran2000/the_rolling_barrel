import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";
import { FaUtensils, FaGamepad } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  tiltHoverTransition,
} from "@/utils";
import type { ReactNode, RefObject } from "react";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  featuresRef: RefObject<HTMLDivElement | null>;
  featuresInView: boolean;
}

const features: Feature[] = [
  {
    icon: <FaUtensils size={40} />,
    title: "Breakfast, Lunch & Dinner",
    description:
      "Fresh meals every day! From stacked breakfasts to sizzling dinners.",
  },
  {
    icon: <FiClock size={40} />,
    title: "Open 7 Days a Week",
    description: "Monday through Sunday. Sunday early hours starting at 9 AM!",
  },
  {
    icon: <FaGamepad size={40} />,
    title: "Game Nights",
    description: "Catch the action on our big screens. Join the fun!",
  },
];

const FeaturesSection = ({
  featuresRef,
  featuresInView,
}: FeaturesSectionProps) => {
  return (
    <Box
      ref={featuresRef}
      sx={{
        py: { xs: 10, md: 15 },
        bgcolor: "background.paper",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
        },
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
                <motion.div
                  variants={staggerItem}
                  whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
                  transition={tiltHoverTransition}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      textAlign: "center",
                      p: 4,
                      border: "1px solid",
                      borderColor: "rgba(255, 255, 255, 0.1)",
                      background:
                        "linear-gradient(150deg, rgba(20, 20, 20, 0.95), rgba(15, 15, 15, 0.9))",
                      backdropFilter: "blur(8px)",
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
                        bgcolor: "rgba(20, 20, 20, 0.95)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        zIndex: 1,
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        inset: 0,
                        borderRadius: "inherit",
                        background:
                          "linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, transparent 50%)",
                        opacity: 0,
                        transition: "opacity 0.4s ease",
                        pointerEvents: "none",
                      },
                      "&:hover::after": {
                        opacity: 1,
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
                        bgcolor: "#FFFFFF",
                        color: "#000000",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 2,
                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
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
  );
};

export default FeaturesSection;

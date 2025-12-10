import { Box, Container, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import { fadeInUp, staggerContainer } from "@/utils";
import type { RefObject } from "react";

interface SpecialsCTASectionProps {
  specialsRef: RefObject<HTMLDivElement | null>;
  specialsInView: boolean;
}

const SpecialsCTASection = ({
  specialsRef,
  specialsInView,
}: SpecialsCTASectionProps) => {
  return (
    <Box
      ref={specialsRef}
      sx={{
        py: { xs: 10, md: 15 },
        background: `
          linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%)
        `,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated shimmer overlay */}
      <Box
        component={motion.div}
        animate={{
          backgroundPosition: ["200% 0%", "-200% 0%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(120deg, transparent 30%, rgba(255, 255, 255, 0.05) 50%, transparent 70%)",
          backgroundSize: "200% 100%",
          pointerEvents: "none",
        }}
      />

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
      <Box
        component={motion.div}
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        sx={{
          position: "absolute",
          bottom: -150,
          left: -150,
          width: 400,
          height: 400,
          borderRadius: "50%",
          border: "1px dashed rgba(255, 255, 255, 0.1)",
        }}
      />
      <Box
        component={motion.div}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          top: "30%",
          left: "10%",
          width: 200,
          height: 200,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)",
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
                  color: "#888888",
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
                  fontSize: "1.1rem",
                  fontWeight: 700,
                }}
              >
                View Specials
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default SpecialsCTASection;

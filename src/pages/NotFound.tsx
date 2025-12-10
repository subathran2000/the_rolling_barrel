import { Box, Container, Typography, Button, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiHome, FiArrowLeft } from "react-icons/fi";
import { GiBarrel } from "react-icons/gi";
import { SEO } from "@/components/common";

const NotFound = () => {
  const theme = useTheme();

  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Return to The Rolling Barrel homepage to explore our menu and services."
      />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative background elements */}
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            left: "5%",
            opacity: 0.05,
            transform: "rotate(-15deg)",
          }}
        >
          <GiBarrel size={200} />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "10%",
            right: "5%",
            opacity: 0.05,
            transform: "rotate(15deg)",
          }}
        >
          <GiBarrel size={150} />
        </Box>

        <Container maxWidth="sm">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ textAlign: "center" }}>
              {/* 404 Number */}
              <Typography
                variant="h1"
                component="div"
                sx={{
                  fontSize: { xs: "8rem", md: "12rem" },
                  fontWeight: 800,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight: 1,
                  mb: 2,
                }}
              >
                404
              </Typography>

              {/* Title */}
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  color: "text.primary",
                }}
              >
                Page Not Found
              </Typography>

              {/* Description */}
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 4, maxWidth: 400, mx: "auto" }}
              >
                Oops! It seems this page has rolled away. Don't worry, our
                delicious menu is still waiting for you.
              </Typography>

              {/* Action Buttons */}
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
                    to="/"
                    variant="contained"
                    size="large"
                    startIcon={<FiHome />}
                    sx={{ py: 1.5, px: 4 }}
                  >
                    Go Home
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => window.history.back()}
                    variant="outlined"
                    size="large"
                    startIcon={<FiArrowLeft />}
                    sx={{ py: 1.5, px: 4 }}
                  >
                    Go Back
                  </Button>
                </motion.div>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </>
  );
};

export default NotFound;

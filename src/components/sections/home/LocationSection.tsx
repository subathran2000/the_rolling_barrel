import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone } from "react-icons/fi";
import { fadeInUp, staggerContainer } from "@/utils";
import { RESTAURANT_INFO } from "@/constants";
import { FloatingElements } from "@/components/common";

const LocationSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "background.paper",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(ellipse at 10% 90%, rgba(255, 255, 255, 0.03) 0%, transparent 50%),
            radial-gradient(ellipse at 90% 10%, rgba(255, 255, 255, 0.02) 0%, transparent 50%)
          `,
          pointerEvents: "none",
        },
      }}
    >
      <FloatingElements variant="light" density="sparse" />
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
                  accessible and offers ample parking. Come experience our warm
                  hospitality and delicious cuisine in person.
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
                    borderRadius: 4,
                    overflow: "hidden",
                    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",
                    height: { xs: 300, md: 400 },
                    position: "relative",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      inset: -1,
                      background:
                        "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
                      borderRadius: "inherit",
                      zIndex: -1,
                      filter: "blur(20px)",
                      opacity: 0.5,
                    },
                  }}
                >
                  <Box
                    component="iframe"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2869.885!2d-78.8796!3d43.9254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s462+Taunton+Rd+W%2C+Oshawa%2C+ON+L1L+0W1%2C+Canada!5e0!3m2!1sen!2sca!4v1701500000000!5m2!1sen!2sca"
                    title="Restaurant Location"
                    sx={{
                      width: "100%",
                      height: "100%",
                      border: 0,
                    }}
                    // @ts-ignore - MUI Box doesn't type iframe props
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default LocationSection;

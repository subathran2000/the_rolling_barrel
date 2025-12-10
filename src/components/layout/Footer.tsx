import {
  Box,
  Container,
  Typography,
  IconButton,
  Link as MuiLink,
  Grid,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { FiPhone, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
import { RESTAURANT_INFO, NAV_LINKS } from "@/constants";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils";

// TikTok icon removed - replaced with react-icons FaTiktok

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#0A0A0A",
        color: "#FFFFFF",
        pt: { xs: 6, md: 10 },
        pb: 4,
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
            "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent)",
        },
      }}
    >
      {/* Decorative elements */}
      <Box
        sx={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 300,
          height: 300,
          borderRadius: "50%",
          bgcolor: "rgba(255, 255, 255, 0.03)",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: -50,
          left: -50,
          width: 200,
          height: 200,
          borderRadius: "50%",
          bgcolor: "rgba(255, 255, 255, 0.03)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <Grid
            container
            spacing={6}
            justifyContent="center"
            textAlign="center"
          >
            {/* Brand Column */}
            <Grid size={{ xs: 12, md: 4 }}>
              <motion.div variants={staggerItem}>
                <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
                  <Box
                    component="img"
                    src="/the-rolling-barrel-logo.png"
                    alt="The Rolling Barrel"
                    sx={{
                      width: 80,
                      height: 80,
                      objectFit: "contain",
                    }}
                  />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    mb: 2,
                    background:
                      "linear-gradient(135deg, #FFFFFF 0%, #888888 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {RESTAURANT_INFO.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#FFFFFF",
                    opacity: 0.7,
                    maxWidth: 280,
                    mx: "auto",
                    lineHeight: 1.8,
                  }}
                >
                  {RESTAURANT_INFO.tagline}. Experience authentic flavors and
                  warm hospitality.
                </Typography>
              </motion.div>
            </Grid>

            {/* Quick Links */}
            <Grid size={{ xs: 12, sm: 6, md: 2 }}>
              <motion.div variants={staggerItem}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, mb: 3, color: "#FFFFFF" }}
                >
                  Quick Links
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.5,
                    alignItems: "center",
                  }}
                >
                  {NAV_LINKS.map((link) => (
                    <MuiLink
                      key={link.path}
                      component={Link}
                      to={link.path}
                      sx={{
                        color: "#FFFFFF",
                        opacity: 0.8,
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                        "&:hover": {
                          opacity: 1,
                          pl: 1,
                        },
                      }}
                    >
                      {link.label}
                    </MuiLink>
                  ))}
                </Box>
              </motion.div>
            </Grid>

            {/* Contact Info */}
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <motion.div variants={staggerItem}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, mb: 3, color: "#FFFFFF" }}
                >
                  Contact Us
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <FiPhone size={20} style={{ color: "#FFFFFF" }} />
                    <MuiLink
                      href={`tel:${RESTAURANT_INFO.phone}`}
                      sx={{
                        color: "#FFFFFF",
                        textDecoration: "none",
                        opacity: 0.8,
                        "&:hover": { opacity: 1 },
                      }}
                    >
                      {RESTAURANT_INFO.phoneFormatted}
                    </MuiLink>
                  </Box>
                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}
                  >
                    <FiMapPin
                      size={20}
                      style={{
                        color: "#FFFFFF",
                        marginTop: 3,
                      }}
                    />
                    <MuiLink
                      href={RESTAURANT_INFO.address.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: "#FFFFFF",
                        textDecoration: "none",
                        lineHeight: 1.6,
                        opacity: 0.8,
                        "&:hover": { opacity: 1 },
                      }}
                    >
                      {RESTAURANT_INFO.address.street}
                      <br />
                      {RESTAURANT_INFO.address.city},{" "}
                      {RESTAURANT_INFO.address.province}
                    </MuiLink>
                  </Box>
                </Box>
              </motion.div>
            </Grid>

            {/* Order Online */}
            <Grid size={{ xs: 12, md: 3 }}>
              <motion.div variants={staggerItem}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, mb: 3, color: "#FFFFFF" }}
                >
                  Delivery & Pickup
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.5,
                    alignItems: "center",
                  }}
                >
                  <MuiLink
                    href={RESTAURANT_INFO.delivery.uberEats}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "#FFFFFF",
                      opacity: 0.8,
                      textDecoration: "none",
                      "&:hover": { opacity: 1, color: "#FFFFFF" },
                    }}
                  >
                    Uber Eats
                  </MuiLink>
                  <MuiLink
                    href={RESTAURANT_INFO.delivery.doorDash}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "#FFFFFF",
                      opacity: 0.8,
                      textDecoration: "none",
                      "&:hover": { opacity: 1, color: "#FFFFFF" },
                    }}
                  >
                    DoorDash
                  </MuiLink>
                  <MuiLink
                    href={RESTAURANT_INFO.delivery.directOrder}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "#FFFFFF",
                      opacity: 0.8,
                      textDecoration: "none",
                      "&:hover": { opacity: 1, color: "#FFFFFF" },
                    }}
                  >
                    Direct Order
                  </MuiLink>
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          {/* Social Icons */}
          <motion.div variants={fadeInUp}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 2,
                mt: 6,
                mb: 4,
              }}
            >
              {[
                {
                  icon: <FaFacebook />,
                  href: RESTAURANT_INFO.social.facebook,
                  label: "Facebook",
                },
                {
                  icon: <FaInstagram />,
                  href: RESTAURANT_INFO.social.instagram,
                  label: "Instagram",
                },
                {
                  icon: <FaTiktok />,
                  href: RESTAURANT_INFO.social.tiktok,
                  label: "TikTok",
                },
              ].map((social) => (
                <motion.div
                  key={social.label}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconButton
                    component="a"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    sx={{
                      color: "#FFFFFF",
                      bgcolor: "rgba(255, 255, 255, 0.08)",
                      width: 48,
                      height: 48,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        bgcolor: "rgba(255, 255, 255, 0.2)",
                      },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                </motion.div>
              ))}
            </Box>
          </motion.div>

          <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.08)", my: 4 }} />

          {/* Copyright */}
          <motion.div variants={fadeInUp}>
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFFF", opacity: 0.6 }}
              >
                © {currentYear} {RESTAURANT_INFO.name}. All rights reserved.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#FFFFFF",
                  opacity: 0.5,
                  mt: 1,
                  fontSize: "0.875rem",
                }}
              >
                Website by{" "}
                <MuiLink
                  href="https://www.akvisionsystems.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "#FFFFFF",
                    textDecoration: "none",
                    fontWeight: 600,
                    opacity: 0.7,
                    "&:hover": {
                      opacity: 1,
                      textDecoration: "underline",
                    },
                  }}
                >
                  AK Vision Systems
                </MuiLink>
              </Typography>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;

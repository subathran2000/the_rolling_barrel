import { Box, Container, Typography, Grid, Card } from "@mui/material";
import { motion } from "framer-motion";
import { FaTruck } from "react-icons/fa";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils";
import { RESTAURANT_INFO } from "@/constants";
import type { RefObject } from "react";

interface DeliveryPlatform {
  name: string;
  url: string;
  color: string;
}

interface DeliverySectionProps {
  deliveryRef: RefObject<HTMLDivElement | null>;
  deliveryInView: boolean;
}

const DeliverySection = ({
  deliveryRef,
  deliveryInView,
}: DeliverySectionProps) => {
  const deliveryPlatforms: DeliveryPlatform[] = [
    {
      name: "Uber Eats",
      url: RESTAURANT_INFO.delivery.uberEats,
      color: "#FFFFFF",
    },
    {
      name: "DoorDash",
      url: RESTAURANT_INFO.delivery.doorDash,
      color: "#FFFFFF",
    },
    {
      name: "Direct Order",
      url: RESTAURANT_INFO.delivery.directOrder,
      color: "#FFFFFF",
    },
  ];

  return (
    <Box
      ref={deliveryRef}
      sx={{
        py: { xs: 10, md: 12 },
        bgcolor: "background.default",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
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
          animate={deliveryInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <motion.div variants={fadeInUp}>
              <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
                <FaTruck size={50} style={{ color: "#FFFFFF" }} />
              </Box>
              <Typography variant="h3" sx={{ color: "text.primary", mb: 2 }}>
                Delivery & Pickup
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ maxWidth: 500, mx: "auto" }}
              >
                Can't make it to us? No problem! Order your favorite dishes for
                delivery or pickup through our partners.
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
                      border: "2px solid rgba(255, 255, 255, 0.1)",
                      bgcolor: "rgba(20, 20, 20, 0.9)",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      position: "relative",
                      overflow: "hidden",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        inset: 0,
                        background: `radial-gradient(circle at center, rgba(255, 255, 255, 0.05) 0%, transparent 70%)`,
                        opacity: 0,
                        transition: "opacity 0.4s ease",
                      },
                      "&:hover": {
                        borderColor: platform.color,
                        boxShadow: `0 15px 50px rgba(0, 0, 0, 0.5)`,
                        transform: "translateY(-4px)",
                      },
                      "&:hover::before": {
                        opacity: 1,
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
  );
};

export default DeliverySection;

import { useParams } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Divider,
} from "@mui/material";
import { SEO, FloatingElements } from "@/components/common";
import Scene3D from "@/components/3d/Scene";
import { motion, AnimatePresence } from "framer-motion";
import { FaFire, FaLeaf } from "react-icons/fa";
import { fadeInUp } from "@/utils";
import { menuData } from "@/data";

// Intelligent price parser for multiple sizes/prices
interface PriceOption {
  size: string;
  price: string;
}

interface ParsedPriceResult {
  priceOptions: PriceOption[];
  shouldHideDescription: boolean;
}

const parsePrice = (
  priceString: string,
  description?: string
): ParsedPriceResult => {
  const priceString_clean = priceString.trim();
  let shouldHideDescription = false;

  // Check if it contains multiple options separated by '/'
  if (priceString_clean.includes("/")) {
    const parts = priceString_clean.split("/").map((p) => p.trim());

    // Try to extract sizes from description if it follows the pattern "size1 / size2"
    let sizes: string[] = [];
    if (description) {
      const descSizes = description.match(/(\d+\w+)\s*\/\s*(\d+\w+)/);
      if (descSizes) {
        sizes = [descSizes[1], descSizes[2]];
        shouldHideDescription = true; // Hide description since we're using it for sizes
      }
    }

    const priceOptions = parts.map((part, idx) => {
      // Match patterns like "6oz $7", "Small $9", "Pint (20oz) $6", "Bottle $30"
      const matchWithSize = part.match(/^([\w\s()]+?)\s+\$(\d+(?:\.\d+)?)$/);
      if (matchWithSize) {
        return {
          size: matchWithSize[1].trim(),
          price: `$${matchWithSize[2]}`,
        };
      }

      // Match just price like "$7" or "7"
      const matchPrice = part.match(/^\$?(\d+(?:\.\d+)?)$/);
      if (matchPrice) {
        // Use extracted sizes from description if available
        if (sizes[idx]) {
          return {
            size: sizes[idx],
            price: `$${matchPrice[1]}`,
          };
        }
        return { size: "", price: `$${matchPrice[1]}` };
      }

      // Fallback
      return { size: "", price: part.startsWith("$") ? part : `$${part}` };
    });

    return { priceOptions, shouldHideDescription };
  }

  // Check for parenthetical pricing like "$22 (single skewer $18)"
  const parentheticalMatch = priceString_clean.match(
    /\$(\d+(?:\.\d+)?)\s*\((.+?)\$(\d+(?:\.\d+)?)\)/
  );
  if (parentheticalMatch) {
    return {
      priceOptions: [
        { size: "Regular", price: `$${parentheticalMatch[1]}` },
        {
          size: parentheticalMatch[2].trim(),
          price: `$${parentheticalMatch[3]}`,
        },
      ],
      shouldHideDescription: false,
    };
  }

  // Single price
  return {
    priceOptions: [{ size: "", price: priceString_clean }],
    shouldHideDescription: false,
  };
};

const Menu = () => {
  const { category } = useParams();

  const currentCategory = category || "breakfast";
  const currentMenu = menuData[currentCategory] || menuData.breakfast;

  // Count total items

  return (
    <>
      <SEO
        title="Menu"
        description="Explore our authentic Sri Lankan menu featuring traditional dishes, hoppers, kottu, rice & curry, and more. Fresh ingredients and family recipes."
        keywords={[
          "Sri Lankan menu",
          "hoppers",
          "kottu",
          "rice and curry",
          "authentic food",
          "traditional dishes",
        ]}
      />
      <Box sx={{ overflowX: "hidden" }}>
        <Box
          sx={{
            py: { xs: 10, md: 14 },
            position: "relative",
            background: `
            radial-gradient(ellipse at 20% 30%, rgba(255, 255, 255, 0.03) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(255, 255, 255, 0.02) 0%, transparent 40%),
            linear-gradient(180deg, #0A0A0A 0%, #050505 100%)
          `,
            textAlign: "center",
            overflow: "hidden",
            minHeight: { xs: "auto", md: "50vh" },
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* 3D Background Scene */}
          <Scene3D variant="minimal" intensity={0.5} />
          <FloatingElements variant="light" density="normal" />
          <Container maxWidth="md">
            <motion.div initial="hidden" animate="visible">
              <motion.div variants={fadeInUp}>
                <Typography
                  variant="overline"
                  sx={{
                    color: "primary.main",
                    fontWeight: 600,
                    letterSpacing: 4,
                    mb: 2,
                    display: "block",
                  }}
                >
                  200+ DELICIOUS OPTIONS
                </Typography>
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
                  {currentMenu.title}
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
                  }}
                >
                  {currentMenu.description}
                </Typography>
              </motion.div>
            </motion.div>
          </Container>
        </Box>
        {/* Menu Content */}
        <Box sx={{ py: { xs: 4, md: 8 }, bgcolor: "background.default" }}>
          <Container maxWidth="lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Subcategories */}
                {currentMenu.subcategories.map((subcategory, subIndex) => (
                  <Box key={subcategory.name} sx={{ mb: 6 }}>
                    {/* Subcategory Header */}
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: subIndex * 0.1, duration: 0.4 }}
                    >
                      <Box sx={{ mb: 3, textAlign: "center" }}>
                        <Typography
                          variant="h4"
                          sx={{
                            fontWeight: 900,
                            color: "primary.main",
                            mb: 1,
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 2,
                          }}
                        >
                          {subcategory.name}
                        </Typography>
                        <Divider
                          sx={{
                            width: 80,
                            borderWidth: 2,
                            borderColor: "rgba(255, 255, 255, 0.3)",
                            borderRadius: 4,
                            mx: "auto",
                          }}
                        />
                      </Box>
                    </motion.div>

                    {/* Items Grid */}
                    <Grid container spacing={3} alignItems="flex-start">
                      {subcategory.items.map((item, itemIndex) => {
                        const { priceOptions, shouldHideDescription } =
                          parsePrice(item.price, item.description);
                        const hasMultiplePrices = priceOptions.length > 1;

                        return (
                          <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={item.id}>
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                delay: subIndex * 0.1 + itemIndex * 0.03,
                                duration: 0.4,
                              }}
                              whileHover={{ y: -6 }}
                              style={{ height: "auto" }}
                            >
                              <Card
                                sx={{
                                  height: "auto",
                                  position: "relative",
                                  overflow: "hidden",
                                  transition:
                                    "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                  background: "rgba(15, 15, 15, 0.95)",
                                  boxShadow: "0 2px 12px rgba(0, 0, 0, 0.3)",
                                  display: "flex",
                                  flexDirection: "column",
                                  borderRadius: 4,
                                  border: "1px solid rgba(255, 255, 255, 0.1)",
                                  "&::before": {
                                    content: '""',
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: "100%",
                                    background:
                                      "linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, transparent 100%)",
                                    opacity: 0,
                                    transition: "opacity 0.4s ease",
                                    pointerEvents: "none",
                                  },
                                  "&:hover": {
                                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
                                    border:
                                      "1px solid rgba(255, 255, 255, 0.2)",
                                    transform: "translateY(-2px)",
                                    "&::before": {
                                      opacity: 1,
                                    },
                                  },
                                }}
                              >
                                {item.isPopular && (
                                  <Chip
                                    label="Popular"
                                    size="small"
                                    sx={{
                                      position: "absolute",
                                      top: 12,
                                      right: 12,
                                      bgcolor: "#FFFFFF",
                                      color: "#000000",
                                      fontWeight: 700,
                                      fontSize: "0.7rem",
                                      height: 24,
                                      zIndex: 1,
                                    }}
                                  />
                                )}

                                <CardContent
                                  sx={{
                                    p: 2.5,
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 2,
                                  }}
                                >
                                  {/* Item Name and Single Price Row */}
                                  <Box
                                    sx={{
                                      display: "flex",
                                      justifyContent: "space-between",
                                      alignItems: "flex-start",
                                      gap: 2,
                                    }}
                                  >
                                    <Typography
                                      variant="h6"
                                      sx={{
                                        fontWeight: 780,
                                        lineHeight: 1.3,
                                        fontSize: "1.15rem",
                                        color: "#FFFFFF",
                                        flex: 1,
                                      }}
                                    >
                                      {item.name}
                                    </Typography>

                                    {/* Single Price - Right Side */}
                                    {!hasMultiplePrices && (
                                      <Box
                                        sx={{
                                          background:
                                            "linear-gradient(135deg, #FFFFFF 0%, #E0E0E0 100%)",
                                          color: "#000000",
                                          py: 0.5,
                                          px: 1.75,
                                          borderRadius: 4,
                                          boxShadow:
                                            "0 2px 8px rgba(0, 0, 0, 0.3)",
                                          flexShrink: 0,
                                        }}
                                      >
                                        <Typography
                                          variant="h6"
                                          sx={{
                                            fontWeight: 780,
                                            fontSize: "0.95rem",
                                            letterSpacing: "-0.01em",
                                            lineHeight: 1,
                                          }}
                                        >
                                          {priceOptions[0].price}
                                        </Typography>
                                      </Box>
                                    )}
                                  </Box>

                                  {/* Multiple Prices Display */}
                                  {hasMultiplePrices && (
                                    <Box
                                      sx={{
                                        background: "rgba(255, 255, 255, 0.05)",
                                        borderRadius: 4,
                                        overflow: "hidden",
                                        border:
                                          "1px solid rgba(255, 255, 255, 0.1)",
                                      }}
                                    >
                                      {priceOptions.map((option, idx) => (
                                        <Box
                                          key={idx}
                                          sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            py: 1.25,
                                            px: 2,
                                            borderBottom:
                                              idx < priceOptions.length - 1
                                                ? "1px solid rgba(255, 255, 255, 0.08)"
                                                : "none",
                                            transition: "all 0.2s ease",
                                            "&:hover": {
                                              background:
                                                "rgba(255, 255, 255, 0.08)",
                                            },
                                          }}
                                        >
                                          {option.size && (
                                            <Typography
                                              variant="body2"
                                              sx={{
                                                fontWeight: 600,
                                                color: "#888888",
                                                fontSize: "0.875rem",
                                              }}
                                            >
                                              {option.size}
                                            </Typography>
                                          )}
                                          <Typography
                                            variant="h6"
                                            sx={{
                                              fontWeight: 780,
                                              color: "#FFFFFF",
                                              fontSize: "1rem",
                                              ml: option.size ? 0 : "auto",
                                            }}
                                          >
                                            {option.price}
                                          </Typography>
                                        </Box>
                                      ))}
                                    </Box>
                                  )}
                                  {/* Description */}
                                  {item.description &&
                                    !shouldHideDescription && (
                                      <Typography
                                        variant="body2"
                                        sx={{
                                          color: "text.secondary",
                                          lineHeight: 1.65,
                                          fontSize: "0.875rem",
                                        }}
                                      >
                                        {item.description}
                                      </Typography>
                                    )}

                                  {/* Tags with Cool Styling */}
                                  {(item.isVegetarian || item.isSpicy) && (
                                    <Box
                                      sx={{
                                        display: "flex",
                                        gap: 1,
                                        flexWrap: "wrap",
                                        mt: 1,
                                      }}
                                    >
                                      {item.isVegetarian && (
                                        <Chip
                                          icon={<FaLeaf size={11} />}
                                          label="Vegetarian"
                                          size="small"
                                          sx={{
                                            background:
                                              "linear-gradient(135deg, rgba(76, 175, 80, 0.25) 0%, rgba(76, 175, 80, 0.15) 100%)",
                                            color: "#81C784",
                                            height: 28,
                                            fontSize: "0.72rem",
                                            fontWeight: 660,
                                            border:
                                              "1px solid rgba(76, 175, 80, 0.4)",
                                            backdropFilter: "blur(4px)",
                                            "& .MuiChip-icon": {
                                              color: "#66BB6A",
                                            },
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                              background:
                                                "linear-gradient(135deg, rgba(76, 175, 80, 0.35) 0%, rgba(76, 175, 80, 0.25) 100%)",
                                              border:
                                                "1px solid rgba(76, 175, 80, 0.6)",
                                              transform: "translateY(-1px)",
                                            },
                                          }}
                                        />
                                      )}
                                      {item.isSpicy && (
                                        <Chip
                                          icon={<FaFire size={11} />}
                                          label="Spicy"
                                          size="small"
                                          sx={{
                                            background:
                                              "linear-gradient(135deg, rgba(255, 87, 34, 0.25) 0%, rgba(255, 87, 34, 0.15) 100%)",
                                            color: "#FF8A65",
                                            height: 28,
                                            fontSize: "0.72rem",
                                            fontWeight: 660,
                                            border:
                                              "1px solid rgba(255, 87, 34, 0.4)",
                                            backdropFilter: "blur(4px)",
                                            "& .MuiChip-icon": {
                                              color: "#FF7043",
                                            },
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                              background:
                                                "linear-gradient(135deg, rgba(255, 87, 34, 0.35) 0%, rgba(255, 87, 34, 0.25) 100%)",
                                              border:
                                                "1px solid rgba(255, 87, 34, 0.6)",
                                              transform: "translateY(-1px)",
                                            },
                                          }}
                                        />
                                      )}
                                    </Box>
                                  )}
                                </CardContent>
                              </Card>
                            </motion.div>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Box>
                ))}
              </motion.div>
            </AnimatePresence>
          </Container>
        </Box>
        {/* Note Section */}
        <Box
          sx={{
            py: 4,
            bgcolor: "background.paper",
            textAlign: "center",
          }}
        ></Box>
      </Box>
    </>
  );
};

export default Menu;

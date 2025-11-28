import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  Typography,
  Collapse,
  Popper,
  Paper,
  Fade,
} from "@mui/material";
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { motion, LayoutGroup } from "framer-motion";
import { NAV_LINKS, MENU_CATEGORIES, RESTAURANT_INFO } from "@/constants";
import { useScrollPosition } from "@/hooks";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();
  const navigate = useNavigate();
  const { isScrolled } = useScrollPosition();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuExpanded, setMenuExpanded] = useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handleMenuClick = (path: string) => {
    navigate(path);
    setMenuAnchorEl(null);
    setDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const menuOpen = Boolean(menuAnchorEl);

  return (
    <>
      <AppBar
        position="fixed"
        component={motion.header}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        sx={{
          bgcolor: isScrolled ? "rgba(255, 249, 245, 0.95)" : "transparent",
          backdropFilter: isScrolled ? "blur(20px)" : "none",
          borderBottom: isScrolled
            ? "1px solid rgba(139, 38, 53, 0.1)"
            : "none",
          borderRadius: isScrolled ? "16px" : 0,
          boxShadow: isScrolled ? "0 4px 20px rgba(139, 38, 53, 0.1)" : "none",
          top: isScrolled ? 16 : 0,
          left: isScrolled ? 16 : 0,
          right: isScrolled ? 16 : 0,
          width: isScrolled ? "calc(100% - 32px)" : "100%",
          transition: "all 0.3s ease",
        }}
      >
        <Toolbar
          sx={{
            maxWidth: isScrolled ? 1400 : "100%",
            width: "100%",
            mx: "auto",
            px: { xs: 2, md: 4 },
            height: { xs: 70, md: 80 },
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src="/the-rolling-barrel.svg"
                alt="The Rolling Barrel"
                sx={{
                  width: { xs: 50, md: 55 },
                  height: { xs: 50, md: 55 },
                  objectFit: "contain",
                  WebkitTransform: "translateZ(0)",
                  transform: "translateZ(0)",
                  WebkitBackfaceVisibility: "hidden",
                  backfaceVisibility: "hidden",
                  willChange: "transform",
                }}
              />
            </motion.div>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  color: "primary.main",
                  lineHeight: 1.1,
                  fontSize: { xs: "1rem", md: "1.2rem" },
                }}
              >
                THE ROLLING
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  color: "secondary.dark",
                  lineHeight: 1.1,
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  letterSpacing: "0.1em",
                }}
              >
                BARREL
              </Typography>
            </Box>
          </Box>

          {/* Desktop Navigation */}
          {!isMobile && (
            <LayoutGroup>
              <Box
                component="nav"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { md: 1, lg: 2 },
                }}
              >
                {NAV_LINKS.map((link) => (
                  <Box
                    key={link.path}
                    onMouseEnter={
                      link.label === "Menu" ? handleMenuOpen : undefined
                    }
                    onMouseLeave={
                      link.label === "Menu" ? handleMenuClose : undefined
                    }
                    sx={{ position: "relative" }}
                  >
                    <Box
                      component={motion.div}
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Box
                        component={Link}
                        to={link.path}
                        onClick={() =>
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          px: { md: 1.5, lg: 2 },
                          py: 1,
                          textDecoration: "none",
                          color: isActive(link.path)
                            ? "primary.main"
                            : "text.primary",
                          fontWeight: isActive(link.path) ? 700 : 500,
                          fontSize: "0.95rem",
                          position: "relative",
                          transition: "color 0.3s ease",
                          "&:hover": {
                            color: "primary.main",
                          },
                        }}
                      >
                        {link.label}
                        {link.label === "Menu" && (
                          <FiChevronDown
                            style={{
                              fontSize: 18,
                              marginLeft: 6,
                              transition: "transform 0.3s ease",
                              transform: menuOpen
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
                            }}
                          />
                        )}
                        {/* Animated underline indicator */}
                        {isActive(link.path) && (
                          <motion.div
                            layoutId="nav-indicator"
                            style={{
                              position: "absolute",
                              bottom: 0,
                              left: "10%",
                              right: "10%",
                              height: 3,
                              backgroundColor: "#8B2635",
                              borderRadius: 4,
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 30,
                            }}
                          />
                        )}
                      </Box>
                    </Box>

                    {/* Menu Dropdown */}
                    {link.label === "Menu" && (
                      <Popper
                        open={menuOpen}
                        anchorEl={menuAnchorEl}
                        placement="bottom-start"
                        transition
                        sx={{ zIndex: 1200 }}
                        disablePortal={true}
                      >
                        {({ TransitionProps }) => (
                          <Fade {...TransitionProps} timeout={300}>
                            <Paper
                              sx={{
                                mt: 1,
                                borderRadius: 1,
                                overflow: "hidden",
                                boxShadow: "0 20px 60px rgba(139, 38, 53, 0.2)",
                                border: "1px solid rgba(139, 38, 53, 0.1)",
                                pointerEvents: "auto",
                              }}
                            >
                              <Box sx={{ p: 1, minWidth: 200 }}>
                                {MENU_CATEGORIES.map((category, index) => (
                                  <Box
                                    key={category.id}
                                    component={motion.div}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    onClick={() =>
                                      handleMenuClick(category.path)
                                    }
                                    sx={{
                                      px: 2.5,
                                      py: 1.5,
                                      cursor: "pointer",
                                      borderRadius: 2,
                                      display: "flex",
                                      alignItems: "center",
                                      gap: 1.5,
                                      transition: "all 0.2s ease",
                                      "&:hover": {
                                        bgcolor: "rgba(139, 38, 53, 0.08)",
                                        pl: 3,
                                      },
                                    }}
                                  >
                                    <Box
                                      sx={{
                                        width: 8,
                                        height: 8,
                                        borderRadius: "50%",
                                        bgcolor: "primary.main",
                                        opacity: 0.6,
                                      }}
                                    />
                                    <Typography
                                      sx={{
                                        fontWeight: 500,
                                        color: "text.primary",
                                      }}
                                    >
                                      {category.label}
                                    </Typography>
                                  </Box>
                                ))}
                              </Box>
                            </Paper>
                          </Fade>
                        )}
                      </Popper>
                    )}
                  </Box>
                ))}
              </Box>
            </LayoutGroup>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{
                color: "primary.main",
                bgcolor: "rgba(139, 38, 53, 0.08)",
                "&:hover": {
                  bgcolor: "rgba(139, 38, 53, 0.15)",
                },
              }}
            >
              <FiMenu size={20} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: "100%",
            maxWidth: 400,
            bgcolor: "background.default",
            p: 2,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box
              component="img"
              src="/the-rolling-barrel.svg"
              alt="The Rolling Barrel"
              sx={{ width: 45, height: 45 }}
            />
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, color: "primary.main" }}
            >
              {RESTAURANT_INFO.name}
            </Typography>
          </Box>
          <IconButton onClick={() => setDrawerOpen(false)}>
            <FiX size={20} />
          </IconButton>
        </Box>

        <List sx={{ flex: 1 }}>
          {NAV_LINKS.map((link, index) => (
            <Box key={link.path}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => {
                      if (link.label === "Menu") {
                        setMenuExpanded(!menuExpanded);
                      } else {
                        navigate(link.path);
                        setDrawerOpen(false);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                    sx={{
                      py: 2,
                      px: 3,
                      borderRadius: 2,
                      mb: 1,
                      bgcolor: isActive(link.path)
                        ? "rgba(139, 38, 53, 0.08)"
                        : "transparent",
                      "&:hover": {
                        bgcolor: "rgba(139, 38, 53, 0.08)",
                      },
                    }}
                  >
                    <ListItemText
                      primary={link.label}
                      primaryTypographyProps={{
                        fontWeight: isActive(link.path) ? 700 : 500,
                        fontSize: "1.1rem",
                        color: isActive(link.path)
                          ? "primary.main"
                          : "text.primary",
                      }}
                    />
                    {link.label === "Menu" &&
                      (menuExpanded ? <FiChevronUp /> : <FiChevronDown />)}
                  </ListItemButton>
                </ListItem>
              </motion.div>

              {/* Menu Subcategories */}
              {link.label === "Menu" && (
                <Collapse in={menuExpanded}>
                  <List disablePadding sx={{ pl: 3 }}>
                    {MENU_CATEGORIES.map((category) => (
                      <ListItem key={category.id} disablePadding>
                        <ListItemButton
                          onClick={() => handleMenuClick(category.path)}
                          sx={{
                            py: 1.5,
                            px: 3,
                            borderRadius: 2,
                            ml: 2,
                            borderLeft: "2px solid",
                            borderColor: "primary.main",
                          }}
                        >
                          <ListItemText
                            primary={category.label}
                            primaryTypographyProps={{
                              fontSize: "1rem",
                              color: "text.secondary",
                            }}
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </Box>
          ))}
        </List>

        {/* Mobile Contact Info */}
        <Box
          sx={{
            mt: "auto",
            pt: 3,
            borderTop: "1px solid rgba(139, 38, 53, 0.1)",
          }}
        >
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {RESTAURANT_INFO.phoneFormatted}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {RESTAURANT_INFO.address.full}
          </Typography>
        </Box>
      </Drawer>

      {/* Spacer for fixed header */}
      <Toolbar sx={{ height: { xs: 70, md: 80 } }} />
    </>
  );
};

export default Header;

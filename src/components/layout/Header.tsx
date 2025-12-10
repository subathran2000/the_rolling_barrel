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
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
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
          // Always floating glass-morphism header
          bgcolor: isScrolled
            ? "rgba(10, 10, 10, 0.85)"
            : "rgba(15, 15, 15, 0.6)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: { xs: "0 0 16px 16px", md: "16px" },
          boxShadow: isScrolled
            ? "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)"
            : "0 4px 24px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.03)",
          top: { xs: 0, md: 16 },
          left: { xs: 0, md: 24 },
          right: { xs: 0, md: 24 },
          width: { xs: "100%", md: "calc(100% - 48px)" },
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, transparent 50%)",
            pointerEvents: "none",
          },
        }}
      >
        <Toolbar
          sx={{
            maxWidth: 1400,
            width: "100%",
            mx: "auto",
            px: { xs: 2, md: 4 },
            height: { xs: 64, md: 72 },
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Box
            component={Link}
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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
                src="/the-rolling-barrel-logo.png"
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
              {/* Logo type using Science Gothic (extracted from logo file) */}
              <Typography
                variant="h6"
                sx={{
                  fontFamily: '"Science Gothic", sans-serif',
                  fontWeight: 900,
                  color: "primary.main",
                  lineHeight: 1.05,
                  fontSize: { xs: "0.95rem", md: "1.05rem" },
                  letterSpacing: "0.03em",
                  textTransform: "uppercase",
                }}
              >
                THE ROLLING
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: '"Science Gothic", sans-serif',
                  fontWeight: 900,
                  lineHeight: 1.05,
                  fontSize: { xs: "0.95rem", md: "1.05rem" },
                  letterSpacing: "0.12em",
                  background:
                    "linear-gradient(135deg, #FFFFFF 0%, #888888 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
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
                          fontWeight: isActive(link.path) ? 900 : 700,
                          fontSize: "0.85rem",
                          fontFamily: '"Science Gothic", sans-serif',
                          letterSpacing: "0.04em",
                          textTransform: "uppercase",
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
                              bottom: -6,
                              left: "12%",
                              right: "12%",
                              height: 2,
                              backgroundColor: "#FFFFFF",
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
                                borderRadius: 4,
                                overflow: "hidden",
                                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                bgcolor: "rgba(15, 15, 15, 0.98)",
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
                                      borderRadius: 4,
                                      display: "flex",
                                      alignItems: "center",
                                      gap: 1.5,
                                      transition: "all 0.2s ease",
                                      "&:hover": {
                                        bgcolor: "rgba(255, 255, 255, 0.08)",
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
                                        fontWeight: 700,
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
                bgcolor: "rgba(255, 255, 255, 0.08)",
                "&:hover": {
                  bgcolor: "rgba(255, 255, 255, 0.15)",
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
              src="/the-rolling-barrel-logo.png"
              alt="The Rolling Barrel"
              sx={{ width: 45, height: 45, objectFit: "contain" }}
            />
            <Typography
              variant="h6"
              sx={{
                fontFamily: '"Science Gothic", sans-serif',
                fontWeight: 900,
                color: "primary.main",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                background: "linear-gradient(135deg, #FFFFFF 0%, #888888 100%)",
              }}
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
                      borderRadius: 4,
                      mb: 1,
                      bgcolor: isActive(link.path)
                        ? "rgba(255, 255, 255, 0.08)"
                        : "transparent",
                      "&:hover": {
                        bgcolor: "rgba(255, 255, 255, 0.08)",
                      },
                    }}
                  >
                    <ListItemText
                      primary={link.label}
                      primaryTypographyProps={{
                        fontWeight: isActive(link.path) ? 900 : 700,
                        fontSize: "0.95rem",
                        color: isActive(link.path)
                          ? "primary.main"
                          : "text.primary",
                        fontFamily: '"Science Gothic", sans-serif',
                        letterSpacing: "0.03em",
                        textTransform: "uppercase",
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
                            borderRadius: 4,
                            ml: 2,
                            borderLeft: "2px solid",
                            borderColor: "primary.main",
                          }}
                        >
                          <ListItemText
                            primary={category.label}
                            primaryTypographyProps={{
                              fontSize: "0.95rem",
                              color: "text.secondary",
                              fontFamily: '"Science Gothic", sans-serif',
                              fontWeight: 700,
                              letterSpacing: "0.02em",
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
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {RESTAURANT_INFO.phoneFormatted}
          </Typography>
        </Box>
      </Drawer>
      <Toolbar sx={{ height: { xs: 70, md: 80 } }} />
    </>
  );
};

export default Header;

import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import {
  ThemeProvider,
  CssBaseline,
  CircularProgress,
  Box,
} from "@mui/material";
import { theme } from "@/theme";
import { Layout } from "@/components/layout";

// Import Home directly for immediate 3D scene loading
import Home from "@/pages/Home";

// Lazy load other pages for better performance
const About = lazy(() => import("@/pages/About"));
const Menu = lazy(() => import("@/pages/Menu"));
const Specials = lazy(() => import("@/pages/Specials"));
// const Stories = lazy(() => import("@/pages/Stories"));
const Contact = lazy(() => import("@/pages/Contact"));
const NotFound = lazy(() => import("@/pages/NotFound"));

// Loading fallback component
const PageLoader = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "50vh",
    }}
  >
    <CircularProgress color="primary" />
  </Box>
);

import { ScrollToTop } from "@/components/common";

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Router>
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="menu" element={<Menu />} />
                <Route path="menu/:category" element={<Menu />} />
                <Route path="specials" element={<Specials />} />
                {/* <Route path="stories" element={<Stories />} /> */}
                <Route path="contact" element={<Contact />} />
                {/* 404 Page for unknown routes */}
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;

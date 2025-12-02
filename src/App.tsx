import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ThemeProvider,
  CssBaseline,
  GlobalStyles,
  CircularProgress,
  Box,
} from "@mui/material";
import { theme, datePickerStyles } from "@/theme";
import { Layout } from "@/components/layout";

// Lazy load pages for better performance
const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Menu = lazy(() => import("@/pages/Menu"));
const Specials = lazy(() => import("@/pages/Specials"));
const Stories = lazy(() => import("@/pages/Stories"));
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={datePickerStyles} />
      <Router>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="menu" element={<Menu />} />
              <Route path="menu/:category" element={<Menu />} />
              <Route path="specials" element={<Specials />} />
              <Route path="stories" element={<Stories />} />
              <Route path="contact" element={<Contact />} />
              {/* 404 Page for unknown routes */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;

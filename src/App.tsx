import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, CssBaseline, GlobalStyles } from "@mui/material";
import { theme, datePickerStyles } from "@/theme";
import { Layout } from '@/components/layout';
import { Home, About, Menu, Specials, Stories, Contact } from '@/pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={datePickerStyles} />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="menu" element={<Menu />} />
            <Route path="menu/:category" element={<Menu />} />
            <Route path="specials" element={<Specials />} />
            <Route path="stories" element={<Stories />} />
            <Route path="contact" element={<Contact />} />
            {/* Redirect unknown routes to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

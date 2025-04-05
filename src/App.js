import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Software from './pages/Software';
import Hardware from './pages/Hardware';
import Philosophy from './pages/Philosophy';
import Contact from './pages/Contact';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(26, 27, 28)', 
      light: '#9575cd',
      dark: '#512da8',
    },
    secondary: {
      main: 'rgb(16, 17, 17)', 
      light: '#4dd0e1',
      dark: '#0097a7',
    },
    background: {
      default: 'rgb(26, 27, 28)',
      paper: 'rgb(16, 17, 17)',
    },
    text: {
      primary: 'rgb(237, 232, 140)',
      secondary: 'rgb(237, 232, 140)',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/software" element={<Software />} />
          <Route path="/hardware" element={<Hardware />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

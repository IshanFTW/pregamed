import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './theme';
import NavBar from './components/layout/NavBar';
import MobileNav from './components/layout/MobileNav';
import HomePage from './components/pages/HomePage';
import BookingPage from './components/pages/BookingPage';
import DashboardPage from './components/pages/DashboardPage';
import ServicesPage from './components/pages/ServicesPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/book" element={<BookingPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
        </main>
        <MobileNav />
      </Router>
    </ThemeProvider>
  );
}

export default App;
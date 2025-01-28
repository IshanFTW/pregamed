import { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Home, CalendarToday, Dashboard } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function MobileNav() {
  const [value, setValue] = useState(0);
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
      showLabels
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
    >
      <BottomNavigationAction label="Home" icon={<Home />} component={Link} to="/" />
      <BottomNavigationAction label="Book" icon={<CalendarToday />} component={Link} to="/book" />
      <BottomNavigationAction label="Dashboard" icon={<Dashboard />} component={Link} to="/dashboard" />
    </BottomNavigation>
  );
}
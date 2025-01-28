import { Container, Typography } from '@mui/material';
import UpcomingAppointments from '../features/UpcomingAppointments';
import VaccinationSchedule from '../features/VaccinationSchedule';
import PregnancyProgress from '../features/PregnancyProgress';
import QuickActions from '../features/QuickActions';
import Grid from '@mui/material/Grid2';

export default function DashboardPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom>Your Dashboard</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <UpcomingAppointments />
          <VaccinationSchedule />
        </Grid>
        <Grid item xs={12} md={4}>
          <PregnancyProgress />
          <QuickActions />
        </Grid>
      </Grid>
    </Container>
  );
}
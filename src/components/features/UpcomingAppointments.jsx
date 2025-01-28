import { Card, CardContent, Typography } from '@mui/material';

export default function UpcomingAppointments() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>Upcoming Appointments</Typography>
        {/* Add appointments list here */}
      </CardContent>
    </Card>
  );
}
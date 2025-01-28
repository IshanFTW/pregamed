import { Card, CardContent, Typography } from '@mui/material';

export default function VaccinationSchedule() {
  return (
    <Card sx={{ mt: 4 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>Vaccination Schedule</Typography>
        {/* Add vaccination timeline component here */}
      </CardContent>
    </Card>
  );
}
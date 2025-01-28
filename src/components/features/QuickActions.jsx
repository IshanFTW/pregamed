import { Card, CardContent, Typography, Button } from '@mui/material';

export default function QuickActions() {
  return (
    <Card sx={{ mt: 4 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>Quick Actions</Typography>
        <Button variant="contained" fullWidth sx={{ mb: 2 }}>
          Download Medical Records
        </Button>
        <Button variant="outlined" fullWidth sx={{ mb: 2 }}>
          Contact Support
        </Button>
      </CardContent>
    </Card>
  );
}
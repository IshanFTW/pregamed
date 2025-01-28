
import { Card, CardContent, Avatar, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { CalendarToday, VideoLibrary, FitnessCenter, Vaccines } from '@mui/icons-material';

export default function FeaturesGrid() {
  const features = [
    { icon: <CalendarToday />, title: "Smart Scheduling", text: "AI-powered appointment recommendations" },
    { icon: <VideoLibrary />, title: "Virtual Consultations", text: "HD video calls with specialists" },
    { icon: <FitnessCenter />, title: "Personalized Workouts", text: "Daily exercise plans by trimester" },
    { icon: <Vaccines />, title: "Vaccination Tracker", text: "Automated reminders & scheduling" },
  ];

  return (
    <Grid container spacing={4} sx={{ my: 4 }}>
      {features.map((feature, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card elevation={4}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Avatar sx={{ bgcolor: 'primary.main', mb: 2, mx: 'auto' }}>
                {feature.icon}
              </Avatar>
              <Typography variant="h6" gutterBottom>{feature.title}</Typography>
              <Typography>{feature.text}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
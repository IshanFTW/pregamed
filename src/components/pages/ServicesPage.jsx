import { Container, Typography, Card, CardContent, Avatar, Paper } from '@mui/material';
import { Person, Restaurant, FitnessCenter, Vaccines } from '@mui/icons-material';
import Grid from '@mui/material/Grid2';

export default function ServicesPage() {
  const services = [
    {
      title: "Prenatal Checkups",
      icon: <Person fontSize="large" />,
      description: "Regular health monitoring for mother and baby"
    },
    {
      title: "Nutrition Planning",
      icon: <Restaurant fontSize="large" />,
      description: "Personalized diet plans for each trimester"
    },
    {
      title: "Pregnancy Fitness",
      icon: <FitnessCenter fontSize="large" />,
      description: "Safe exercise routines with certified trainers"
    },
    {
      title: "Vaccinations",
      icon: <Vaccines fontSize="large" />,
      description: "Newborn immunization scheduling & tracking"
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom>Our Services</Typography>
      
      <Grid container spacing={4} sx={{ mb: 4 }}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: '100%', textAlign: 'center' }}>
              <CardContent>
                <Avatar sx={{ 
                  bgcolor: 'primary.main', 
                  mb: 2,
                  mx: 'auto',
                  width: 56, 
                  height: 56
                }}>
                  {service.icon}
                </Avatar>
                <Typography variant="h6" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
        Specialized Care
      </Typography>
      
      <Grid container spacing={4}>
        <Grid item md={6}>
          <Paper sx={{ 
            p: 3, 
            bgcolor: 'secondary.light',
            minHeight: 150,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <Typography variant="h6" gutterBottom>
              24/7 Support
            </Typography>
            <Typography variant="body1">
              Access to emergency consultation and support team anytime
            </Typography>
          </Paper>
        </Grid>
        <Grid item md={6}>
          <Paper sx={{ 
            p: 3, 
            bgcolor: 'primary.light',
            minHeight: 150,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <Typography variant="h6" gutterBottom>
              Postnatal Care
            </Typography>
            <Typography variant="body1">
              Comprehensive care packages for after delivery
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
import { useState } from 'react';
import { 
  Paper, 
  Typography,  
  Button, 
  Card, 
  CardContent, 
  CardActionArea, 
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { CheckCircle, Schedule, MedicalServices, Person } from '@mui/icons-material';

// eslint-disable-next-line react/prop-types
export default function BookingForm({ activeStep, setActiveStep }) {
  const [selectedService, setSelectedService] = useState('');
  const [selectedProfessional, setSelectedProfessional] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');

  const services = [
    { id: 1, name: 'Prenatal Checkup', duration: '30 mins', icon: <MedicalServices /> },
    { id: 2, name: 'Ultrasound Scan', duration: '45 mins', icon: <MedicalServices /> },
    { id: 3, name: 'Nutrition Consultation', duration: '60 mins', icon: <MedicalServices /> },
    { id: 4, name: 'Childbirth Class', duration: '90 mins', icon: <MedicalServices /> },
  ];

  const professionals = [
    { id: 1, name: 'Dr. Sarah Johnson', specialty: 'Obstetrician', experience: '12 years', rating: '4.9' },
    { id: 2, name: 'Dr. Michael Chen', specialty: 'Ultrasound Specialist', experience: '8 years', rating: '4.8' },
    { id: 3, name: 'Emma Wilson', specialty: 'Nutritionist', experience: '10 years', rating: '4.7' },
  ];

  const timeSlots = [
    '2023-12-20 09:00 AM',
    '2023-12-20 10:30 AM',
    '2023-12-20 02:00 PM',
    '2023-12-21 11:00 AM',
    '2023-12-21 03:30 PM',
  ];

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={3} sx={{ mt: 2 }}>
            {services.map((service) => (
              <Grid item xs={12} sm={6} key={service.id}>
                <Card 
                  elevation={selectedService === service.name ? 4 : 1}
                  sx={{ 
                    border: selectedService === service.name ? '2px solid' : 'none',
                    borderColor: 'primary.main'
                  }}
                >
                  <CardActionArea onClick={() => setSelectedService(service.name)}>
                    <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                        {service.icon}
                      </Avatar>
                      <div>
                        <Typography variant="h6">{service.name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          Duration: {service.duration}
                        </Typography>
                      </div>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        );
      case 1:
        return (
          <List sx={{ mt: 2 }}>
            {professionals.map((pro) => (
              <Card 
                key={pro.id} 
                sx={{ 
                  mb: 2,
                  border: selectedProfessional?.id === pro.id ? '2px solid' : 'none',
                  borderColor: 'primary.main'
                }}
              >
                <ListItem 
                  button 
                  onClick={() => setSelectedProfessional(pro)}
                >
                  <ListItemAvatar>
                    <Avatar>
                      <Person />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={pro.name}
                    secondary={
                      <>
                        <Typography variant="body2">{pro.specialty}</Typography>
                        <Typography variant="caption">
                          {pro.experience} experience • ⭐ {pro.rating}
                        </Typography>
                      </>
                    }
                  />
                </ListItem>
              </Card>
            ))}
          </List>
        );
      case 2:
        return (
          <Grid container spacing={2} sx={{ mt: 2 }}>
            {timeSlots.map((time) => (
              <Grid item xs={6} sm={4} key={time}>
                <Button
                  fullWidth
                  variant={selectedTime === time ? 'contained' : 'outlined'}
                  onClick={() => setSelectedTime(time)}
                  startIcon={<Schedule />}
                >
                  {new Date(time).toLocaleDateString('en-US', {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric'
                  })}
                  <br />
                  {new Date(time).toLocaleTimeString('en-US', {
                    hour: 'numeric',
                    minute: '2-digit'
                  })}
                </Button>
              </Grid>
            ))}
          </Grid>
        );
      case 3:
        return (
          <Paper sx={{ p: 3, mt: 2 }}>
            <Typography variant="h6" gutterBottom>Appointment Summary</Typography>
            <Divider sx={{ mb: 2 }} />
            
            <List>
              <ListItem>
                <ListItemText
                  primary="Service"
                  secondary={selectedService}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Professional"
                  secondary={selectedProfessional?.name}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Date & Time"
                  secondary={new Date(selectedTime).toLocaleString()}
                />
              </ListItem>
            </List>
            
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              <CheckCircle color="success" sx={{ verticalAlign: 'middle', mr: 1 }} />
              You`&apos;`ll receive a confirmation email with appointment details
            </Typography>
          </Paper>
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <Paper sx={{ p: 4, mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Book {['Service', 'Professional', 'Time', 'Confirmation'][activeStep]}
      </Typography>
      
      {getStepContent(activeStep)}

      <Grid container justifyContent="space-between" sx={{ mt: 4 }}>
        <Grid item>
          {activeStep !== 0 && (
            <Button onClick={handleBack} variant="outlined">
              Back
            </Button>
          )}
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            onClick={activeStep === 3 ? () => alert('Appointment booked!') : handleNext}
            disabled={
              (activeStep === 0 && !selectedService) ||
              (activeStep === 1 && !selectedProfessional) ||
              (activeStep === 2 && !selectedTime)
            }
          >
            {activeStep === 3 ? 'Confirm Booking' : 'Next'}
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
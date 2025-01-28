import { useState } from 'react';
import { Container, Stepper, Step, StepLabel, } from '@mui/material';
import BookingForm from '../features/BookingForm';

export default function BookingPage() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Select Service', 'Choose Professional', 'Pick Time', 'Confirm'];

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <BookingForm activeStep={activeStep} setActiveStep={setActiveStep} />
    </Container>
  );
}
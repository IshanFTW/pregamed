import { Container } from '@mui/material';
import HeroSection from '../features/HeroSection';
import FeaturesGrid from '../features/FeaturesGrid';
import PregnancyTimeline from '../features/PregnancyTimeline';

export default function HomePage() {
  return (
    <Container maxWidth="xl">
      <HeroSection />
      <FeaturesGrid />
      <PregnancyTimeline />
    </Container>
  );
}
'use client';
import { Stack } from '@chakra-ui/react';

// Pages
import { HomePage } from '@/ui';

// Component
import { Footer, Header } from '@/layouts';

const LandingPage = () => (
  <Stack>
    <Header />
    <HomePage />
    <Footer />
  </Stack>
);

export default LandingPage;

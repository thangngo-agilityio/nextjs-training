'use client';
import { Stack } from '@chakra-ui/react';

// Section
import Header from '@/layouts/Header';
import { HomePage } from '@/ui';

const LandingPage = () => (
  <Stack>
    <Header />
    <HomePage />
  </Stack>
);

export default LandingPage;

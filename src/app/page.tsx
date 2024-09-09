import { Stack } from '@chakra-ui/react';

// Section
import SectionOverview from '@/ui/section/Overview';
import Header from '@/layouts/Header';

const Homepage = () => (
  <Stack>
    <Header />
    <SectionOverview />
  </Stack>
);

export default Homepage;

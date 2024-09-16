import { Stack } from '@chakra-ui/react';

// Components
import { OverviewSection, TrendingSection } from '@/ui/section';

const HomePage = () => (
  <Stack>
    <OverviewSection />
    <TrendingSection />
  </Stack>
);

export default HomePage;

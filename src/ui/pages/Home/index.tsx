import { Stack } from '@chakra-ui/react';

// Components
import {
  OverviewSection,
  ShowroomSection,
  TrendingSection,
} from '@/ui/section';

const HomePage = () => (
  <Stack>
    <OverviewSection />
    <TrendingSection />
    <ShowroomSection />
  </Stack>
);

export default HomePage;

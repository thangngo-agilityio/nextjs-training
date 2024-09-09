// Constants
import { ROUTER } from '@/constants/router';
import { Heading, Text } from '@chakra-ui/react';

// Components
import Link from 'next/link';

const NotFound = () => (
  <main className="flex h-full flex-col items-center justify-center gap-2">
    <Heading className="text-xl font-semibold">404 Not Found</Heading>
    <Text>Could not find page.</Text>
    <Link
      href={ROUTER.HOME}
      className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
    >
      Go Back
    </Link>
  </main>
);

export default NotFound;

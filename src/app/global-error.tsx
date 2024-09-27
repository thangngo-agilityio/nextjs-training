'use client';

import { Button, Heading } from '@chakra-ui/react';

// Types
import { PageErrorProps } from '@/types';

// Components
import Header from '@/layouts/Header';

export default function GlobalError({
  // error,
  reset,
}: PageErrorProps) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Heading as="h2">Something went wrong!</Heading>
        <Button variant="error" onClick={() => reset()}>
          Try again
        </Button>
      </body>
    </html>
  );
}

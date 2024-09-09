'use client';

import { Button, Heading } from '@chakra-ui/react';

// Types
import { PageErrorProps } from '@/types/components';

export default function GlobalError({
  // error,
  reset,
}: PageErrorProps) {
  return (
    <html lang="en">
      <body>
        <Heading as="h2">Something went wrong!</Heading>
        <Button variant="error" onClick={() => reset()}>
          Try again
        </Button>
      </body>
    </html>
  );
}

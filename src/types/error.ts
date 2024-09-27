export type PageErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

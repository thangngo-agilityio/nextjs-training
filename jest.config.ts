/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const config: Config = {
  clearMocks: true,
  collectCoverage: true,

  coverageDirectory: 'coverage',

  coverageProvider: 'v8',
  testEnvironment: 'jsdom',

  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  roots: ['<rootDir>/src'],

  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/*.stories.tsx',
    '!src/assets/**',
    '!src/themes/**',
    '!src/types/**',
    '!src/mock/**',
    '!src/constants/**',
    '!src/configs/**',
    '!src/components/index.ts',
    '!src/utils/index.ts',
    '!src/stores/index.ts',
    '!src/services/index.ts',
    '!src/hooks/index.ts',
    '!src/providers/index.ts',
    '!src/apis/index.ts',
    '!src/actions/index.ts',
    '!src/ui/index.ts',
    '!src/app/robots.ts',
    '!src/app/sitemap.ts',
    '!src/middleware.ts',
    '!__test__/mocks/**',
    '!src/app/api/**',
  ],

  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '^@/assets(.*)$': '<rootDir>src/assets/$1',
    '^@/components(.*)$': '<rootDir>src/components/$1',
    '^@/service(.*)$': '<rootDir>src/service/$1',
    '^@/pages(.*)$': '<rootDir>src/pages/$1',
    '^@/hooks(.*)$': '<rootDir>src/hooks/$1',
    '^@/constants(.*)$': '<rootDir>src/constants/$1',
    '^@/utils(.*)$': '<rootDir>src/utils/$1',
    '^@/mock(.*)$': '<rootDir>src/mock/$1',
    '^@/stores(.*)$': '<rootDir>src/stores/$1',
    '^@/icons(.*)$': '<rootDir>src/icons/$1',
    '^@/themes(.*)$': '<rootDir>src/themes/$1',
    '^@/providers(.*)$': '<rootDir>src/providers/$1',
    '^@/routes(.*)$': '<rootDir>src/routes/$1',
    '^@/configs(.*)$': '<rootDir>src/configs/$1',
    '^@/apis(.*)$': '<rootDir>src/apis/$1',
    '^@/ui(.*)$': '<rootDir>src/ui/$1',
  },

  coveragePathIgnorePatterns: [
    '<rootDir>/src/themes/',
    '<rootDir>/src/icons/',
    '<rootDir>/src/constants/',
    '<rootDir>/src/types/',
    '<rootDir>/src/mock/',
    '<rootDir>/src/providers/',
    '<rootDir>/src/utils/',
    '<rootDir>/src/pages/index.ts',
    '<rootDir>/src/layouts/index.ts',
    '<rootDir>/src/components/index.ts',
    '<rootDir>/src/components/Form/index.ts',
    '<rootDir>/src/components/Skeleton/index.ts',
    '<rootDir>/src/hooks/index.ts',
    '<rootDir>/src/components/Form/index.ts',
    '<rootDir>/src/layouts/index.ts',
    '<rootDir>/src/service/index.ts',
    '<rootDir>/src/ui/',
    '<rootDir>/src/app/',
    '<rootDir>/src/layouts/',
  ],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = async () => ({
  ...(await createJestConfig(config)()),
  transformIgnorePatterns: ['/node_modules/(?!(firebase|@firebase)/)'],
});

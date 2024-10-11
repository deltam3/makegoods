/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest", // Transform TypeScript files
  },
  moduleNameMapper: {
    // Add any path aliases if you're using them in your project
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  // other configurations
};

export default config;

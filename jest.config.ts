import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  verbose: true,
  testEnvironment: "jsdom",
  automock: true,
  preset: "ts-jest",
  setupFilesAfterEnv: ["./__tests__/setupTests.ts"],
};

export default config;

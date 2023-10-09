import type { Config } from "jest";
import type { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
  verbose: true,
  clearMocks: true, // Automatically clear mock calls and instances between every test
  collectCoverage: true, // Indicates which folders/files to cover
  coverageDirectory: "coverage", // The directory where Jest should output its coverage files
  coverageProvider: "v8", // Indicates which provider should be used to instrument code for coverage
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"], // An array of file extensions your modules use
  preset: "ts-jest",
  testEnvironment: "node", // The test environment that will be used for testing

  roots: ["<rootDir>"], // The root directory that Jest should scan for tests and modules within

  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ], // The glob patterns Jest uses to detect test files

  extensionsToTreatAsEsm: [".ts"], // Important to active module as ECMAScript Modules -> https://jestjs.io/es-ES/docs/configuration#extensionstotreatasesm-arraystring
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  transform: {
    // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
    // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },
};

export default config;

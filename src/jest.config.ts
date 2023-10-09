import type { Config } from "jest";

const config: Config = {
  verbose: true,
  clearMocks: true, // Automatically clear mock calls and instances between every test
  collectCoverage: true, // Indicates which folders/files to cover
  coverageDirectory: "coverage", // The directory where Jest should output its coverage files
  coverageProvider: "v8", // Indicates which provider should be used to instrument code for coverage
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"], // An array of file extensions your modules use

  roots: ["<rootDir>/src"], // The root directory that Jest should scan for tests and modules within

  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ], // The glob patterns Jest uses to detect test files
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // Use ts-jest for ts/tsx files
  },

  extensionsToTreatAsEsm: [".ts"], // Important to active module as ECMAScript Modules -> https://jestjs.io/es-ES/docs/configuration#extensionstotreatasesm-arraystring

  // Import statements in ESM are live bindings, so we need to tell Jest to hoist the exports
  // https://jestjs.io/docs/ecmascript-modules#hoisting
};

export default config;

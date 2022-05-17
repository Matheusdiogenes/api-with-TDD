export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageProvider: "v8",
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).ts"
  ],
  
  testPathIgnorePatterns: [
    "/node_modules/"
  ],
};

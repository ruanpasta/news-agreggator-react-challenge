
export default {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./setup-tests.js"],
  setupFiles: ["./jest.polyfills.js"],
  testEnvironmentOptions: {
    customExportConditions: [""],
  },
};

module.exports = {
  testEnvironment: "jsdom",
  
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/__mocks__/styleMock.js"
  },
  
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"]
};
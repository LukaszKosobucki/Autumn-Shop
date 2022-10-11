module.exports = {
  testEnvironment: "jsdom",
  preset: "ts-jest",
  collectCoverage: true,
  clearMocks: true,
  coverageDirectory: "coverage",
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.css$": "jest-transform-scss",
    "^.+\\.scss$": "jest-transform-scss",
  },
  moduleNameMapper: {
    "\\.(s?css|less)$": "identity-obj-proxy",
  },
};

module.exports = {
  preset: "jest-preset-angular",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/Jest/setupJest.ts"],
  moduleNameMapper: {
    "^lodash-es$": "lodash",
  },
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.spec.json",
      diagnostics: true,
      stringifyContentPathRegex: "\\.html$",
      astTransformers: [
        require.resolve("jest-preset-angular/InlineHtmlStripStylesTransformer"),
      ],
    },
  },
  testMatch: ["<rootDir>/**/**/*.spec.ts"],
  collectCoverage: false,
  collectCoverageFrom: [
    "**/src/**/*.ts",
    "!**/node_modules/**",
    "!**/src/**/*.module.ts",
    "!test/**",
    "!**/polyfills.ts",
    "!**/environments/**",
    "!**/src/setupJest.ts",
  ],
};

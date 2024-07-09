
// export default {
//   preset: 'ts-jest',
//   testEnvironment: 'jest-environment-jsdom',
//   transform: {
//       "^.+\\.tsx?$": "ts-jest" 
//   // process `*.tsx` files with `ts-jest`
//   },
//   moduleNameMapper: {
//       '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__ mocks __/fileMock.js',
//   },
// }


export default {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: ['**/__tests__/**/*.(ts|tsx)', '**/?(*.)+(spec|test).(ts|tsx)'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};
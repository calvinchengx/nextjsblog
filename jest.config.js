// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/__setup__/jest.setup.js'],
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$',
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  transform: {
    '^.+\\.js$': 'babel-jest', // anything .js is babel'd for jest to consume
    '^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub' // anything style related is ignored and mapped to jest-transform-stub module
  },
  moduleNameMapper: {
    '\\.css$': '<rootDir>/__setup__/empty-module.js', // <-- had to pop this in the following day to get any separately imported .css files mapped to an empty module / object. So if i try to do import 'react-style-module/styles/my-styles.css' it would fail, though 'import './styles.css' worked. Now with this mapped correctly also, everything is imported/mapped/passing successfully.
    '\\.less$': '<rootDir>/_setup__/empty-module.js'
  },
  collectCoverageFrom: [
    '<rootDir>/src/components/**/*.{js,jsx}',
    '<rootDir>/src/pages/**/*.{js,jsx}',
    '!<rootDir>/src/pages/_app.js',
    '!<rootDir>/src/pages/_document.js'
  ]
}

module.exports = createJestConfig(customJestConfig)
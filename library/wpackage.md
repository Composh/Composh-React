  "devDependencies": {
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/user-event": "^7.2.1",
    "@types/jest": "^25.1.4",
    "@types/react-dom": "^16.9.7",
    "@typescript-eslint/parser": "^2.26.0",
    "microbundle-crl": "^0.13.10",
    "cross-env": "^7.0.2",

    "gh-pages": "^2.2.0",
    "npm-run-all": "^4.1.5",
    "react-dom": "^16.13.1",
    "react-scripts": "^3.4.1",
  },
  
  "scripts": {
    "build": "microbundle-crl --no-compress --format modern,cjs",
    "start": "microbundle-crl watch --no-compress --format modern,cjs",
    "prepare": "run-s build",
    "test": "run-s test:unit test:lint test:build",
    "test:build": "run-s build",
    "test:lint": "eslint .",
    "test:unit": "cross-env CI=1 react-scripts test --env=jsdom",
    "test:watch": "react-scripts test --env=jsdom",
    "predeploy": "cd example && yarn install && yarn run build",
    "deploy": "gh-pages -d example/build"
  },
  
  "engines": {
    "node": ">=10"
  },
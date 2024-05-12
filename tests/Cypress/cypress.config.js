const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "1qt8m2",

  // e2e: {
  //   baseURL: process.env.CI ? 'https://holdinalt.github.io/diploma-stand/' : 'http://localhost:3000/diploma-stand/',
  // },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

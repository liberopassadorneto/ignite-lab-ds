module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },

  //* Se sua aplicação for deployada dentro de uma organização, você deve adicionar o nome da organização no path

  // viteFinal: (config, { configType }) => {
  //   if (configType === "PRODUCTION") {
  //     config.base = "/ignite-lab-ds/";
  //   }
  //   return config;
  // },
};

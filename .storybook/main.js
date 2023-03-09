module.exports = {
  addons: ["@chakra-ui/storybook-addon", "@storybook/addon-essentials"],
  features: {
    emotionAlias: false
  },
  stories: ["../examples/**/*.stories.mdx"],
  framework: '@storybook/react',
  core: {
    builder: 'webpack4',
  },
  docs: {
    autodocs: true
  }
};
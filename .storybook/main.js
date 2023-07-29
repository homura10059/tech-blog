import * as path from 'path';

module.exports = {
  "typescript": {
    reactDocgen: false
  },
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "framework": {
    name: "@storybook/nextjs",
    options: {
      image: {
        loading: 'i.imgur.com',
      },
      nextConfigPath: path.resolve(__dirname, '../next.config.js'),
    }
  },
  "staticDirs": ["../public"],
  docs: {
    autodocs: true
  }
};
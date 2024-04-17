import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    // GlobalStyles, // Adds your GlobalStyle component to all stories
  }),
];

export default preview;

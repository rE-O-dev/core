import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Typography from ".";
const meta = {
  title: "Typography/Text",
  component: Typography.Text,
  parameters: {
    layout: "centered",
  },
  args: {
    level: 1,
    bold: true,
    regular: false,
  },
} satisfies Meta<typeof Typography.Text>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    children: "Text",
  },
};

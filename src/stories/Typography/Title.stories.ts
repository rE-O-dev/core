import type { Meta, StoryObj } from "@storybook/react";
import Typography from ".";

const meta = {
  title: "Typography/Title",
  component: Typography.Title,
  parameters: {
    layout: "centered",
  },
  args: {
    level: 1,
    bold: true,
    regular: false,
  },
} satisfies Meta<typeof Typography.Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Title: Story = {
  args: {
    children: "Title",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta = {
  title: "Button",
  component: Button,
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
    primary: {
      control: {
        type: "boolean",
      },
    },
    onClick: {
      action: "clicked",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from ".";

const meta = {
  title: "Form/Checkbox",
  component: Checkbox,
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
    indeterminated: {
      control: {
        type: "boolean",
      },
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    label: "Label",
  },
};

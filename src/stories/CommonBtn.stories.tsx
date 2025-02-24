import { fn } from "@storybook/test";
import CommonBtn from "./CommonBtn";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CommonBtn> = {
  title: "Example/CommonBtn",
  component: CommonBtn,
  decorators: [
    (Story) => (
      <div style={{ padding: "3rem" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
  },
  args: {
    children: "BUTTON",
    disabled: false,
    size: "medium",
    onClick: fn(),
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    disabled: false,
    backgroundColor: "#83A80D",
    size: "medium",
  },
};
export const Main_Disabled: Story = {
  args: {
    disabled: true,
    backgroundColor: "#83A80D",
    size: "medium",
  },
};
export const Main_Large: Story = {
  args: {
    disabled: false,
    backgroundColor: "#83A80D",
    size: "large",
  },
};
export const Main_small: Story = {
  args: {
    disabled: false,
    backgroundColor: "#83A80D",
    size: "small",
  },
};

export const Light: Story = {
  args: {
    disabled: false,
    backgroundColor: "#93BC12",
    size: "medium",
  },
};
export const Light_Disabled: Story = {
  args: {
    disabled: true,
    backgroundColor: "#93BC12",
    size: "medium",
  },
};
export const Light_Large: Story = {
  args: {
    disabled: false,
    backgroundColor: "#93BC12",
    size: "large",
  },
};
export const Light_Small: Story = {
  args: {
    disabled: false,
    backgroundColor: "#93BC12",
    size: "small",
  },
};
export const Dark: Story = {
  args: {
    disabled: false,
    backgroundColor: "#4B9927",
    size: "medium",
  },
};
export const Dark_Disabled: Story = {
  args: {
    disabled: true,
    backgroundColor: "#4B9927",
    size: "medium",
  },
};
export const Dark_Large: Story = {
  args: {
    disabled: false,
    backgroundColor: "#4B9927",
    size: "large",
  },
};
export const Dark_Small: Story = {
  args: {
    disabled: false,
    backgroundColor: "#4B9927",
    size: "small",
  },
};

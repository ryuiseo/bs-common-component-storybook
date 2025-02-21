import { fn } from "@storybook/test";
import CommonBtn from "./CommonBtn";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CommonBtn> = {
  title: "Example/CommonBtn",
  component: CommonBtn,
  decorators: [
    (Story) => (
      <div style={{ margin: "3rem" }}>
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
    color: { control: "color" },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
  },
  args: {
    children: "BUTTON",
    disabled: false,
    onClick: fn(),
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    disabled: false,
    color: "blue",
  },
};

export const Waring: Story = {
  args: {
    disabled: false,
    color: "red,",
  },
};

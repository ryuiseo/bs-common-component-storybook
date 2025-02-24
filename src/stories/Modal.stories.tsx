import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Modal from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "Example/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    state: {
      control: "radio",
      options: ["CU", "GS25", "ETC"],
    },
    isOpen: { control: "boolean" },
    closeModal: { action: "closeModal" },
  },
  args: {
    isOpen: true,
    state: "CU",
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const DefaultModalStory = (args: any) => {
  const [open, setOpen] = useState(args.isOpen);
  const handleClose = () => {
    setOpen(false);
    if (args.closeModal) {
      args.closeModal();
    }
  };

  return <Modal {...args} isOpen={open} closeModal={handleClose} />;
};

export const Default: Story = {
  render: (args) => <DefaultModalStory {...args} />,
};

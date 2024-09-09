import { Meta, StoryObj } from '@storybook/react';

// Component
import Avatar from '.';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  tags: ['autodocs'],
  component: Avatar,

  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: 'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp',
    alt: 'image',
  },
};

import { Meta, StoryObj } from '@storybook/react';

// Component
import HeadingSection from '.';

const meta: Meta<typeof HeadingSection> = {
  title: 'Common/Heading',
  tags: ['autodocs'],
  component: HeadingSection,

  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof HeadingSection>;

export const Default: Story = {
  args: {
    title: 'Title',
  },
};

import { StoryObj, Meta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

// Components
import InputField from '.';

const meta: Meta<typeof InputField> = {
  title: 'Common/InputField',
  tags: ['autodocs'],
  component: InputField,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],

  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: 'First Name',
    variant: 'form',
    onChange: () => {},
  },
};

export const TypePassword: Story = {
  args: {
    label: 'First Name',
    variant: 'form',
    type: 'password',
    onChange: () => {},
  },
};

export const HasError: Story = {
  args: {
    isValidate: true,
    isError: true,
  },
};

export const SearchLarge: Story = {
  args: {
    name: 'search',
    type: 'search',
    variant: 'search',
    placeholder: 'Search Tasks',
    onChange: () => {},
  },
};

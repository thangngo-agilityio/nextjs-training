import { fireEvent, render, RenderResult } from '@testing-library/react';

// Components
import { PhoneIcon } from '@chakra-ui/icons';
import InputField from '..';

const mockOnChange = jest.fn();
const props = {
  label: 'Search',
  name: 'search',
  placeholder: 'Search Tasks',
  onChange: mockOnChange,
};

describe('InputField component', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<InputField {...props} />);
  });

  it('renders correctly with default props', () => {
    const { container } = renderResult;
    expect(container).toMatchSnapshot();
  });

  it('renders correctly with left icon and right icon', () => {
    renderResult = render(
      <InputField
        {...props}
        leftIcon={<PhoneIcon />}
        rightIcon={<PhoneIcon />}
      />,
    );
    const { container } = renderResult;
    expect(container).toMatchSnapshot();
  });

  it('should call onChange when input value is changed', async () => {
    const { getByLabelText } = renderResult;
    fireEvent.change(getByLabelText('Search'), {
      target: { value: 'New task' },
    });

    expect(mockOnChange).toHaveBeenCalled();
  });
});

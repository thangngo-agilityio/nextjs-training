import { render } from '@testing-library/react';
import ImageProduct from '..';

describe('ImageProduct component', () => {
  it('should match snapshot for ImageProduct', () => {
    const { container } = render(<ImageProduct image={[]} alt="test" />);

    expect(container).toMatchSnapshot();
  });
});

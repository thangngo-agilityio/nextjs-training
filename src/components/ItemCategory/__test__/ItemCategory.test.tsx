import { render } from '@testing-library/react';
import ItemCategory from '..';

describe('ItemCategory component', () => {
  it('Should match snapshot for ItemCategory', () => {
    const { container } = render(<ItemCategory title="test" />);

    expect(container).toMatchSnapshot();
  });
});

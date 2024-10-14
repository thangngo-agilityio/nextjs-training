import { Loading } from '@/components';
import { render } from '@testing-library/react';

describe('Loading component', () => {
  it('Should match snapshot for Loading', () => {
    const { container } = render(<Loading />);

    expect(container).toMatchSnapshot();
  });
});

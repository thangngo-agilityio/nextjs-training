import { render } from '@testing-library/react';

// Component
import Avatar from '..';

describe('Avatar test case', () => {
  it('Should render correctly', () => {
    const { container } = render(
      <Avatar
        src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
        alt="image"
      />,
    );

    expect(container).toMatchSnapshot();
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import HeadingSection from '../index';
import '@testing-library/jest-dom';

describe('HeadingSection() HeadingSection method', () => {
  const title = 'Test Title';
  it('should match snapshot for HeadingSection', () => {
    const { container } = render(<HeadingSection title={title} />);

    expect(container).toMatchSnapshot();
  });

  describe('Happy Path', () => {
    it('should render the HeadingSection with the provided title', () => {
      // Act
      const { getByText } = render(<HeadingSection title={title} />);

      // Assert
      expect(getByText(title)).toBeInTheDocument();
    });

    it('should apply the correct styles to the Flex container', () => {
      // Arrange
      const title = 'Styled Title';

      // Act
      const { container } = render(<HeadingSection title={title} />);
      const flexElement = container.firstChild;

      // Assert
      expect(flexElement).toHaveStyle('width: 100%');
      expect(flexElement).toHaveStyle('flex-direction: column');
      expect(flexElement).toHaveStyle('border-bottom: 1px solid #DEE5EF');
      expect(flexElement).toHaveStyle('margin-top: 65px');
      expect(flexElement).toHaveStyle('margin-bottom: 35px');
    });
  });

  // Edge Case Tests
  describe('Edge Cases', () => {
    it('should handle a very long title without crashing', () => {
      // Arrange
      const longTitle = 'A'.repeat(1000); // A very long string

      // Act
      const { getByText } = render(<HeadingSection title={longTitle} />);

      // Assert
      expect(getByText(longTitle)).toBeInTheDocument();
    });
  });
});

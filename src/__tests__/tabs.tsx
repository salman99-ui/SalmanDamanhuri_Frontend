import { screen, render, fireEvent } from '@testing-library/react';
import TabsC from '../Components/Tabs';

describe('test tabs', () => {
  it('should show menu 1', () => {
    render(<TabsC />);
    const element = screen.getByRole('heading', {
      level: 3,
    });
    expect(element).toHaveTextContent('1');
  });

  it('should show menu 2 after click tab 2', () => {
    render(<TabsC />);
    const element = screen.getByRole('tab', { name: /tab 2/i });
    fireEvent.click(element);
    const element2 = screen.getByRole('heading', {
      level: 3,
    });
    expect(element2).toHaveTextContent('2');
  });
});

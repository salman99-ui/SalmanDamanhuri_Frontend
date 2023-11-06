import { screen, render, fireEvent } from '@testing-library/react';
import TableC from '../Components/Table';

describe('test pagination', () => {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener() {},
        removeListener() {},
      };
    };

  it.skip('button next pagination show doc', () => {
    render(<TableC />);
    const element = screen.getByRole('button', { name: /right/i });
    expect(element).toBeInTheDocument();
    fireEvent.click(element);
    const element2 = screen.getByRole('heading', {
      level: 3,
    });
    expect(element2).toHaveTextContent('2');

    const element3 = screen.getByRole('button', { name: /left/i });
    expect(element3).toBeInTheDocument();
    fireEvent.click(element3);
    const element4 = screen.getByRole('heading', {
      level: 3,
    });
    expect(element4).toHaveTextContent('1');
  });
});

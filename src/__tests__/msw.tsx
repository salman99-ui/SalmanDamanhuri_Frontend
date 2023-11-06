import { screen, render } from '@testing-library/react';
import Msw from '../Components/Msw';

describe('test msw', () => {
  it('should show success', async () => {
    render(<Msw />);
    const element = await screen.findByRole('heading', { level: 1 }, { timeout: 2 });
    expect(element).toBeInTheDocument();
  });
});

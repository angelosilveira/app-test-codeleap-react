import { screen } from '@testing-library/react';
import { renderWithTheme } from 'src/utils/tests/renderWithTheme';

import { Signup } from '.';

describe('<Dashboard />', () => {
  it('should render the signup with loading', () => {
    const { container } = renderWithTheme(<Signup />);

    expect(screen.getByTestId('loading')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});

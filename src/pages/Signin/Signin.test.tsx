import { screen } from '@testing-library/react';
import { renderWithTheme } from 'src/utils/tests/renderWithTheme';

import { Signin } from '.';

describe('<Dashboard />', () => {
  it('should render the signin with loading', () => {
    const { container } = renderWithTheme(<Signin />);

    expect(screen.getByTestId('loading')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});

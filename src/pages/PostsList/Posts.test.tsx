import { screen } from '@testing-library/react';
import { renderWithTheme } from 'src/utils/tests/renderWithTheme';

import { Dashboard } from '.';

describe('<Dashboard />', () => {
  it('should render the dashboard with loading', () => {
    const { container } = renderWithTheme(<Dashboard />);

    expect(screen.getByTestId('loading')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});

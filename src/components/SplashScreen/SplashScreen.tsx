import { screen } from '@testing-library/react';
import { renderWithTheme } from 'src/utils/tests/renderWithTheme';
import { describe, test, expect } from 'vitest';

import { SplashScreen } from '.';

describe('<SplashScreen />', () => {
  test('should render the SplashScreen', () => {
    const { container } = renderWithTheme(
      <SplashScreen>
        <span>App codeleap</span>
      </SplashScreen>
    );

    expect(screen.getByText(/app codeleap/i)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});

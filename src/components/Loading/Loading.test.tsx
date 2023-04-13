import '@testing-library/jest-dom';
import { renderWithTheme } from 'src/utils/tests/renderWithTheme';
import { it, describe } from 'vitest';
import { Loading } from '.';

describe('<Loading />', () => {
  it('should render the loading', () => {
    const { container, getByTestId } = renderWithTheme(
      <Loading data-testid="loading" />
    );

    expect(getByTestId('loading')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});

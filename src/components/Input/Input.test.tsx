import { screen } from '@testing-library/react';
import { renderWithTheme } from 'src/utils/tests/renderWithTheme';
import { it, describe } from 'vitest';
import Input from '.';

describe('<Input />', () => {
  it('Renders with title', () => {
    const { container } = renderWithTheme(
      <Input title="Title" name="title" id="Field" />
    );

    expect(screen.getByLabelText('Title')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders without Title', () => {
    renderWithTheme(<Input name="title" />);

    expect(screen.queryByLabelText('Title')).not.toBeInTheDocument();
  });

  it('Renders with placeholder', () => {
    renderWithTheme(<Input name="title" placeholder="hey you" />);

    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument();
  });
});

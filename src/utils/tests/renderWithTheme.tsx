import { ThemeProvider } from 'styled-components';
import { render, RenderResult } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import theme from '@styles/theme';
import React from 'react';

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(
    <ThemeProvider theme={theme}>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  );

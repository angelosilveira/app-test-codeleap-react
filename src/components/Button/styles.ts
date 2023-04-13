import styled, { css, keyframes } from 'styled-components';

import { VariantProps } from '.';
import { BiLoaderAlt } from 'react-icons/bi';

type ButtonProps = {
  variant: VariantProps;
};

const Spinner = keyframes`
  0%{
    transform: rotate(0deg);
  }

  100%{
    transform: rotate(360deg);
  }
`;

const wrapperModifiers = {
  primary: () => css`
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
  `,
  secondary: () => css`
    color: #000;
    background-color: none;
    border-color: #6c757d;
  `,
  success: () => css`
    color: #fff;
    background-color: #47b960;
    border-color: #47b960;
  `,
  danger: () => css`
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
  `,
  warning: () => css`
    color: #000;
    background-color: #ffc107;
    border-color: #ffc107;
  `,
  info: () => css`
    color: #000;
    background-color: #0dcaf0;
    border-color: #0dcaf0;
  `,
  light: () => css`
    color: #000;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
  `,
  dark: () => css`
    color: #fff;
    background-color: #000;
    border-color: #000;
  `,
  outline: () => css`
    background-color: none !important;
    border-color: none !important;
  `,
};

export const Wrapper = styled.button<ButtonProps>`
  ${({ variant }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    line-height: 1.5;
    color: #212529;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.6rem 0.75rem;
    font-size: 1rem;
    border-radius: 8px;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    font-size: 1.2rem;
    font-family: inherit;

    svg {
      font-size: 1.6rem;
      margin-right: ${variant === 'outline' ? '0px' : '5px'};
    }

    &:disabled {
      color: #fff;
      background-color: #ccc;
      border-color: #ccc;
      cursor: not-allowed;
    }

    ${!!variant && wrapperModifiers[variant]()}
  `}
`;

export const Loading = styled(BiLoaderAlt)`
  animation: ${Spinner} 1.5s linear infinite;
  margin-left: 5px;
`;

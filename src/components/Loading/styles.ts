import styled, { css, keyframes } from 'styled-components';

const Loading = keyframes`
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }

`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;

    div {
      position: absolute;
      background: ${theme.colors.primary};
      opacity: 1;
      border-radius: 50%;
      animation: ${Loading} 1.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }

    div:nth-child(2) {
      animation-delay: -0.7s;
    }
  `}
`;

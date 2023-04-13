import styled, { keyframes } from 'styled-components';

const Blinker = keyframes`
to { opacity: 0; }
`;

export const SplashScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-left: 15px;
  padding-right: 15px;

  img {
    height: auto;
    max-width: 100%;
    width: 100%;
    animation: ${Blinker} 1.5s ease-in-out infinite alternate;
  }
`;

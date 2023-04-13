import styled, { css, keyframes } from 'styled-components';
import media from 'styled-media-query';

const Waviy = keyframes`
  0%,40%,100% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(-20px);
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  ${media.lessThan('large')`
    grid-template-columns: 1fr;
  `}
`;

export const LeftSidebar = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    padding-left: 40px;
    padding-right: 40px;
    height: 100%;
  `}
`;

export const Title = styled.div`
  font-size: 5rem;
  font-weight: bold;
  text-align: center;
  position: relative;
  -webkit-box-reflect: below -20px linear-gradient(transparent, rgba(0, 0, 0, 0.2));
`;

export const Letter = styled.span<{ value: number }>`
  text-transform: uppercase;
  position: relative;
  animation: ${Waviy} 1s infinite;
  animation-delay: calc(0.1s * ${(props) => props.value});
  display: inline-block;
`;

export const RightSidebar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

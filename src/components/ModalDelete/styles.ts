import styled, { css, keyframes } from 'styled-components';
import media from 'styled-media-query';
import { ModalDeleteProps } from '.';

type ModalDelete = Pick<ModalDeleteProps, 'open'>;

const FadeIn = keyframes`
  0% {
    background:rgba(0,0,0,.0);
  }
  100% {
    background:rgba(0,0,0,.7);
  }
`;

const FadeOut = keyframes`
  0% {
    background:rgba(0,0,0,.0);
  }
  100% {
    background:rgba(0,0,0,.7);
  }
`;

const RoadRunnerIn = keyframes`
  0% {
    transform:translateX(-1500px) skewX(30deg) scaleX(1.3);
  }
  70% {
    transform:translateX(30px) skewX(0deg) scaleX(.9);
  }
  100% {
    transform:translateX(0px) skewX(0deg) scaleX(1);
  }
`;

const RoadRunnerOut = keyframes`
  0% {
    transform:translateX(0px) skewX(0deg) scaleX(1);
  }
  30% {
    transform:translateX(-30px) skewX(-5deg) scaleX(.9);
  }
  100% {
    transform:translateX(1500px) skewX(30deg) scaleX(1.3);
  }
`;

export const Wrapper = styled.div<ModalDelete>`
  ${({ open }) => css`
    background-color: rgba(119, 119, 119, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: ${open ? 1 : 0};
    transform: ${
      open
        ? css`
    scale(1);
    `
        : css`
      scale(0);
    `
    }
    animation: ${open ? FadeIn : FadeOut} 0.5s
      cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  `}
`;

export const Content = styled.div<ModalDelete>`
  ${({ theme, open }) => css`
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.lightGray};
    border-radius: 16px;
    padding: 15px;
    max-width: 660px;
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    animation: ${open ? RoadRunnerIn : RoadRunnerOut} 0.3s
      cubic-bezier(0.165, 0.84, 0.44, 1) forwards;

    ${media.lessThan('medium')`
      max-width: 400px;
    `}
  `}
`;

export const Title = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0 15px;

  button {
    flex-basis: 120px;
  }
`;

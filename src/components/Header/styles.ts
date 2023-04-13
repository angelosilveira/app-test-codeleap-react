import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 15px;
    margin-bottom: 2rem;
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: bold;
    font-size: 2rem;
  `}
`;

export const SignOut = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    color: ${theme.colors.white};

    svg {
      margin-left: 5px;
    }
  `}
`;

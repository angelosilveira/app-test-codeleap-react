import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 16px;
  padding-bottom: 2rem;
`;

export const Header = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    border-radius: 16px 16px 0px 0px;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-weight: bold;
    color: ${theme.colors.white};
    font-size: 2rem;
  `}
`;

export const Actions = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    img {
      height: 20px;
    }

    svg {
      color: ${theme.colors.white};
      font-size: 2rem;
    }
  `}
`;

export const Body = styled.div`
  ${({ theme }) => css`
    padding: 15px;
    border: 1px solid ${theme.colors.lightGray};
    border-top: 0;
    border-radius: 0 0 16px 16px;
  `}
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
`;

export const Username = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-weight: bold;
  `}
`;

export const Date = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
  `}
`;

export const Content = styled.p`
  ${({ theme }) => css`
    font-size: 1.6rem;
    color: ${theme.colors.primary};
    line-height: 21px;
  `}
`;

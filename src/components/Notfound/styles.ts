import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    border: 1px dashed ${theme.colors.thinGray};
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    color: ${theme.colors.gray};
    font-weight: bold;
    font-size: 1.4rem;
  `}
`;

import styled, { css } from 'styled-components';

export const FormSignup = styled.form`
  display: flex;
  flex-direction: column;
  height: 400px;

  justify-content: center;
  padding: 50px 0;
  img {
    height: 80px;
  }
`;

export const Subtitle = styled.h1`
  margin-bottom: 20px;
  font-size: 2rem;
`;

export const Already = styled.div`
  ${({ theme }) => css`
    margin-top: auto;
    text-align: center;

    a {
      color: ${theme.colors.primary};
      font-weight: 500;
    }
  `}
`;

import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: 2rem;

    label {
      font-size: 1.5rem;
      margin-bottom: 0.375rem;
      display: inline-block;
    }

    textarea {
      display: block;
      width: 100%;
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: ${theme.colors.darkGray};
      background-color: ${theme.colors.white};
      background-clip: padding-box;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border: 1px solid #777777;
      border-radius: 8px;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      min-height: 74px;
      resize: none;

      &:focus {
        color: ${theme.colors.darkGray};
        background-color: ${theme.colors.white};
        border-color: ${theme.colors.primary};
        outline: 0;
      }

      &::placeholder {
        color: ${theme.colors.thinGray};
        font-size: 1.2rem;
      }
    }
  `}
`;

export const Error = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-weight: bold;
    margin-top: 0.5rem;
    font-size: 1.2rem;
  `}
`;

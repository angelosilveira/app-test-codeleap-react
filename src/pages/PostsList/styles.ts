import styled, { css } from 'styled-components';
import { Button as Btn } from '@components/Button';

export const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const WhatsYourMind = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.lightGray};
    border-radius: 16px;
    padding: 24px;
    margin-bottom: 2rem;
  `}
`;

export const Title = styled.div`
  ${({ theme }) => css`
    font-size: 2rem;
    color: ${theme.colors.primary};
    font-weight: bold;
    margin-bottom: 1.5rem;
  `}
`;

export const Button = styled(Btn)`
  display: flex;
  font-weight: bold;
  font-size: 1.3rem;
  margin-left: auto;
  min-width: 120px;
`;

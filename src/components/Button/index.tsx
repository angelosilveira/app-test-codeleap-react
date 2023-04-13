import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

export type VariantProps =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'outline';

export type ButtonProps = {
  children: React.ReactNode;
  icon?: JSX.Element;
  variant?: VariantProps;
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  icon,
  variant = 'primary',
  loading = false,
  ...rest
}: ButtonProps) => (
  <S.Wrapper variant={variant} {...rest}>
    <>
      {!!icon && icon}
      {children}
      {loading && <S.Loading />}
    </>
  </S.Wrapper>
);

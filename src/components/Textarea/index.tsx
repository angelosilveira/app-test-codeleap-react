import { forwardRef, TextareaHTMLAttributes } from 'react';
import * as S from './styles';

export type InputProps = {
  title?: string;
  error?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const Input = ({ title, error, name, id, ...rest }: InputProps, ref: any) => (
  <S.Wrapper>
    {!!title && <label htmlFor={name}>{title}</label>}
    <textarea
      {...rest}
      name={name}
      ref={ref}
      {...(title ? { id: name } : {})}
      aria-label={name}
    ></textarea>
    {!!error && <S.Error>{error}</S.Error>}
  </S.Wrapper>
);

export default forwardRef(Input);

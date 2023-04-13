import React from 'react';

import * as S from './styles';

type Props = {
  children: React.ReactNode;
};

export const Notfound = ({ children }: Props) => {
  return (
    <>
      <S.Wrapper>{children}</S.Wrapper>
    </>
  );
};

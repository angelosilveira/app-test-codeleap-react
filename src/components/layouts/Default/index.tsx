import React from 'react';

import MediaMatch from '@components/MediaMatch';

import * as S from './styles';

type DefaultLayoutProps = {
  children: React.ReactNode;
};

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <S.Wrapper>
        <MediaMatch greaterThan="large">
          <S.LeftSidebar>
            <S.Title>
              <S.Letter value={1}>C</S.Letter>
              <S.Letter value={2}>O</S.Letter>
              <S.Letter value={3}>D</S.Letter>
              <S.Letter value={4}>E</S.Letter>
              <S.Letter value={5}>L</S.Letter>
              <S.Letter value={6}>E</S.Letter>
              <S.Letter value={7}>A</S.Letter>
              <S.Letter value={8}>P</S.Letter> <S.Letter value={9}>N</S.Letter>
              <S.Letter value={10}>E</S.Letter>
              <S.Letter value={11}>T</S.Letter>
              <S.Letter value={12}>W</S.Letter>
              <S.Letter value={13}>O</S.Letter>
              <S.Letter value={14}>R</S.Letter>
              <S.Letter value={15}>K</S.Letter>
            </S.Title>
          </S.LeftSidebar>
        </MediaMatch>
        <S.RightSidebar>{children}</S.RightSidebar>
      </S.Wrapper>
    </>
  );
};

import React from 'react';

import { Button } from '@components/Button';
import { dateFromNow } from '@utils/helpers';

import * as S from './styles';

type PostProps = {
  id: number;
  title: string;
  content: string;
  username: string;
  created_datetime: Date;
  onDelete?: () => void;
  onUpdate: () => void;
};

export const Post = ({
  title,
  content,
  username,
  created_datetime,
  onDelete,
  onUpdate,
}: PostProps) => {
  return (
    <>
      <S.Wrapper>
        <S.Header>
          <S.Title>{title}</S.Title>
          <S.Actions>
            <Button onClick={onDelete} variant="outline">
              <img src="/icons/trash.svg" alt="" />
            </Button>
            <Button onClick={onUpdate} variant="outline">
              <img src="/icons/edit.png" alt="" />
            </Button>
          </S.Actions>
        </S.Header>

        <S.Body>
          <S.Info>
            <S.Username>{username}</S.Username>
            <S.Date>{dateFromNow(created_datetime)}</S.Date>
          </S.Info>

          <S.Content>{content}</S.Content>
        </S.Body>
      </S.Wrapper>
    </>
  );
};

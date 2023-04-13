import React from 'react';

import * as S from './styles';
import { Button } from '@components/Button';
import { useTypedSelector } from '@hooks/useTypeSelector';

export type ModalDeleteProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onDelete: () => void;
};

export const ModalDelete = ({ open, setOpen, onDelete }: ModalDeleteProps) => {
  const { loadingDelete } = useTypedSelector((state) => state.posts);

  const onCancel = () => {
    !!setOpen && setOpen(false);
  };

  return (
    <>
      <S.Wrapper open={open}>
        <S.Content open={open}>
          <S.Title>Are you sure you want to delete this item?</S.Title>
          <S.Actions>
            <Button variant="secondary" onClick={onCancel}>
              Cancel
            </Button>
            <Button
              variant="danger"
              onClick={onDelete}
              loading={loadingDelete}
              disabled={loadingDelete}
            >
              Delete
            </Button>
          </S.Actions>
        </S.Content>
      </S.Wrapper>
    </>
  );
};

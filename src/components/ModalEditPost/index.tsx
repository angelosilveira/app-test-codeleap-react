import React, { useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useDispatch } from 'react-redux';

import { Button } from '@components/Button';
import Input from '@components/Input';
import Textarea from '@components/Textarea';

import { useTypedSelector } from '@hooks/useTypeSelector';
import { updatePosts } from '@redux/actionCreators/updatePosts';

import * as S from './styles';

type FormData = {
  title: string;
  content: string;
};

const schema = yup.object({
  title: yup.string().required('Title is required'),
  content: yup.string().required('Content is required'),
});

export type ModalEditPostProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ModalEditPost = ({ open, setOpen }: ModalEditPostProps) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const { loadingUpdate, post } = useTypedSelector((state) => state.posts);

  const watchAllFields = watch();

  useEffect(() => {
    if (post) {
      setValue('title', post.title);
      setValue('content', post.content);
    }
  }, [post]);

  const onCancel = () => {
    !!setOpen && setOpen(false);
  };

  const onSubmit = handleSubmit(async (data) => {
    await dispatch(
      updatePosts({
        id: post?.id,
        ...data,
      })
    );
    setOpen(false);
  });

  return (
    <>
      <S.Wrapper open={open}>
        <S.Content open={open}>
          <S.Title>Edit item</S.Title>

          <form onSubmit={onSubmit}>
            <Input
              title="Title"
              placeholder="Hello world"
              {...register('title')}
              error={errors?.title?.message}
            />

            <Textarea
              title="Content"
              placeholder="Content here"
              {...register('content')}
              error={errors?.content?.message}
            />

            <S.Actions>
              <Button variant="secondary" onClick={onCancel}>
                Cancel
              </Button>
              <Button
                variant="success"
                type="submit"
                loading={loadingUpdate}
                disabled={
                  loadingUpdate ||
                  !watchAllFields.title ||
                  !watchAllFields.content
                }
              >
                Save
              </Button>
            </S.Actions>
          </form>
        </S.Content>
      </S.Wrapper>
    </>
  );
};

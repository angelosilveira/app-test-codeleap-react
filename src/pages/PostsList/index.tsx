import React, { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useDispatch } from 'react-redux';
import { useTypedSelector } from '@hooks/useTypeSelector';
import { getPosts } from '@redux/actionCreators/getPosts';
import { createPosts } from '@redux/actionCreators/createPosts';
import { deletePosts, selectedPost } from '@redux/actionCreators/deletePosts';

import { Header } from '@components/Header';
import Input from '@components/Input';
import Textarea from '@components/Textarea';
import { Post } from '@components/Post';
import { Loading } from '@components/Loading';
import { ModalDelete } from '@components/ModalDelete';
import { ModalEditPost } from '@components/ModalEditPost';
import { Notfound } from '@components/Notfound';

import * as S from './styles';
import { Posts } from '@models/Posts';

type FormData = {
  title: string;
  content: string;
};

type PostProps = Pick<Posts, 'id' | 'title' | 'content'>;

const schema = yup.object({
  title: yup.string().required('Title is required'),
  content: yup.string().required('Content is required'),
});

export const PostsList = () => {
  const dispatch = useDispatch();
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [openModalEditPost, setOpenModalEditPost] = useState(false);

  const {
    formState: { errors },
    handleSubmit,
    register,
    watch,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const watchAllFields = watch();

  const { posts, loading, error, post, loadingCreate } = useTypedSelector(
    (state) => state.posts
  );

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    const storage = localStorage.getItem('@CODELEAP_APP');
    const { username } = JSON.parse(storage ?? '');
    await dispatch(
      createPosts({
        username,
        ...data,
      })
    );
  });

  const onDeletePost = async (post: PostProps) => {
    setOpenModalDelete(true);
    await dispatch(selectedPost(post));
  };

  const confirmDeletePost = async () => {
    await dispatch(deletePosts(post?.id));
    setOpenModalDelete(false);
  };

  const onEditPost = async (post: PostProps) => {
    setOpenModalEditPost(true);
    await dispatch(selectedPost(post));
  };

  return (
    <>
      <Header />

      <S.Wrapper>
        <form onSubmit={onSubmit}>
          <S.WhatsYourMind>
            <S.Title>What’s on your mind?</S.Title>

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

            <S.Button
              variant="dark"
              disabled={
                loadingCreate ||
                !watchAllFields.title ||
                !watchAllFields.content
              }
              loading={loadingCreate}
            >
              Create
            </S.Button>
          </S.WhatsYourMind>
        </form>

        {loading ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <Loading />
          </div>
        ) : (
          <>
            {posts.length < 1 ? (
              <Notfound>
                Sorry, There aren&apos;t posts created at the moment!
              </Notfound>
            ) : (
              <>
                {posts.map((post) => (
                  <Post
                    key={post.id}
                    {...post}
                    onDelete={() => onDeletePost(post)}
                    onUpdate={() => onEditPost(post)}
                  />
                ))}
              </>
            )}
          </>
        )}

        <ModalDelete
          open={openModalDelete}
          setOpen={setOpenModalDelete}
          onDelete={confirmDeletePost}
        />

        <ModalEditPost
          open={openModalEditPost}
          setOpen={setOpenModalEditPost}
        />
      </S.Wrapper>
    </>
  );
};

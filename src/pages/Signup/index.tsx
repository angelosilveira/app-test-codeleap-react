import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Input from '@components/Input';
import { Button } from '@components/Button';

import * as S from './styles';
import { AuthContext } from '@context/AuthContext';

type FormData = {
  username: string;
};

const schema = yup.object({
  username: yup.string().required('Username is required'),
});

export const Signup = () => {
  const { setAuthenticated, authenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (authenticated) {
      return navigate('/posts');
    }
  }, []);

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const handleSignUp = handleSubmit((data) => {
    localStorage.setItem(
      '@CODELEAP_APP',
      JSON.stringify({
        username: data.username,
      })
    );
    setAuthenticated(true);
    navigate('/posts');
  });

  return (
    <>
      <S.FormSignup onSubmit={handleSignUp}>
        <img src="/images/codeleap_logo_black.png" alt="" />

        <S.Subtitle>Welcome to CodeLeap network!</S.Subtitle>

        <Input
          placeholder="John doe"
          {...register('username')}
          error={errors?.username?.message}
          title="Please enter your username"
        />

        <Button variant="dark" onClick={handleSignUp}>
          Sign up
        </Button>

        <S.Already>
          Already have an account? <Link to={'/'}>Sign in</Link>
        </S.Already>
      </S.FormSignup>
    </>
  );
};

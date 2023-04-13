import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Input from '@components/Input';
import { Button } from '@components/Button';

import * as S from './styles';
import { AuthContext } from '@context/AuthContext';
import { SplashScreen } from '@components/SplashScreen';

type FormData = {
  username: string;
};

const schema = yup.object({
  username: yup.string().required('Username is required'),
});

export const Signin = () => {
  const [splashScreen, setSplashScreen] = useState(true);
  const navigate = useNavigate();
  const { setAuthenticated, authenticated } = useContext(AuthContext);

  useEffect(() => {
    if (authenticated) {
      return navigate('/posts');
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setSplashScreen(false);
    }, 4000);
  }, []);

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const handleSignIn = handleSubmit((data) => {
    localStorage.setItem(
      '@CODELEAP_APP',
      JSON.stringify({
        username: data.username,
      })
    );
    setAuthenticated(true);
    navigate('/posts');
  });

  if (splashScreen) {
    return (
      <SplashScreen>
        <img src="/images/codeleap_logo_black.png" />
      </SplashScreen>
    );
  }

  return (
    <>
      <S.FormSignin onSubmit={handleSignIn}>
        <img src="/images/codeleap_logo_black.png" alt="" />

        <S.Subtitle>Welcome to CodeLeap network!</S.Subtitle>

        <Input
          placeholder="John doe"
          {...register('username')}
          error={errors?.username?.message}
          title="Please enter your username"
        />

        <Button variant="dark">Sign in</Button>

        <S.DontHaveAccount>
          Don&apos;t have an account? <Link to={'/signup'}>Sign up</Link>
        </S.DontHaveAccount>
      </S.FormSignin>
    </>
  );
};

import React, { useContext } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import { AuthContext } from '@context/AuthContext';

export const Header = () => {
  const navigate = useNavigate();
  const { setAuthenticated } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem('@CODELEAP_APP');
    setAuthenticated(false);
    navigate('/');
  };

  return (
    <>
      <S.Wrapper>
        <S.Title>CodeLeap Network</S.Title>

        <S.SignOut onClick={handleLogout}>
          Sign Out
          <FaSignOutAlt color="#fff" />
        </S.SignOut>
      </S.Wrapper>
    </>
  );
};

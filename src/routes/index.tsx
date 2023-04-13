import React, { useContext } from 'react';
import {
  Routes as Router,
  Route,
  Navigate,
  Outlet,
  BrowserRouter,
} from 'react-router-dom';
import { AuthContext } from '@context/AuthContext';
import { Signin } from '@pages/Signin';
import { Signup } from '@pages/Signup';
import { PostsList } from '@pages/PostsList';

import { DefaultLayout } from '@components/layouts/Default';

const PrivateRoutes = () => {
  const { authenticated } = useContext(AuthContext);

  if (!authenticated) return <Navigate to="/" replace />;

  return <Outlet />;
};

export const RoutesComponent = () => {
  return (
    <Router>
      <Route
        path="/"
        element={
          <DefaultLayout>
            <Signin />
          </DefaultLayout>
        }
      />
      <Route
        path="/signup"
        element={
          <DefaultLayout>
            <Signup />
          </DefaultLayout>
        }
      />
      <Route element={<PrivateRoutes />}>
        <Route path="/posts" element={<PostsList />} />
      </Route>
    </Router>
  );
};

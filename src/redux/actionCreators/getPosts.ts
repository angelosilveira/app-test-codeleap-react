import { Dispatch } from 'redux';
import { ActionType, Action } from '../actionTypes';
import { api } from '@services/api';
import { Posts } from '@models/Posts';

export const getPosts = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_POSTS_PENDING,
    });

    try {
      const { data } = await api.get('/');
      const local = localStorage.getItem('@CODELEAP_APP');
      const { username } = JSON.parse(local ?? '');
      const results = data.results;
      const postsCurrentLogged = results.filter(
        (res: Posts) => res.username === username
      );

      dispatch({
        type: ActionType.GET_POSTS_SUCCESS,
        payload: postsCurrentLogged,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.GET_POSTS_FAIL,
        payload: err.message,
      });
    }
  };
};

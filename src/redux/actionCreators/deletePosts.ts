import { Dispatch } from 'redux';
import { ActionType, Action } from '../actionTypes';
import { api } from '@services/api';
import { Posts } from '@models/Posts';

export const selectedPost = (post: Posts) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SELECT_POST,
      payload: post,
    });
  };
};

export const deletePosts = (id: number) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DELETE_POSTS_PENDING,
    });

    try {
      await api.delete(`/${id}/`);

      dispatch({
        type: ActionType.DELETE_POSTS_SUCCESS,
        payload: id,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.DELETE_POSTS_FAIL,
        payload: err.message,
      });
    }
  };
};

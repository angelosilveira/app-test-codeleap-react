import { Dispatch } from 'redux';
import { ActionType, Action, CreatePostProps } from '../actionTypes';
import { api } from '@services/api';

export const createPosts = (payload: CreatePostProps) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CREATE_POSTS_PENDING,
    });

    try {
      const { data } = await api.post('/', payload);

      dispatch({
        type: ActionType.CREATE_POSTS_SUCCESS,
        payload: data,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.CREATE_POSTS_FAIL,
        payload: err.message,
      });
    }
  };
};

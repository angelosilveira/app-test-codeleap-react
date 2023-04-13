import { Dispatch } from 'redux';
import { ActionType, Action } from '../actionTypes';
import { api } from '@services/api';
import { Posts } from '@models/Posts';

type EditPostProps = Pick<Posts, 'id' | 'title' | 'content'>;

export const updatePosts = (post: EditPostProps) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.UPDATE_POSTS_PENDING,
    });

    try {
      await api.patch(`/${post.id}/`, {
        title: post.title,
        content: post.content,
      });

      dispatch({
        type: ActionType.UPDATE_POSTS_SUCCESS,
        payload: post,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.UPDATE_POSTS_FAIL,
        payload: err.message,
      });
    }
  };
};

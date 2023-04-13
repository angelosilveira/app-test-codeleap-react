import { Posts } from '@models/Posts';

export type CreatePostProps = Pick<Posts, 'username' | 'title' | 'content'>;

export enum ActionType {
  GET_POSTS_PENDING = 'GET_POSTS_PENDING',
  GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS',
  GET_POSTS_FAIL = 'GET_POSTS_FAIL',

  CREATE_POSTS_PENDING = 'CREATE_POSTS_PENDING',
  CREATE_POSTS_SUCCESS = 'CREATE_POSTS_SUCCESS',
  CREATE_POSTS_FAIL = 'CREATE_POSTS_FAIL',

  SELECT_POST = 'SELECT_POST',

  DELETE_POSTS_PENDING = 'DELETE_POSTS_PENDING',
  DELETE_POSTS_SUCCESS = 'DELETE_POSTS_SUCCESS',
  DELETE_POSTS_FAIL = 'DELETE_POSTS_FAIL',

  UPDATE_POSTS_PENDING = 'UPDATE_POSTS_PENDING',
  UPDATE_POSTS_SUCCESS = 'UPDATE_POSTS_SUCCESS',
  UPDATE_POSTS_FAIL = 'UPDATE_POSTS_FAIL',
}

interface actionPending {
  type: ActionType.GET_POSTS_PENDING;
}

interface actionSuccess {
  type: ActionType.GET_POSTS_SUCCESS;
  payload: Posts[];
}

interface actionFail {
  type: ActionType.GET_POSTS_FAIL;
  payload: string;
}

interface createPostPending {
  type: ActionType.CREATE_POSTS_PENDING;
}

interface createPostSuccess {
  type: ActionType.CREATE_POSTS_SUCCESS;
  payload: Posts;
}

interface createPostFail {
  type: ActionType.CREATE_POSTS_FAIL;
  payload: string;
}

interface selectPost {
  type: ActionType.SELECT_POST;
  payload: Posts;
}

interface deletePostPending {
  type: ActionType.DELETE_POSTS_PENDING;
}

interface deletePostSuccess {
  type: ActionType.DELETE_POSTS_SUCCESS;
  payload: number;
}

interface deletePostFail {
  type: ActionType.DELETE_POSTS_FAIL;
  payload: number;
}

interface updatePostPending {
  type: ActionType.UPDATE_POSTS_PENDING;
}

interface updatePostSuccess {
  type: ActionType.UPDATE_POSTS_SUCCESS;
  payload: Omit<Posts, 'username' | 'created_datetime'>;
}

interface updatePostFail {
  type: ActionType.UPDATE_POSTS_FAIL;
  payload: number;
}

export type Action =
  | actionPending
  | actionSuccess
  | actionFail
  | createPostPending
  | createPostSuccess
  | createPostFail
  | selectPost
  | deletePostPending
  | deletePostSuccess
  | deletePostFail
  | updatePostPending
  | updatePostSuccess
  | updatePostFail;

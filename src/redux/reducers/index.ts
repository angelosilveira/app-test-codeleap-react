import { Posts } from '@models/Posts';
import { Action, ActionType } from '../actionTypes/index';

interface State {
  posts: Posts[];
  loading?: boolean;
  loadingCreate?: boolean;
  loadingDelete?: boolean;
  loadingUpdate?: boolean;
  error?: string | number | null;
  post?: Posts | null;
}

const initialState = {
  posts: [],
  loading: false,
  loadingCreate: false,
  loadingDelete: false,
  loadingUpdate: false,
  error: null,
  post: null,
};

const postReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.GET_POSTS_PENDING:
      return {
        loading: true,
        posts: [],
        error: null,
      };
    case ActionType.GET_POSTS_SUCCESS:
      return {
        loading: false,
        posts: action.payload,
        error: null,
      };
    case ActionType.GET_POSTS_FAIL:
      return {
        loading: false,
        error: action.payload,
        posts: state.posts,
      };
    case ActionType.CREATE_POSTS_PENDING:
      return {
        loadingCreate: true,
        posts: state.posts,
        error: null,
      };
    case ActionType.CREATE_POSTS_SUCCESS:
      return {
        loadingCreate: false,
        posts: [...state.posts, action.payload].sort((a, b) =>
          a.created_datetime > b.created_datetime ? -1 : 1
        ),
        error: null,
      };
    case ActionType.CREATE_POSTS_FAIL:
      return {
        loadingCreate: false,
        error: action.payload,
        posts: state.posts,
      };
    case ActionType.SELECT_POST:
      return {
        post: action.payload,
        posts: state.posts,
      };
    case ActionType.DELETE_POSTS_PENDING:
      return {
        loadingDelete: true,
        error: null,
        posts: state.posts,
      };
    case ActionType.DELETE_POSTS_SUCCESS:
      return {
        loadingDelete: false,
        posts: state.posts.filter((st) => st.id !== action.payload),
        error: null,
      };
    case ActionType.DELETE_POSTS_FAIL:
      return {
        loadingDelete: false,
        error: action.payload,
        posts: state.posts,
      };
    case ActionType.UPDATE_POSTS_PENDING:
      return {
        loadingUpdate: true,
        error: null,
        posts: state.posts,
      };
    case ActionType.UPDATE_POSTS_SUCCESS:
      return {
        loadingUpdate: false,
        posts: state.posts.map((st) =>
          st.id === action.payload.id
            ? {
                ...st,
                title: action.payload.title,
                content: action.payload.content,
              }
            : st
        ),
        error: null,
      };
    case ActionType.UPDATE_POSTS_FAIL:
      return {
        loadingUpdate: false,
        error: action.payload,
        posts: state.posts,
      };
    default:
      return state;
  }
};

export default postReducer;

import { createReducer, on, Action } from '@ngrx/store';
import { Post } from 'src/models/post.models';
import * as PostActions from './post.actions';

export interface PostState {
  fetchPostLoading: boolean;
  posts: Post[];
  fetchPostError: string | null;
}

const initialState: PostState = {
  fetchPostLoading: false,
  posts: [],
  fetchPostError: null,
};

export const postsReducer = createReducer(
  initialState,
  on(PostActions.startFetchPost, (state) => ({
    ...state,
    fetchPostLoading: true,
    fetchPostError: null,
  })),
  on(PostActions.successFetchPosts, (state, { posts }) => ({
    ...state,
    posts: posts,
  })),
  on(PostActions.failedFetchPosts, (state, { error }) => ({
    ...state,
    fetchPostError: error,
  }))
);

export const postFeatureKey = 'posts';

export function reducer(state: PostState | undefined, action: Action) {
  return postsReducer(state, action);
}

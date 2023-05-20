import { createAction, props } from '@ngrx/store';
import { Post } from 'src/models/post.models';

const startFetchPostsKey = '[Posts Page] Start Fetch Posts';
const successFetchPostsKey = '[Posts Page] Success Fetch Posts';
const failedFetchPostsKey = '[Posts Page] Failed Fetch Posts';

export const startFetchPost = createAction(startFetchPostsKey);
export const successFetchPosts = createAction(
  successFetchPostsKey,
  props<{ posts: Post[] }>()
);
export const failedFetchPosts = createAction(
  failedFetchPostsKey,
  props<{ error: string }>()
);

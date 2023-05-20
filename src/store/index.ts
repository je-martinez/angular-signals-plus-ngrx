import { PostState, postFeatureKey } from './posts/post.reducer';

export interface AppState {
  [postFeatureKey]: PostState;
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as posts from '../../store/posts/post.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(posts.postFeatureKey, posts.reducer),
  ],
})
export class PostsModule {}

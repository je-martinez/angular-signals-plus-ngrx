import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as posts from '../../store/posts/post.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from '../../store/posts/post.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(posts.postFeatureKey, posts.reducer),
    EffectsModule.forFeature([PostEffects]),
  ],
})
export class PostModule {}

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PostService } from 'src/services/post.service';
import * as PostActions from './post.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';

@Injectable()
export class PostEffects {
  constructor(private action$: Actions, private postService: PostService) {}

  fetchPosts$ = createEffect(() =>
    this.action$.pipe(
      ofType(PostActions.startFetchPost),
      exhaustMap(() =>
        this.postService.getPosts().pipe(
          map((posts) => PostActions.successFetchPosts({ posts })),
          catchError((error) => of(PostActions.failedFetchPosts({ error })))
        )
      )
    )
  );
}

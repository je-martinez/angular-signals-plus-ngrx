import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/index';
import { startFetchPost } from '../store/posts/post.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'angular-signals-plus-ngrx';

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe((data) => {
      console.log({ data });
    });
    this.store.dispatch(startFetchPost());
  }
}

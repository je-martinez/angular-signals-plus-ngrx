import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsModule } from './post/posts.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    PostsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ],
  exports: [CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

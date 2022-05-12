import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {UserComponent} from "./Components/user/user.component";
import {UsersComponent} from "./Components/users/users.component";
import {PostComponent} from "./Components/post/post.component";
import {PostsComponent} from "./Components/posts/posts.component";
import {CommentsComponent} from "./Components/coments/comments.component";
import {CommentComponent} from "./Components/comnent/comment.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
      UserComponent,
      UsersComponent,
      PostComponent,
      PostsComponent,
      CommentsComponent,
      CommentComponent
  ],
  imports: [
    BrowserModule,
      HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

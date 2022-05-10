import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {PostsComponent} from './components/posts/posts.component';
import {RouterModule, Routes} from "@angular/router";
import { FullPostComponent } from './components/full-post/full-post.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentComponent } from './components/comment/comment.component';
import { FullCommentComponent } from './components/full-comment/full-comment.component';

const routes: Routes=[
    {path:'home',component: HomeComponent},
    {path:'posts', component: PostsComponent,
        children:[
            {path:'posts/:id', component:FullPostComponent, canActivate:[]}
        ]},
    {path:'comments', component:CommentsComponent,
        children:[
            {path: 'comments/:id', component: FullCommentComponent, canActivate:[]}
        ]
    }
]

@NgModule({
    declarations: [
        AppComponent,
        PostsComponent,
        FullPostComponent,
        HomeComponent,
        PostComponent,
        CommentsComponent,
        CommentComponent,
        FullCommentComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

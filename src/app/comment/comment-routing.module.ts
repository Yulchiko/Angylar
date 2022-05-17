import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommentsComponent} from "../components/comments/comments.component";
import {FullCommentComponent} from "../components/full-comment/full-comment.component";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {path:'', component: CommentsComponent,
  children:[
    {path:'comments/:id', component: FullCommentComponent, canActivate:[]}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class CommentRoutingModule { }

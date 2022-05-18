import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

import {CommentsComponent, FullCommentComponent} from "../components";

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

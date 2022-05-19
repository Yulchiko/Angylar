import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

import { CommentsComponent, FullCommentComponent } from 'src/app/components';
import {CommentResolver, CommentsResolver} from "../../service";

const routes: Routes = [
  {path:'', component: CommentsComponent, resolve:{Comments:CommentsResolver},
  children:[
    {path:'comments/:id', component: FullCommentComponent, canActivate:[], resolve:{Comment: CommentResolver}}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class CommentRoutingModule { }

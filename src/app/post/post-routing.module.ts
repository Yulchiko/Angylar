import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

import {PostsComponent} from "../components/posts/posts.component";
import {FullPostComponent} from "../components/full-post/full-post.component";


const routes: Routes = [
  {path:'', component: PostsComponent,
  children:[
    {path:'posts/:id', component: FullPostComponent, canActivate:[]}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class PostRoutingModule { }

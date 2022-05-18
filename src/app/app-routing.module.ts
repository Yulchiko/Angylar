import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "./components";

let routes:Routes=[
  {path: '', component: HomeComponent},
  {path: 'users', loadChildren:()=> import('./users/users.module').then(m=>m.UsersModule)},
  {path:'posts', loadChildren:()=> import('./post/post.module').then(m=>m.PostModule)},
  {path:'comments', loadChildren:()=> import('./comment/comment.module').then(m=>m.CommentModule)}
]


@NgModule({
  declarations: [],
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

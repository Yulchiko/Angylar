import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

import {FullPostComponent, PostsComponent } from 'src/app/components';
import { DeactivatorService, PostCheckService, PostResolver, PostsResolver } from 'src/app/service';

const routes: Routes = [
  {path:'', component: PostsComponent, canDeactivate:[DeactivatorService], resolve:{Posts:PostsResolver},
  children:[
    {path:'posts/:id', component: FullPostComponent,resolve:{Post: PostResolver} ,canActivate:[PostCheckService]}
  ]},


];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class PostRoutingModule { }

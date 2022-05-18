import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

import {UsersComponent, FullUserComponent} from "../components";

const routes: Routes = [
  {path: '', component: UsersComponent,
      children:[
      {path:'users/:id', component: FullUserComponent, canActivate:[]}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

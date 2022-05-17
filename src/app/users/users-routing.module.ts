import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

import {UsersComponent} from "../components/users/users.component";
import {FullUserComponent} from "../components/full-user/full-user.component";


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

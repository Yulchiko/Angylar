import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

import {UsersComponent, FullUserComponent} from "src/app/components";
import {UserResolver, UsersResolver} from "../../service";

const routes: Routes = [
  {path: '', component: UsersComponent,resolve:{Users: UsersResolver} ,
      children:[
      {path:'users/:id', component: FullUserComponent, canActivate:[], resolve: {User: UserResolver}}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

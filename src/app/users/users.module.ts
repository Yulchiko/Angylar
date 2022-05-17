import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { UsersRoutingModule } from './users-routing.module';
import {UserComponent} from "../components/user/user.component";
import {UsersComponent} from "../components/users/users.component";
import {FullUserComponent} from "../components/full-user/full-user.component";
import {UserService} from "../service/user.service";



@NgModule({
  declarations: [
      UserComponent,
      UsersComponent,
      FullUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
      HttpClientModule
  ],
    providers:[UserService]
})
export class UsersModule { }

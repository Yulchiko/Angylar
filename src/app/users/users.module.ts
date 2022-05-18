import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { UsersRoutingModule} from './users-routing.module';
import {UserComponent, UsersComponent,  FullUserComponent} from "../components";
import {UserService} from "../service";



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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { UsersRoutingModule} from './users-routing.module';
import {FullUserComponent, UserComponent, UsersComponent } from 'src/app/components';
import {UserService, UserResolver, UsersResolver} from "../../service";

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
    providers:[UserService, UserResolver, UsersResolver]
})
export class UsersModule { }

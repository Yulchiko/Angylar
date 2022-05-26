import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {LoginComponent, RegisterComponent, LoautComponent, CarModelComponent} from './components';
import {RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '', component: LoautComponent, children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'cars', component: CarModelComponent},

    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}

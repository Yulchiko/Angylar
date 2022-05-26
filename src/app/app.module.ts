import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {AppComponent} from './app.component';
import { LoginComponent, RegisterComponent, HeaderComponent, CarModelComponent, LoautComponent  } from './components';
import {AppRoutingModule} from "./app-routing.module";
import {AppInterceptor} from "./app.interceptor";


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
                    HeaderComponent,
               LoautComponent,
        CarModelComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            multi: true,
            useClass: AppInterceptor
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
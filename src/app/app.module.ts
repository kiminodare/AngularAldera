import {CUSTOM_ELEMENTS_SCHEMA, isDevMode, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EmployeeComponent} from './module/employee/employee.component';
import {SharedModule} from "./shared/shared.module";
import {StoreModule} from "@ngrx/store";
import {actionReducerMap} from "./state/app.state";
import {EffectsModule} from "@ngrx/effects";
import {EmployeeEffect} from "./state/effect/employee.effect";
import {RouterSerializer} from "./state/router/RouterSerializer";
import {HttpClientModule} from "@angular/common/http";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EmployeeMockComponent} from './module/employee-mock/employee-mock.component';
import {LoginComponent} from "./module/auth/login/login.component";
import { AddEmployeeComponent } from './module/add-employee/add-employee.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { DetailEmployeeComponent } from './module/detail-employee/detail-employee.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        EmployeeComponent,
        EmployeeMockComponent,
        AddEmployeeComponent,
        DetailEmployeeComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule,
        HttpClientModule,
        StoreModule.forRoot(actionReducerMap),
        EffectsModule.forRoot([EmployeeEffect]),
        StoreRouterConnectingModule.forRoot({
            serializer: RouterSerializer,
        }),
        StoreRouterConnectingModule.forRoot({
            serializer: RouterSerializer,
        }),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: !isDevMode(), // Restrict extension to log-only mode
            autoPause: true, // Pauses recording actions and state changes when the extension window is not open
            trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
            traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
            connectOutsideZone: true // If set to true, the connection is established outside the Angular zone for better performance
        }),
        SweetAlert2Module.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}

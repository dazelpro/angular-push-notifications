import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { GreetingComponent } from './greeting/greeting.component';

const appRoutes: Routes = [
    { path: '',     component:  AuthComponent },
    { path: 'home',  component:  HomeComponent},
    { path: 'greeting',  component:  GreetingComponent},
    { path: '**',   redirectTo: ''}
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class RoutingModule { }

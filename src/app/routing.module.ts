import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { GreetingComponent } from './greeting/greeting.component';
import { AuthService } from './auth.service';
import { AnonymService } from './anonym.service';

const appRoutes: Routes = [
    { path: 'auth', component: AuthComponent, canActivate: [AnonymService] },
    { path: 'home', component: HomeComponent, canActivate: [AuthService] },
    { path: 'greeting', component: GreetingComponent, canActivate: [AuthService] },
    { path: '**', redirectTo: 'auth' }
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

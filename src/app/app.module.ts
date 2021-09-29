import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http'
import { PushNotificationService } from './push-notification.service';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { GreetingComponent } from './greeting/greeting.component';
import { RoutingModule } from './routing.module';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'ngx-avatar';

@NgModule({
    declarations: [
        AppComponent,
        AuthComponent,
        HomeComponent,
        GreetingComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        RoutingModule,
        AvatarModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [PushNotificationService],
    bootstrap: [AppComponent]
})
export class AppModule { }

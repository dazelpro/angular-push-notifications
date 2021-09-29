import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PushNotificationService {

    constructor(private http: HttpClient) { }

    public sendSubscriptionToTheServer(subscription) {
        let user = localStorage.getItem('userName')
        let subscriber = {subscription,user: user}
        return this.http.post('http://localhost:8000/api/notifications/save-subsriber', subscriber)
    }

    getDataSubscriber() {
        return this.http.get('http://localhost:8000/api/notifications/subsriber');
    }
}

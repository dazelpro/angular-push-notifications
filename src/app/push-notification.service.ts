import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const SERVER_URL = 'http://localhost:3000/'

@Injectable({
    providedIn: 'root'
})
export class PushNotificationService {

    constructor(private http: HttpClient) { }

    public sendSubscriptionToTheServer(subscription) {
        let user = localStorage.getItem('userName')
        let subscriber = {subscription,user: user}
        return this.http.post(SERVER_URL+'subscription', subscriber)
    }

    getDataSubscriber() {
        return this.http.get(SERVER_URL+'subscriber');
    }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// const urlBE = 'http://localhost:8000/'
const urlBE = 'https://apps.dazelpro.com/'
@Injectable({
    providedIn: 'root'
})
export class PushNotificationService {

    constructor(private http: HttpClient) { }

    public sendSubscriptionToTheServer(subscription) {
        let user = localStorage.getItem('userName')
        let subscriber = {subscription,user: user}
        return this.http.post(`${urlBE}api/notifications/save-subsriber`, subscriber)
    }

    getDataSubscriber() {
        return this.http.get(`${urlBE}api/notifications/subsriber`);
    }

    sendNotif(data) {
        return this.http.post(`${urlBE}api/notifications/send-notif`, data)
    }
}

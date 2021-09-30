import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { PushNotificationService } from '../push-notification.service';

const VAPID_PUBLIC = 'BFp7ZdtUo2b5ZwuGlw1QjbFRMssxP_Iff4y4-7y8YiScGfUWPxJ9VAMFe0XpGmMTKftcgNr3eBjP3EC0ESyEK_0'
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    name;
    list:Object;

    constructor(
        private pushService: PushNotificationService,
        swPush: SwPush,
    ) {
        this.name = localStorage.getItem('userName').toUpperCase();
        if (swPush.isEnabled) {
            swPush
                .requestSubscription({
                    serverPublicKey: VAPID_PUBLIC,
                })
                .then(subscription => {
                    // send subscription to the server
                    pushService.sendSubscriptionToTheServer(subscription).subscribe()
                })
                .catch(console.error)
        }
    }

    async ngOnInit() {
        await this.pushService.getDataSubscriber().subscribe(async (data) => {
            this.list = data['user'];
            console.log(this.list)
        },(err)=>{
            console.log(err)
        });
    }

    reloadData() {
        this.ngOnInit();
    }

    colek(arr) {
        let data = {
            to: arr,
            from: this.name
        }
        this.pushService.sendNotif(data).subscribe()
    }

}

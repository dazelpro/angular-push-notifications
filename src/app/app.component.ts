import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { PushNotificationService } from './push-notification.service';

const VAPID_PUBLIC = 'BA3Y4EMn38L71aOBPJgtL9PQSsFldcAZXURzYwmaMxDpbmfmpV7ps0B4CEHUmVGxWdW0iPfKSO2nRlXCTwFmiQA'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    title = 'angular-push-notification';

    constructor(
        swPush: SwPush,
        pushService: PushNotificationService
    ) {
        if (swPush.isEnabled) {
            swPush
                .requestSubscription({
                    serverPublicKey: VAPID_PUBLIC,
                })
                .then(subscription => {
                    // send subscription to the server
                    pushService.sendSubscriptionToTheServer(subscription).subscribe()
                    console.log('Hei ' + subscription)
                })
                .catch(console.error)
        }
    }

}

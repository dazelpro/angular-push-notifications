import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { PushNotificationService } from './push-notification.service';

const VAPID_PUBLIC = 'BLP7lrV5IUml-xrLeIT7k7J4vSKf32SP9-DksL_fRcx0dT4ECLG6kL-WEl-etVYCviIsYlbxrddsmwgK6jNG8cE'

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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PushNotificationService } from '../push-notification.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

    name;

    constructor(
        private router: Router,
        private pushService: PushNotificationService,
    ) { }

    ngOnInit(): void {
    }

    async login() {
        if (this.name) {
            // await this.pushService.checkDataSubscriber({ name: this.name }).subscribe(async (data) => {
            //     if (data['user'].length === 0) {
                    localStorage.setItem('userName', this.name);
                    this.router.navigate(['/home']);
            //     } else {
            //         console.log('masukan user yang')
            //     }
            // }, (err) => {
            //     console.log(err)
            // });
        }
    }

}

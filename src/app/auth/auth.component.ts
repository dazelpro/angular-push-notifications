import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

    name;

    constructor() { }

    ngOnInit(): void {
    }

    login() {
        if (this.name) {
            localStorage.setItem('userName', this.name);
        }
    }

}

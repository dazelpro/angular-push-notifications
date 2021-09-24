import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

    name;

    constructor(
        private router : Router,
    ) { }

    ngOnInit(): void {
    }

    login() {
        if (this.name) {
            console.log(this.name)
            localStorage.setItem('userName', this.name);
            this.router.navigate(['/home']);
        }
    }

}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('userName')) {
            return state.url.startsWith('/')
                ? true
                : (this.router.navigate(['/auth']), false);

        } else {
            return state.url.startsWith('/')
                ? (this.router.navigate(['/auth']), false)
                : true;
        }
    }
}

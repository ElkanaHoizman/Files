import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NgRedux } from 'ng2-redux';
import { State } from '../redux/state';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    constructor(private ngRedux: NgRedux<State>, private router: Router) { }

    public canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if(!this.ngRedux.getState().isLoggedIn) {
            this.router.navigate(["/login"]);
            return false;
        }
        return true;
    }
}

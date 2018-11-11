import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { State } from '../redux/state';
import { ActionType } from '../redux/actions';

@Injectable({
    providedIn: 'root'
})
export class LoggedInService {

    public constructor(private ngRedux: NgRedux<State>) { }

    public loggedIn(username: string, password: string): boolean {
        if(username === "Assaf" && password === "1234") { // הדמייה של גישה לשרת ובידקת שם משתמש וסיסמה
            this.ngRedux.dispatch( { type: ActionType.LoggedIn });
            return true;
        }
        return false;
    }

}

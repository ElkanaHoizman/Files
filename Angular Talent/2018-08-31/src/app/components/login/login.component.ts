import { Component } from '@angular/core';
import { LoggedInService } from '../../services/logged-in.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    public username: string;
    public password: string;

    constructor(private loggedInService: LoggedInService) { }

    public login(): void {
        if (this.loggedInService.loggedIn(this.username, this.password)) {
            alert("You are now logged in.");
        }
        else {
            alert("Incorrect username or password");
        }
    }

}

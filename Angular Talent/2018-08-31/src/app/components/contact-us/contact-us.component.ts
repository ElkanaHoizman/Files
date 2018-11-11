import { Component } from '@angular/core';
import { ContactUs } from '../../models/contact-us';

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

    public contactUs = new ContactUs();

    public send(): void {
        alert(JSON.stringify(this.contactUs));
    }
}

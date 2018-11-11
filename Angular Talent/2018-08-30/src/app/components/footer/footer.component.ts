import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: ` <p>
                    All Rights Reserved
                    <span>&copy;</span>
                </p>`,
    styles: ['p { margin: 0; }', 'span { color: blue; }'],
})
export class FooterComponent {
}

import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-thumbnail',
    templateUrl: './thumbnail.component.html',
    styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent {

    @Input()
    public imageSource: string;

    @Input("width")
    public imageWidth: number; 

    @Input("height")
    public imageHeight: number;

    @Output("enter")
    public imageEnter = new EventEmitter<string>();

    @Output("leave")
    public imageLeave = new EventEmitter();

    public imageMouseEnter(): void {
        this.imageEnter.emit(this.imageSource);
    }

    public imageMouseLeave(): void {
        this.imageLeave.emit();
    }
}

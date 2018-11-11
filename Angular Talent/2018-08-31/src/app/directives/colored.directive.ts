import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
    selector: '[colored]'
})
export class ColoredDirective implements OnInit {

    // DI = Dependency Injection
    public constructor(private elementRef: ElementRef, private renderer: Renderer2) {

    }

    public ngOnInit(): void {
        this.renderer.setStyle(this.elementRef.nativeElement, "color", this.getRandomColor());
    }

    private getRandomColor(): string {
        let red = Math.floor(256 * Math.random());
        let green = Math.floor(256 * Math.random());
        let blue = Math.floor(256 * Math.random());
        let color = `rgb(${red},${green},${blue})`;
        return color;
    }



}

import { Component, OnChanges, SimpleChanges, OnInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, DoCheck, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    public discount: number;
    public currDate: Date;
    public endingWord: string;
    public imgWidth: number;
    public dynamicStyling;
    public isWinter: boolean;

    public ngOnInit(): void { // Invokes once in the begining of the component

        this.discount = 7;
        this.currDate = new Date();
        this.endingWord = "Cool!";
        this.imgWidth = 300;
        this.dynamicStyling = { "yellowish": true, "bolder": true };
        this.isWinter = this.currDate.getMonth() < 3 ||  this.currDate.getMonth() > 9;

        console.log("ngOnInit");
    }

    public decrease() : void {
        this.imgWidth -= 10;
    }

    public reset() : void {
        this.imgWidth = 300;
    }

    public increase(event : Event) : void {
        console.log(event);
        this.imgWidth += 10;
    }



    public constructor() {
        console.log("Constructor");
    }

    public ngOnChanges(changes: SimpleChanges): void { // When angular changes some data binding in this component.
        console.log("ngOnChanges", changes);
    }

    public ngDoCheck(): void {
        console.log("ngDoCheck");
    }
    public ngAfterContentInit(): void {
        console.log("ngAfterContentInit");
    }
    public ngAfterContentChecked(): void {
        console.log("ngAfterContentChecked");
    }
    public ngAfterViewInit(): void {
        console.log("ngAfterViewInit");
    }
    public ngAfterViewChecked(): void {
        console.log("ngAfterViewChecked");
    }
    public ngOnDestroy(): void {
        console.log("ngOnDestroy");
    }
}

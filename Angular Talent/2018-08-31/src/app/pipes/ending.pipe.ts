import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'ending'
})
export class EndingPipe implements PipeTransform {

    public transform(value: string, args?: string): any {

        let suffix = args ? args : "";

        let rnd = Math.floor(Math.random() * 4);
        switch(rnd) {
            case 0: return "Nice!" + suffix;
            case 1: return "Super!" + suffix;
            case 2: return ":-)" + suffix;
            case 3: return value + suffix;
        }
    }

}

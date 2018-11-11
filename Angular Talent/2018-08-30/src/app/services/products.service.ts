import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    private count: number = 1;

    public constructor(private httpClient: HttpClient) {}

    public getTopProduct(): Product {
        for (let i = 1; i <= 2000000000; i++);
        let p = new Product(10, "Falafel", 20.5, 100);
        return p;
    }

    public getTopProductAsync(successCallback: (product: Product) => void, errorCallback: (err: Error) => void): void {
        setTimeout(() => {
            try {
                let p = new Product(10, "Falafel", 20.5, 100);
                successCallback(p);
            }
            catch (err) {
                errorCallback(err);
            }
        }, 3000);
    }

    public getTopProductAsync2(): Promise<Product> {
        const promise = new Promise<Product>((resolve, reject) => {
            setTimeout(() => {
                try {
                    let p = new Product(10, "Falafel", 20.5, 100);
                    resolve(p);
                }
                catch (err) {
                    reject(err);
                }
            }, 3000);
        });
        return promise;
    }

    public getTopProductAsync3(): Observable<Product> {
        const observable = Observable.create((observer: Observer<Product>) => {
            setInterval(() => {
                try {
                    let p = new Product(this.count * 10, "Falafel " + this.count, this.count * 5 , this.count * 100);
                    this.count++;
                    observer.next(p);
                    
                    // observer.complete();
                }
                catch (err) {
                    observer.error(err);
                }
            }, 500);
        });
        return observable;
    }

    public getAllProductsAsync(): Observable<Product[]> {
        return this.httpClient.get<Product[]>("/assets/json/products.json");
    }

}

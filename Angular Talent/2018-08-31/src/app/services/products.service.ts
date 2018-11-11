import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { HttpClient } from '@angular/common/http';
import { NgRedux } from 'ng2-redux';
import { State } from '../redux/state';
import { ActionType } from '../redux/actions';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    private count: number = 1;

    public constructor(private httpClient: HttpClient, private ngRedux: NgRedux<State>) { }

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
                    let p = new Product(this.count * 10, "Falafel " + this.count, this.count * 5, this.count * 100);
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

    public getAllProductsAsync2(): void {
        this.httpClient.get<Product[]>("/assets/json/products.json").subscribe(products => {
            this.ngRedux.dispatch({ type: ActionType.GotAllProduct, payload: products });
        });
    }

    public addOneProduct(product: Product): void {
        // // Adding that product to the server:
        // this.httpClient.post<Product>("http://www.myrestservice.com", product).subscribe(product => {
        //     this.ngRedux.dispatch({ type: ActionType.AddNewProduct, payload: product });
        // });

        this.ngRedux.dispatch({ type: ActionType.AddNewProduct, payload: product });
    }

    // public getOneProductsAsync(id: number): Observable<Product> {
    //     return this.httpClient.get<Product>("/assets/json/products.json")
    // }

}

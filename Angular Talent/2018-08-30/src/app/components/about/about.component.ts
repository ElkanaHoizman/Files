import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {

    public product: Product;
    private subscription: Subscription;

    constructor(private productsService: ProductsService) { }

    public ngOnInit() {
        // this.product = this.productsService.getTopProduct();

        //this.productsService.getTopProductAsync(p => this.product = p, err => alert(err.message));

        // this.productsService.getTopProductAsync2()
        //     .then(p => this.product = p)
        //     .catch(err => alert(err.message));

        this.subscription = this.productsService.getTopProductAsync3().subscribe(p => this.product = p, err => alert(err.message), () => console.log("Done."));
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}

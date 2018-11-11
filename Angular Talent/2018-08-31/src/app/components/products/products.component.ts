import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';
import { NgRedux } from 'ng2-redux';
import { State } from '../../redux/state';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    public products: Product[];
    // public hoveredImage: string;

    constructor(private productsService: ProductsService, private ngRedux: NgRedux<State>) { }

    ngOnInit() {
        // this.productsService.getAllProductsAsync().subscribe(products => this.products = products);

        this.ngRedux.subscribe(() => {
            this.products = this.ngRedux.getState().products;
        });

        if(this.ngRedux.getState().products) {
            this.products = this.ngRedux.getState().products;
        }
        else {
            this.productsService.getAllProductsAsync2();
        }
    }

    // public thumbnailEnter(imageSource: string): void {
    //     this.hoveredImage = imageSource;
    // }

    // public thumbnailLeave(): void {
    //     this.hoveredImage = "";
    // }
}

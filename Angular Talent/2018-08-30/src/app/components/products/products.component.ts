import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    public products: Product[];

    constructor(private productsService: ProductsService) { }

    ngOnInit() {
        this.productsService.getAllProductsAsync().subscribe(products => this.products = products);
    }

}

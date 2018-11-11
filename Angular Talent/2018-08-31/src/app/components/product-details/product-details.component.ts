import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    private product: Product;

    constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService) { }

    public ngOnInit(): void {

        // this.activatedRoute.params.subscribe(params => {
        //     this.productsService.getAllProductsAsync().subscribe(products => {
        //         let id = parseInt(params.id);
        //         this.product = products.find(p => p.id == id);
        //     });
        // });

        let id = parseInt(this.activatedRoute.snapshot.params.id);
        this.productsService.getAllProductsAsync().subscribe(products => {
            this.product = products.find(p => p.id == id);
        });
    }
}
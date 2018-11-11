import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    public constructor(private productsService: ProductsService) { }

    public addProductForTestingRedux() {
        this.productsService.addOneProduct(this.getRandomProduct());
    }

    private getRandomProduct(): Product {
        let letters: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
        let id: number = Math.floor(Math.random() * 77 + 1);
        let name: string = "";
        for (let i = 0; i < 5; i++) {
            name += letters[Math.floor(Math.random() * letters.length)];
        }
        let price: number = parseFloat((Math.random() * 200).toFixed(2));
        let stock: number = Math.floor(Math.random() * 200);
        let product: Product = new Product(id, name, price, stock);
        return product;
    }

}

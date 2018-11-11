import { Product } from "../models/product";

// npm install redux ng2-redux

// State = Application current state regarding entire app data.
export class State {
    
    public products: Product[];
    public isLoggedIn: boolean;

//    public topProduct: Product;
//    public lastError: string;
    
}
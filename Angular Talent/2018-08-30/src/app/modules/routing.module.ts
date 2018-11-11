import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router"
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { Page404Component } from '../components/page404/page404.component';
import { ProductsComponent } from '../components/products/products.component';

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "products", component: ProductsComponent },
    { path: "suppliers", loadChildren: "./suppliers.module#SuppliersModule" },
    { path: "about", component: AboutComponent },
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "**", component: Page404Component }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    declarations: []
})
export class RoutingModule { }

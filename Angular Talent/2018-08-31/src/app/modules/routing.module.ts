import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router"
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { Page404Component } from '../components/page404/page404.component';
import { ProductsComponent } from '../components/products/products.component';
import { ProductDetailsComponent } from '../components/product-details/product-details.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';
import { AuthGuardService } from '../services/auth-guard.service';
import { LoginComponent } from '../components/login/login.component';

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "products", component: ProductsComponent, canActivate: [AuthGuardService] },
    { path: "products/:id", component: ProductDetailsComponent },
    { path: "suppliers", loadChildren: "./suppliers.module#SuppliersModule" },
    { path: "about", component: AboutComponent },
    { path: "contact-us", component: ContactUsComponent },
    { path: "login", component: LoginComponent },
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

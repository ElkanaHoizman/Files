import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutComponent } from '../components/layout/layout.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HomeComponent } from '../components/home/home.component';
import { HeadlineComponent } from '../components/headline/headline.component';
import { EndingPipe } from '../pipes/ending.pipe';
import { FormsModule } from "@angular/forms";
import { ColoredDirective } from '../directives/colored.directive';
import { AboutComponent } from '../components/about/about.component';
import { RouterModule } from "@angular/router";
import { RoutingModule } from './routing.module';
import { MenuComponent } from '../components/menu/menu.component';
import { Page404Component } from '../components/page404/page404.component';
import { HttpClientModule } from "@angular/common/http";
import { ProductsComponent } from '../components/products/products.component';
import { ProductDetailsComponent } from '../components/product-details/product-details.component';
import { ThumbnailComponent } from '../components/thumbnail/thumbnail.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';
import { NgReduxModule, NgRedux } from "ng2-redux";
import { State } from '../redux/state';
import { reducer } from '../redux/reducer';
import { LoginComponent } from '../components/login/login.component';

@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        HeadlineComponent,
        EndingPipe,
        ColoredDirective,
        AboutComponent,
        MenuComponent,
        Page404Component,
        ProductsComponent,
        ProductDetailsComponent,
        ThumbnailComponent,
        ContactUsComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        RoutingModule,
        HttpClientModule,
        NgReduxModule
    ],
    exports: [
        HeadlineComponent
    ],
    providers: [],
    bootstrap: [LayoutComponent]
})
export class AppModule {
    public constructor(ngRedux: NgRedux<State>) {
        ngRedux.configureStore(reducer, new State());
    }
 }

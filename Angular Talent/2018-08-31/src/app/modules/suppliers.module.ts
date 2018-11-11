import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuppliersSellersComponent } from '../components/suppliers-sellers/suppliers-sellers.component';
import { SuppliersWholesalersComponent } from '../components/suppliers-wholesalers/suppliers-wholesalers.component';
import { SuppliersRetailersComponent } from '../components/suppliers-retailers/suppliers-retailers.component';

const routes: Routes = [
    { path: "", component: SuppliersSellersComponent, children: [
        { path: "wholesalers", component: SuppliersWholesalersComponent },
        { path: "retailers", component: SuppliersRetailersComponent },
    ] }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [
        SuppliersSellersComponent,
        SuppliersWholesalersComponent,
        SuppliersRetailersComponent
    ],
    providers: []
})
export class SuppliersModule { }

import { RouterModule, Routes } from '@angular/router';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: "ecommerce", component: EcommerceComponent }
];

@NgModule({
    imports : [ RouterModule.forRoot(routes)],
    exports : [ RouterModule]
})
export class AppRoutes {}

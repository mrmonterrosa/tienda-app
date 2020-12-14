import { ProductoComponent } from './components/producto/producto.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'producto', component: ProductoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'producto' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

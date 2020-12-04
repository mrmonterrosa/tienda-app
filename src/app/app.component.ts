import { ProductoService } from './services/producto.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'carlos';
  productos : any[] = [];

  constructor(private productService : ProductoService) {
    this.getProductos();
  }

  getProductos() {
    this.productService.getProductos().subscribe(data => {
      console.log(data);
    });
  }


}

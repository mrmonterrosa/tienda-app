import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ProductoModel } from './../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http : HttpClient) {

  }

  getProductos() {
    return this.http.get<ProductoModel[]>('http://localhost:8096/productos');
  }

  createProducto(producto : ProductoModel) {
    return this.http.post('http://localhost:8096/productos',producto);
  }

  modificarProducto(producto : ProductoModel) {
    return this.http.put('http://localhost:8096/productos',producto);
  }

  eliminarProducto(id:number) {
    return this.http.delete(`http://localhost:8096/productos/${id}`);
  }

}

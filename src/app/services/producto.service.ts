import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http : HttpClient) {

  }

  getProductos() {
    return this.http.get('http://localhost:8096/productos');
  }

}

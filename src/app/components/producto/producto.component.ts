import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ProductoService } from './../../services/producto.service';
import { ProductoModel } from './../../models/producto.model';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})

export class ProductoComponent implements OnInit {

  productos : ProductoModel[] = [];
  producto: ProductoModel;

  constructor(private productoService : ProductoService) {
    this.clear();
  }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos() {
    this.productoService.getProductos().subscribe(data => {
      this.productos = data;
    });
  }

  crearModel(f:NgForm) {
    //console.log(f);
    if(f.valid) {
      if(this.producto.id == null) {
        this.productoService.createProducto(this.producto).subscribe(data => {
          console.log("Crear",data);
          this.clear();
          this.getProductos();
        });
        return;
      }

      this.productoService.modificarProducto(this.producto).subscribe(data =>{
        console.log("Modificar", data);
        this.clear();
      });
    }

  }

  eliminar() {
    this.productoService.eliminarProducto(this.producto.id).subscribe(data => {
      console.log(data);
      this.getProductos();
    })
  }

  clear() {
    this.producto = new ProductoModel();
  }

  cargaData(producto: ProductoModel) {
    this.producto = producto;
  }

}

import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/product.model';
import { ApiService } from '../services/api.service';
import { productsList } from './products.mock';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  productsList: any[] =[];

  constructor(private _apiService: ApiService){}
  
  ngOnInit(): void {
    this._apiService.getAllProducts().subscribe((data: IProduct[])=>{
      console.log(data)
      this.productsList = data;
    })
  }

}

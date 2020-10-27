import { Component, OnInit } from '@angular/core';
import productsData from '../../../products.json';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  Products: any = productsData;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private productsAPI = 'http://localhost:4200/assets/item-data.json';
  product: any = {};

  constructor(private http: Http) { 
    console.log('test');
    this.getCatalogEntryView();
    this.getProduct();

  }

getProduct() {
  return this.http.get(this.productsAPI)
    .map((res: Response) => res.json())
}

getCatalogEntryView() {
  this.getProduct().subscribe(product => {
    console.log(product);
    this.product = product
  })
}


  ngOnInit() {
  }

}

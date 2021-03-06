import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private productsAPI = 'http://localhost:4200/assets/item-data.json';
  product: any = {};
  theMainImage = '../../assets/blank.gif';
  quantity = 1;

  constructor(private http: Http) { 

    this.getCatalogEntryView();
    this.getProduct();

  }

  getProduct() {
    return this.http.get(this.productsAPI)
      .map((res: Response) => res.json())
  }

  getCatalogEntryView() {
    this.getProduct().subscribe(product => {
      this.product = product
    })
  }

  mainImage(image) {
    this.theMainImage = image || this.product.CatalogEntryView[0].Images[0].PrimaryImage[0].image;
  }

  quantityDecrease() {
    if(this.quantity > 0){
      this.quantity--;
    }
  }
  quantityIncrease() {
    this.quantity++;
  }


  ngOnInit() {

  }
  ngAfterViewInit() {
  }

}

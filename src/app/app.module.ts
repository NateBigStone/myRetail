import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';



import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { ReviewsComponent } from './product/reviews/reviews.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HeaderComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Ng2CarouselamosModule
  ],
  providers: [ProductComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

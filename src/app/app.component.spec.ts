import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ReviewsComponent } from './product/reviews/reviews.component';
import { HeaderComponent} from './header/header.component';
import { FooterComponent} from './footer/footer.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ProductComponent,
        ReviewsComponent,
        HeaderComponent,
        FooterComponent
      ],
    }).compileComponents();
  }));
  xit('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

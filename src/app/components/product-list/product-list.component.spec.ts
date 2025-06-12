import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { CartServiceService } from '../../services/cart-service.service';
import { of } from 'rxjs';

// Mock Dessert data
const mockDesserts = [
  {
    name: 'Cake',
    price: 10,
    quantity: 1,
    category: 'Baked',
    image: {
      thumbnail: 'thumb.jpg',
      mobile: 'mobile.jpg',
      tablet: 'tablet.jpg',
      desktop: 'desktop.jpg'
    }
  }
];

// Mock CartService
class MockCartService {
  getAllProducts = jasmine.createSpy().and.returnValue(of(mockDesserts));
}

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListComponent],
      providers: [{ provide: CartServiceService, useClass: MockCartService }]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

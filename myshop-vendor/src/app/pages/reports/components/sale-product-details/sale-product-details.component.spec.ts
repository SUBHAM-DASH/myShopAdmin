import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleProductDetailsComponent } from './sale-product-details.component';

describe('SaleProductDetailsComponent', () => {
  let component: SaleProductDetailsComponent;
  let fixture: ComponentFixture<SaleProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleProductDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSmartTableComponent } from './custom-smart-table.component';

describe('CustomSmartTableComponent', () => {
  let component: CustomSmartTableComponent;
  let fixture: ComponentFixture<CustomSmartTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomSmartTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomSmartTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

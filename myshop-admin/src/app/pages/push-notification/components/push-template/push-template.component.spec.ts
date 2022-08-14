import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushTemplateComponent } from './push-template.component';

describe('PushTemplateComponent', () => {
  let component: PushTemplateComponent;
  let fixture: ComponentFixture<PushTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PushTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PushTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

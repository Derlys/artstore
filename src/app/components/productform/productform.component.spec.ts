import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductformComponent } from './admin.component';

describe('AdminComponent', () => {
  let component: ProductformComponent;
  let fixture: ComponentFixture<ProductformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductformComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

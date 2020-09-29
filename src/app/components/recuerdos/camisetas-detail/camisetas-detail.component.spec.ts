import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisetasDetailComponent } from './camisetas-detail.component';

describe('CamisetasDetailComponent', () => {
  let component: CamisetasDetailComponent;
  let fixture: ComponentFixture<CamisetasDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamisetasDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamisetasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

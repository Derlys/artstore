import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisetasMainComponent } from './camisetas-main.component';

describe('CamisetasMainComponent', () => {
  let component: CamisetasMainComponent;
  let fixture: ComponentFixture<CamisetasMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamisetasMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamisetasMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

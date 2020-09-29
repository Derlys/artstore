import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisetasMasInfoComponent } from './camisetas-mas-info.component';

describe('CamisetasMasInfoComponent', () => {
  let component: CamisetasMasInfoComponent;
  let fixture: ComponentFixture<CamisetasMasInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamisetasMasInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamisetasMasInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

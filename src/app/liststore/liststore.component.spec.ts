import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListstoreComponent } from './liststore.component';

describe('ListstoreComponent', () => {
  let component: ListstoreComponent;
  let fixture: ComponentFixture<ListstoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListstoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

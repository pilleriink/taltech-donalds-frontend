import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductmodComponent } from './productmod.component';

describe('ProductmodComponent', () => {
  let component: ProductmodComponent;
  let fixture: ComponentFixture<ProductmodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductmodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

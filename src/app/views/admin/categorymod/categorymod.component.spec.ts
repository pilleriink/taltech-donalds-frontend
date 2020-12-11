import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CategorymodComponent} from './categorymod.component';

describe('CategorymodComponent', () => {
  let component: CategorymodComponent;
  let fixture: ComponentFixture<CategorymodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorymodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorymodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationmodComponent } from './locationmod.component';

describe('LocationmodComponent', () => {
  let component: LocationmodComponent;
  let fixture: ComponentFixture<LocationmodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationmodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

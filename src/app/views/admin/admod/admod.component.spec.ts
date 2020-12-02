import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmodComponent } from './admod.component';

describe('AdmodComponent', () => {
  let component: AdmodComponent;
  let fixture: ComponentFixture<AdmodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

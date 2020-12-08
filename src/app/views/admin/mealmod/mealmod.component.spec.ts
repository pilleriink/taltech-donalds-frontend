import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MealmodComponent} from './mealmod.component';

describe('MealmodComponent', () => {
  let component: MealmodComponent;
  let fixture: ComponentFixture<MealmodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealmodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

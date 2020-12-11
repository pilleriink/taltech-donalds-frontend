import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {AdSliderComponent} from './ad-slider.component';

describe('AdSliderComponent', () => {
  let component: AdSliderComponent;
  let fixture: ComponentFixture<AdSliderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

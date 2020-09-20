import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FingerfoodComponent } from './fingerfood.component';

describe('FingerfoodComponent', () => {
  let component: FingerfoodComponent;
  let fixture: ComponentFixture<FingerfoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FingerfoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FingerfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

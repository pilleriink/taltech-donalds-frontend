import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {HeaderComponent} from './header.component';
import {RouterTestingModule} from '@angular/router/testing';
import {CategoryService} from '../../category.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let categoryService;
  let getCategoriesSpy;

  beforeEach(waitForAsync(() => {
    categoryService = jasmine.createSpyObj('CategoryService', ['getCategories']);
    getCategoriesSpy = categoryService.getCategories.and.returnValue();
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [RouterTestingModule.withRoutes([])],
      providers: [{provide: CategoryService, useValue: categoryService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

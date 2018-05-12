import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRhsComponent } from './display-rhs.component';

describe('DisplayRhsComponent', () => {
  let component: DisplayRhsComponent;
  let fixture: ComponentFixture<DisplayRhsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayRhsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayRhsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCandidatComponent } from './display-candidat.component';

describe('DisplayCandidatComponent', () => {
  let component: DisplayCandidatComponent;
  let fixture: ComponentFixture<DisplayCandidatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCandidatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

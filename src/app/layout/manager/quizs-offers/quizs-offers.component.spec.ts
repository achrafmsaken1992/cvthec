import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizsOffersComponent } from './quizs-offers.component';

describe('QuizsOffersComponent', () => {
  let component: QuizsOffersComponent;
  let fixture: ComponentFixture<QuizsOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizsOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizsOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

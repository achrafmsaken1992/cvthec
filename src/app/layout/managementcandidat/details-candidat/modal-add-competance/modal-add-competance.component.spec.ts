import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddCompetanceComponent } from './modal-add-competance.component';

describe('ModalAddCompetanceComponent', () => {
  let component: ModalAddCompetanceComponent;
  let fixture: ComponentFixture<ModalAddCompetanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAddCompetanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddCompetanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

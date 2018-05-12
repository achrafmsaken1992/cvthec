import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUpdateCompetanceComponent } from './modal-update-competance.component';

describe('ModalUpdateCompetanceComponent', () => {
  let component: ModalUpdateCompetanceComponent;
  let fixture: ComponentFixture<ModalUpdateCompetanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalUpdateCompetanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUpdateCompetanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

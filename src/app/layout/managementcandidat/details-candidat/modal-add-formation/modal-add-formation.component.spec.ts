import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddFormationComponent } from './modal-add-formation.component';

describe('ModalAddFormationComponent', () => {
  let component: ModalAddFormationComponent;
  let fixture: ComponentFixture<ModalAddFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAddFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUpdateFormationComponent } from './modal-update-formation.component';

describe('ModalUpdateFormationComponent', () => {
  let component: ModalUpdateFormationComponent;
  let fixture: ComponentFixture<ModalUpdateFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalUpdateFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUpdateFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

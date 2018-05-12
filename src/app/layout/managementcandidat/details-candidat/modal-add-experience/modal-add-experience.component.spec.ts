import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddExperienceComponent } from './modal-add-experience.component';

describe('ModalAddExperienceComponent', () => {
  let component: ModalAddExperienceComponent;
  let fixture: ComponentFixture<ModalAddExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAddExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

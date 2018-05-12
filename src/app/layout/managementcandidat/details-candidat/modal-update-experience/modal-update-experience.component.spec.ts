import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUpdateExperienceComponent } from './modal-update-experience.component';

describe('ModalUpdateExperienceComponent', () => {
  let component: ModalUpdateExperienceComponent;
  let fixture: ComponentFixture<ModalUpdateExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalUpdateExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUpdateExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUpdateLangueComponent } from './modal-update-langue.component';

describe('ModalUpdateLangueComponent', () => {
  let component: ModalUpdateLangueComponent;
  let fixture: ComponentFixture<ModalUpdateLangueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalUpdateLangueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUpdateLangueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

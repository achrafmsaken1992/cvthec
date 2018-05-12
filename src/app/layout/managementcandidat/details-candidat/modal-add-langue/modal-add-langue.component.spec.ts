import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddLangueComponent } from './modal-add-langue.component';

describe('ModalAddLangueComponent', () => {
  let component: ModalAddLangueComponent;
  let fixture: ComponentFixture<ModalAddLangueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAddLangueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddLangueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

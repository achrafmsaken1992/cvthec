import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePasswordRhComponent } from './update-password.component';

describe('UpdatePasswordRhComponent', () => {
  let component: UpdatePasswordRhComponent;
  let fixture: ComponentFixture<UpdatePasswordRhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePasswordRhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePasswordRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

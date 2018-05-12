import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUrhComponent } from './profile.component';

describe('ProfileUrhComponent', () => {
  let component: ProfileUrhComponent;
  let fixture: ComponentFixture<ProfileUrhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileUrhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileUrhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

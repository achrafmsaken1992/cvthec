import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementManagerComponent } from './management-manager.component';

describe('ManagementManagerComponent', () => {
  let component: ManagementManagerComponent;
  let fixture: ComponentFixture<ManagementManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

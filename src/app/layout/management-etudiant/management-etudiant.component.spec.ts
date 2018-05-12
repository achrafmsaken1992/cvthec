import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementEtudiantComponent } from './management-etudiant.component';

describe('ManagementEtudiantComponent', () => {
  let component: ManagementEtudiantComponent;
  let fixture: ComponentFixture<ManagementEtudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementEtudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

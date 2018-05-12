import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagerieManagerComponent } from './messagerie-manager.component';

describe('MessagerieManagerComponent', () => {
  let component: MessagerieManagerComponent;
  let fixture: ComponentFixture<MessagerieManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagerieManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagerieManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

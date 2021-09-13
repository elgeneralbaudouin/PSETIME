import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenceEmployeComponent } from './presence-employe.component';

describe('PresenceEmployeComponent', () => {
  let component: PresenceEmployeComponent;
  let fixture: ComponentFixture<PresenceEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresenceEmployeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresenceEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

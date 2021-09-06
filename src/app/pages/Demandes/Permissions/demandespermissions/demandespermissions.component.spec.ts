import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesPermissionsComponent } from './demandespermissions.component';

describe('DemandesPermissionsComponent', () => {
  let component: DemandesPermissionsComponent;
  let fixture: ComponentFixture<DemandesPermissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandesPermissionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandesPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

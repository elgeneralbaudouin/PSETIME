import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesRevendicationsComponent } from './demandesrevendications.component';

describe('DemandesRevendicationsComponent', () => {
  let component: DemandesRevendicationsComponent;
  let fixture: ComponentFixture<DemandesRevendicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandesRevendicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandesRevendicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

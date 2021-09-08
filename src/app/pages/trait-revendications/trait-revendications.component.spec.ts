import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitRevendicationsComponent } from './trait-revendications.component';

describe('TraitRevendicationsComponent', () => {
  let component: TraitRevendicationsComponent;
  let fixture: ComponentFixture<TraitRevendicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraitRevendicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraitRevendicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

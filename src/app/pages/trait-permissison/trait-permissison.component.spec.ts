import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitPermissisonComponent } from './trait-permissison.component';

describe('TraitPermissisonComponent', () => {
  let component: TraitPermissisonComponent;
  let fixture: ComponentFixture<TraitPermissisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraitPermissisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraitPermissisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

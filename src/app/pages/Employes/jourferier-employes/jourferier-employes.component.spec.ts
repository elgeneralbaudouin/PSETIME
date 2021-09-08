import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourferierEmployesComponent } from './jourferier-employes.component';

describe('JourferierEmployesComponent', () => {
  let component: JourferierEmployesComponent;
  let fixture: ComponentFixture<JourferierEmployesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JourferierEmployesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JourferierEmployesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

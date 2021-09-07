import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TousLesEmployesComponent } from './tous-les-employes.component';

describe('TousLesEmployesComponent', () => {
  let component: TousLesEmployesComponent;
  let fixture: ComponentFixture<TousLesEmployesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TousLesEmployesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TousLesEmployesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

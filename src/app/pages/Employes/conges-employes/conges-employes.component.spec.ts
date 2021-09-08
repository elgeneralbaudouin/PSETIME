import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongesEmployesComponent } from './conges-employes.component';

describe('CongesEmployesComponent', () => {
  let component: CongesEmployesComponent;
  let fixture: ComponentFixture<CongesEmployesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongesEmployesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongesEmployesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

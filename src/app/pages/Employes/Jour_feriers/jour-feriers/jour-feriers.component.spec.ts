import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourFeriersComponent } from './jour-feriers.component';

describe('JourFeriersComponent', () => {
  let component: JourFeriersComponent;
  let fixture: ComponentFixture<JourFeriersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JourFeriersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JourFeriersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

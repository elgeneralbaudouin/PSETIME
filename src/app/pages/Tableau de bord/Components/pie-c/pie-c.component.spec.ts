import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieCComponent } from './pie-c.component';

describe('PieCComponent', () => {
  let component: PieCComponent;
  let fixture: ComponentFixture<PieCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

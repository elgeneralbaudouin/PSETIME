import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieBComponent } from './pie-b.component';

describe('PieBComponent', () => {
  let component: PieBComponent;
  let fixture: ComponentFixture<PieBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieDComponent } from './pie-d.component';

describe('PieDComponent', () => {
  let component: PieDComponent;
  let fixture: ComponentFixture<PieDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

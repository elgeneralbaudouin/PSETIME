import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevendicationsComponent } from './revendications.component';

describe('RevendicationsComponent', () => {
  let component: RevendicationsComponent;
  let fixture: ComponentFixture<RevendicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevendicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevendicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

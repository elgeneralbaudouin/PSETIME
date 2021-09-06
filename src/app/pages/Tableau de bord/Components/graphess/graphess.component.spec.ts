import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphessComponent } from './graphess.component';

describe('GraphessComponent', () => {
  let component: GraphessComponent;
  let fixture: ComponentFixture<GraphessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

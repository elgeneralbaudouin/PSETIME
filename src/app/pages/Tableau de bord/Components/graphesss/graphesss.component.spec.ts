import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphesssComponent } from './graphesss.component';

describe('GraphesssComponent', () => {
  let component: GraphesssComponent;
  let fixture: ComponentFixture<GraphesssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphesssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphesssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

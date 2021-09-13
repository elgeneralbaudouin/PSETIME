import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupeEmployeComponent } from './groupe-employe.component';

describe('GroupeEmployeComponent', () => {
  let component: GroupeEmployeComponent;
  let fixture: ComponentFixture<GroupeEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupeEmployeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupeEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

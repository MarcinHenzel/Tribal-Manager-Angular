import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TribalAttackPlanComponent } from './tribal-attack-plan.component';

describe('TribalAttackPlanComponent', () => {
  let component: TribalAttackPlanComponent;
  let fixture: ComponentFixture<TribalAttackPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TribalAttackPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TribalAttackPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

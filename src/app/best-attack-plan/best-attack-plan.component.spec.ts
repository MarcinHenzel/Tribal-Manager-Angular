import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestAttackPlanComponent } from './best-attack-plan.component';

describe('BestAttackPlanComponent', () => {
  let component: BestAttackPlanComponent;
  let fixture: ComponentFixture<BestAttackPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestAttackPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestAttackPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

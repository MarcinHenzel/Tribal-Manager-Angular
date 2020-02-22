import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepetitionCounterComponent } from './repetition-counter.component';

describe('RepetitionCounterComponent', () => {
  let component: RepetitionCounterComponent;
  let fixture: ComponentFixture<RepetitionCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepetitionCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepetitionCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TribalAssignOrdersComponent } from './tribal-assign-orders.component';

describe('TribalAssignOrdersComponent', () => {
  let component: TribalAssignOrdersComponent;
  let fixture: ComponentFixture<TribalAssignOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TribalAssignOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TribalAssignOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TribalNoblesComponent } from './tribal-nobles.component';

describe('TribalNoblesComponent', () => {
  let component: TribalNoblesComponent;
  let fixture: ComponentFixture<TribalNoblesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TribalNoblesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TribalNoblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

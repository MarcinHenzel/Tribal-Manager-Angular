import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportDialogCounterComponent } from './export-dialog-counter.component';

describe('ExportDialogCounterComponent', () => {
  let component: ExportDialogCounterComponent;
  let fixture: ComponentFixture<ExportDialogCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportDialogCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportDialogCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionIndependentComponent } from './option-independent.component';

describe('OptionIndependentComponent', () => {
  let component: OptionIndependentComponent;
  let fixture: ComponentFixture<OptionIndependentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionIndependentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionIndependentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

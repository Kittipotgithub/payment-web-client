import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionAdditionalLogComponent } from './option-additional-log.component';

describe('OptionAdditionalLogComponent', () => {
  let component: OptionAdditionalLogComponent;
  let fixture: ComponentFixture<OptionAdditionalLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionAdditionalLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionAdditionalLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

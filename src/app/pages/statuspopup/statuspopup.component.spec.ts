import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatuspopupComponent } from './statuspopup.component';

describe('StatuspopupComponent', () => {
  let component: StatuspopupComponent;
  let fixture: ComponentFixture<StatuspopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatuspopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatuspopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopydateComponent } from './copydate.component';

describe('CopydateComponent', () => {
  let component: CopydateComponent;
  let fixture: ComponentFixture<CopydateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopydateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopydateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

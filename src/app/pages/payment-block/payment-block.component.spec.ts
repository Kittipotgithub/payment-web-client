import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentBlockComponent } from './payment-block.component';

describe('PaymentBlockComponent', () => {
  let component: PaymentBlockComponent;
  let fixture: ComponentFixture<PaymentBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

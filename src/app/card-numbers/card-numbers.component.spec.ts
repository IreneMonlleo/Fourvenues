import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNumbersComponent } from './card-numbers.component';

describe('CardNumbersComponent', () => {
  let component: CardNumbersComponent;
  let fixture: ComponentFixture<CardNumbersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardNumbersComponent]
    });
    fixture = TestBed.createComponent(CardNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnTimeComponent } from './btn-time.component';

describe('BtnTimeComponent', () => {
  let component: BtnTimeComponent;
  let fixture: ComponentFixture<BtnTimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnTimeComponent]
    });
    fixture = TestBed.createComponent(BtnTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

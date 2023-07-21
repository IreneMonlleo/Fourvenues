import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgresBarComponent } from './progres-bar.component';

describe('ProgresBarComponent', () => {
  let component: ProgresBarComponent;
  let fixture: ComponentFixture<ProgresBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgresBarComponent]
    });
    fixture = TestBed.createComponent(ProgresBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

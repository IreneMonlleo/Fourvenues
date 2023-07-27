import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesTableComponent } from './cities-table.component';

describe('CitiesTableComponent', () => {
  let component: CitiesTableComponent;
  let fixture: ComponentFixture<CitiesTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitiesTableComponent]
    });
    fixture = TestBed.createComponent(CitiesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

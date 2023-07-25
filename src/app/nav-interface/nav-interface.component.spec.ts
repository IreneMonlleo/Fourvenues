import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavInterfaceComponent } from './nav-interface.component';

describe('NavInterfaceComponent', () => {
  let component: NavInterfaceComponent;
  let fixture: ComponentFixture<NavInterfaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavInterfaceComponent]
    });
    fixture = TestBed.createComponent(NavInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

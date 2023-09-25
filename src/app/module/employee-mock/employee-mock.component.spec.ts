import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeMockComponent } from './employee-mock.component';

describe('EmployeeMockComponent', () => {
  let component: EmployeeMockComponent;
  let fixture: ComponentFixture<EmployeeMockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeMockComponent]
    });
    fixture = TestBed.createComponent(EmployeeMockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

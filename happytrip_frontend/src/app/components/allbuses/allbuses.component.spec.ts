import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllbusesComponent } from './allbuses.component';

describe('AllbusesComponent', () => {
  let component: AllbusesComponent;
  let fixture: ComponentFixture<AllbusesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllbusesComponent]
    });
    fixture = TestBed.createComponent(AllbusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

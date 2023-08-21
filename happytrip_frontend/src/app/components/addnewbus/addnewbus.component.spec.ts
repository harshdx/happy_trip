import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewbusComponent } from './addnewbus.component';

describe('AddnewbusComponent', () => {
  let component: AddnewbusComponent;
  let fixture: ComponentFixture<AddnewbusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddnewbusComponent]
    });
    fixture = TestBed.createComponent(AddnewbusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

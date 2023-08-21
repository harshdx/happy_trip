import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewvoucherComponent } from './addnewvoucher.component';

describe('AddnewvoucherComponent', () => {
  let component: AddnewvoucherComponent;
  let fixture: ComponentFixture<AddnewvoucherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddnewvoucherComponent]
    });
    fixture = TestBed.createComponent(AddnewvoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

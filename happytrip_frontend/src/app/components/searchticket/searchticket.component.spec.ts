import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchticketComponent } from './searchticket.component';

describe('SearchticketComponent', () => {
  let component: SearchticketComponent;
  let fixture: ComponentFixture<SearchticketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchticketComponent]
    });
    fixture = TestBed.createComponent(SearchticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersSubAComponent } from './customers-sub-a.component';

describe('CustomersSubAComponent', () => {
  let component: CustomersSubAComponent;
  let fixture: ComponentFixture<CustomersSubAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersSubAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersSubAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

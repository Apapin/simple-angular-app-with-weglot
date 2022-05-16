import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersSubSubAComponent } from './customers-sub-sub-a.component';

describe('CustomersSubSubAComponent', () => {
  let component: CustomersSubSubAComponent;
  let fixture: ComponentFixture<CustomersSubSubAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersSubSubAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersSubSubAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

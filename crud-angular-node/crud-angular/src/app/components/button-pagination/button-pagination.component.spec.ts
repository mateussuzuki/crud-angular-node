import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPaginationComponent } from './button-pagination.component';

describe('ButtonPaginationComponent', () => {
  let component: ButtonPaginationComponent;
  let fixture: ComponentFixture<ButtonPaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonPaginationComponent]
    });
    fixture = TestBed.createComponent(ButtonPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

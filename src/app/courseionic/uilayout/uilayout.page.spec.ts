import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UilayoutPage } from './uilayout.page';

describe('UilayoutPage', () => {
  let component: UilayoutPage;
  let fixture: ComponentFixture<UilayoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UilayoutPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UilayoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UicomponentsPage } from './uicomponents.page';

describe('UicomponentsPage', () => {
  let component: UicomponentsPage;
  let fixture: ComponentFixture<UicomponentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UicomponentsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UicomponentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

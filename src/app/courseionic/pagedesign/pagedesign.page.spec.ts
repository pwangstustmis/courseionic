import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagedesignPage } from './pagedesign.page';

describe('PagedesignPage', () => {
  let component: PagedesignPage;
  let fixture: ComponentFixture<PagedesignPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagedesignPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagedesignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

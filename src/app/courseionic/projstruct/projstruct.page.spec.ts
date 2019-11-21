import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjstructPage } from './projstruct.page';

describe('ProjstructPage', () => {
  let component: ProjstructPage;
  let fixture: ComponentFixture<ProjstructPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjstructPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjstructPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

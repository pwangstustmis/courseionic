import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallionicPage } from './installionic.page';

describe('InstallionicPage', () => {
  let component: InstallionicPage;
  let fixture: ComponentFixture<InstallionicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallionicPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallionicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

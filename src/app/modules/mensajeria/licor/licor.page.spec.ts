import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicorPage } from './licor.page';

describe('LicorPage', () => {
  let component: LicorPage;
  let fixture: ComponentFixture<LicorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

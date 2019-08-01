import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantArticuloPage } from './mant-articulo.page';

describe('MantArticuloPage', () => {
  let component: MantArticuloPage;
  let fixture: ComponentFixture<MantArticuloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantArticuloPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantArticuloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

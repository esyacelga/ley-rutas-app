import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantTipoArticuloPage } from './mant-tipo-articulo.page';

describe('MantTipoArticuloPage', () => {
  let component: MantTipoArticuloPage;
  let fixture: ComponentFixture<MantTipoArticuloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantTipoArticuloPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantTipoArticuloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

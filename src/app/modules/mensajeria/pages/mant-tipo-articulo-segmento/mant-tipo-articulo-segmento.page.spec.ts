import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantTipoArticuloSegmentoPage } from './mant-tipo-articulo-segmento.page';

describe('MantTipoArticuloSegmentoPage', () => {
  let component: MantTipoArticuloSegmentoPage;
  let fixture: ComponentFixture<MantTipoArticuloSegmentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantTipoArticuloSegmentoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantTipoArticuloSegmentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

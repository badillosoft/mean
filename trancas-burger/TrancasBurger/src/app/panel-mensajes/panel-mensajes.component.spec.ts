import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelMensajesComponent } from './panel-mensajes.component';

describe('PanelMensajesComponent', () => {
  let component: PanelMensajesComponent;
  let fixture: ComponentFixture<PanelMensajesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelMensajesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelMensajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

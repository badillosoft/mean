import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburguesaNuevaComponent } from './hamburguesa-nueva.component';

describe('HamburguesaNuevaComponent', () => {
  let component: HamburguesaNuevaComponent;
  let fixture: ComponentFixture<HamburguesaNuevaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HamburguesaNuevaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HamburguesaNuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

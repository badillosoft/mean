import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiPaginaComponent } from './mi-pagina.component';

describe('MiPaginaComponent', () => {
  let component: MiPaginaComponent;
  let fixture: ComponentFixture<MiPaginaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiPaginaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

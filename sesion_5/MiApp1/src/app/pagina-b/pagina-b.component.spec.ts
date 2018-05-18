import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaBComponent } from './pagina-b.component';

describe('PaginaBComponent', () => {
  let component: PaginaBComponent;
  let fixture: ComponentFixture<PaginaBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

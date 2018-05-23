import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerListComponent } from './burger-list.component';

describe('BurgerListComponent', () => {
  let component: BurgerListComponent;
  let fixture: ComponentFixture<BurgerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurgerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurgerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

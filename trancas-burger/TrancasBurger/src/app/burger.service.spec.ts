import { TestBed, inject } from '@angular/core/testing';

import { BurgerService } from './burger.service';

describe('BurgerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BurgerService]
    });
  });

  it('should be created', inject([BurgerService], (service: BurgerService) => {
    expect(service).toBeTruthy();
  }));
});

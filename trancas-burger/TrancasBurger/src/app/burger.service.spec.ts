import { TestBed, inject } from '@angular/core/testing';

import { BurgerService } from './burger.service';

describe('Comprobando que BurgerService funcione bien', () => {
  let burgerService: BurgerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BurgerService]
    });
  });

  it('should be created', inject([BurgerService], (service: BurgerService) => {
    burgerService = service;
    expect(service).toBeTruthy();
  }));

  it('Crear una nueva hamburguesa', async () => {
    const result = await burgerService.create({
      _id: "batman-burger",
      name: "Batman Burger",
      description: "Sin descripción",
      price: 100,
      image: "http://placehold.it/400x400"
    });

    expect(result._id).toBe("batman-burger");
  });

  let burgers = [];

  it('Obtener todas las hamburguesas', async () => {
    burgers = await burgerService.all();
    expect(burgers instanceof Array).toBeTruthy();
  });

  it('Checar si [burgers] contine a "batman-burger"', () => {
    expect(burgers.findIndex(b => b._id === "batman-burger"))
      .toBeGreaterThanOrEqual(0);
  });
});

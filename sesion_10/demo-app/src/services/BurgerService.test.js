import * as BurgerService from './BurgerService';

describe("Probando BurgerService", () => {

    it("Obtener todas las burgers", async () => {
        const burgers = await BurgerService.all();

        expect(burgers instanceof Array).toBeTruthy();
    });

    it("Obtener todas las burgers", async () => {
        const burgers = await BurgerService.all();

        expect(burgers instanceof Array).toBeTruthy();
    });
});
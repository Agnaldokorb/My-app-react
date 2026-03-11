import { soma } from './soma';

describe('soma', () => {
    it('deve retornar a soma de dois números', () => {
        expect(soma(2, 3)).toBe(5);
        expect(soma(-1, 1)).toBe(0);
        expect(soma(0, 0)).toBe(0);
    });
});
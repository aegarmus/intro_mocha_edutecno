import { strict as assert } from 'assert';
import { sumarDosNumeros } from '../function.js';


describe('Prueba función que suma dos números', () => {
    it('Debería retornar 5 cuando sumamos 2 y 3', () => {
        assert.strictEqual(sumarDosNumeros(2, 3), 5);
    });

    it('Debería retornar -1 cuando sumanos 1 y -2', () => {
        assert.strictEqual(sumarDosNumeros(1, -2), -1);
    });

    it('Debería arrojar un error al sumar 2 y a', () => {
        assert.throws(() => sumarDosNumeros(2, 'a'), Error);
    });
    
    it('Debería arrojar un error al sumar 2 númerico y "9" como string', () => {
        assert.throws(() => sumarDosNumeros(2, "9"), Error);
    });
})











/*
Tipos de Testing:

1. Manual -> Testeo bruto o de fuerza de bruta

//Mocha parte desde aqui:

Testing programdado:

//Aplican para cualquier estructura de código (salvo vistas)
1. Test Unitarios -> Probar las funcinoalidades aislados
2. Test de Integración -> Prueban las funcionalidades en conjunto


//Es Exclusivo de Backend
3. Estres de servidores -> Prueba la resistencia, velocidad y eficiencia de un servidor


//Es Exclusivo del Frontend
4. e2e - End to End - Extremo a Extremo
*/
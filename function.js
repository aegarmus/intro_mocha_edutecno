
export const sumarDosNumeros = (a, b) => {

    if(typeof a !== 'number' || typeof b !== 'number') throw new Error('Ambos elementos deben ser un número')

    return a + b
}
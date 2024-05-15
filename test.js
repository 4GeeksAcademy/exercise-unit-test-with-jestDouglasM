const { sum,fromEuroToYen,fromEuroToDollar,fromEuroToLibras, fromDollarToYen, fromYenToPound} = require('./app.js');
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

describe('conversion entre monedas y Verificar el tipo de dato',() =>{
    test("Covertir Euro a Dolar y verificar que el tipo de dato sea un numero", function() {
        const euro = 10;
        const expected = euro * 1.07;
        const dolares = fromEuroToDollar(euro);
        expect(dolares).toBe(expected); 
        expect(typeof dolares).toBe('number');
    })

    test("Covertir Euro a Yen y verificar que el tipo de dato sea un numero",function(){
        const euro = 10;
        const expected = euro * 156.5;
        const yenes = fromEuroToYen(euro);
        expect(yenes).toBe(expected);
        expect(typeof yenes).toBe('number');
    })

    test("Covertir Euro a libras y verificar que el tipo de dato sea un numero",function(){
        const euro = 10
        const expected = euro * 0.87;
        const libras = fromEuroToLibras(euro);
        expect(libras).toBe(expected);
        expect(typeof libras).toBe('number');
    })

    test("Covertir Dolar a Yenes y verificar que el tipo de dato sea un numero", function(){
        const dolares = 10;
        const euros = dolares / 1.07;
        const expected = euros * 156.5;
        const yenes = fromDollarToYen(dolares);
        expect(yenes).toBe(expected);
        expect(typeof yenes).toBe('number');
    })

    test("Covertir Yenes a Libras y verificar que el tipo de dato sea un numero", function(){
        const yen = 10;
        const expected = (yen * (0.87 / 156.5));
        const libras = fromYenToPound(yen);
        expect(libras).toBeCloseTo(expected);
        expect(typeof libras).toBe('number');
    })
  })

 


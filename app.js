const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

let euroJPY = 156.5;
let euroUSD = 1.07;
let euroGBP = 0.87;

//funciones de cambio de euro a otras monedas
const fromEuroToDollar = (euro) =>{
    return (euro * euroUSD);
}

const fromEuroToYen = (euro) =>{
    return (euro * euroJPY);
}

const fromEuroToLibras = (euro) =>{
    return (euro * euroGBP);
}

const fromDollarToYen = (dolar) =>{
    return dolar * euroJPY / euroUSD;
}

const fromYenToPound = (yen) =>{
    return yen * euroGBP / euroJPY;
}
module.exports = {sum,fromEuroToDollar,fromEuroToYen,fromEuroToLibras,fromDollarToYen,fromYenToPound};



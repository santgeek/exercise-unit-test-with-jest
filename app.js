/*const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}*/

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen (dollar) {
    let dollarToEuro = dollar / oneEuroIs.USD 
    return dollarToEuro * oneEuroIs.JPY;
}

function fromEuroToDollar (euro) {
    return euro * oneEuroIs.USD;
}

function fromYenToPound (yen) {
    let yenToEuro = yen / oneEuroIs.JPY;
    return yenToEuro * oneEuroIs.GBP;
}

console.log(fromDollarToYen(10))
console.log(fromEuroToDollar(10))
console.log(fromYenToPound(10))

// We include fromEuroToDollar here as well because it needs to be exported
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }
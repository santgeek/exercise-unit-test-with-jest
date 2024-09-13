// Import the function sum from the app.js file
//const { sum, fromDollarToYen } = require('./app.js');
const {fromEuroToDollar, fromYenToPound, fromDollarToYen} = require('./app.js');

//1462.6168224299065
//10.700000000000001
//0.05559105431309904

test("10 euros equivalen a 10.700000000000001 dólares", () => {
    let result = fromEuroToDollar(10)
    //let dolars = 10 * oneEuroIs.USD
    expect(result).toBe(10.700000000000001)
});

test("10 dólares equivalen a 1462.6168224299065 yenes", () => {
    let result = fromDollarToYen(10)
    //let dolars = 10 * oneEuroIs.JPY
    expect(result).toBe(1462.6168224299065)
});

test("10 yenes son 0.05559105431309904 libras", () => {
    let result = fromYenToPound(10)
    //let pounds = 10 * oneEuroIs.GBP
    expect(result).toBe(0.05559105431309904)
});


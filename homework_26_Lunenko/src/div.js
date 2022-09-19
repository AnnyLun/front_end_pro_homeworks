const {Calculator} = require("./calculator")
class Division extends Calculator {
    constructor(numberOne, numberTwo) {
        super (numberOne, numberTwo)
    }
    div (numberOne, numberTwo) {
        let calculation = numberOne / numberTwo;
        return calculation;
}
}
const calculator = new Division;
console.log(calculator.div(28, 2));
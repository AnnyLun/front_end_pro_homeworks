const {Calculator} = require("./calculator")
class Subtraction extends Calculator {
    constructor(numberOne, numberTwo) {
        super (numberOne, numberTwo)
    }
    sub (numberOne, numberTwo) {
        let calculation = numberOne - numberTwo;
        return calculation;
}
}
const calculator = new Subtraction;
console.log(calculator.sub(12, 5));
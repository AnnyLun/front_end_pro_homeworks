const {Calculator} = require("./calculator")
class Multilly extends Calculator {
    constructor(numberOne, numberTwo) {
        super (numberOne, numberTwo)
    }
    mult (numberOne, numberTwo) {
        let calculation = numberOne * numberTwo;
        return calculation;
}
}
const calculator = new Multilly;

console.log(calculator.mult(7, 4));
const {Calculator} = require("./calculator")
class Addition extends Calculator {
    constructor(numberOne, numberTwo) {
        super (numberOne, numberTwo)
    }
    add (numberOne, numberTwo) {
        let calculation = numberOne + numberTwo;
        return calculation;
}
}
const calculator = new Addition;
console.log(calculator.add(10, 2));
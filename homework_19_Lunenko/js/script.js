// Сеть фастфудов предлагает несколько видов гамбургеров:

// маленький (5$, 20 калорий)
// большой (10$, 40 калорий)


// Гамбургер может быть с одним из нескольких видов начинок:

// сыром (+ 1$, + 20 калорий)
// салатом (+ 2$, + 5 калорий)
// картофелем (+ 1,5$ , + 10 калорий)

                                                                                                           
// Можно добавить добавки:

// посыпать приправой (+ 1,5$, 0 калорий)
// полить майонезом (+ 2$, + 5 калорий).

let HAMBURGER = [
    {
        param: "small", 
        price: 5, 
        calorie: 20
    },
    {
        param: "large", 
        price: 10, 
        calorie: 40
    },
    {
        param: "cheese", 
        price: 1, 
        calorie: 20
    },
    {
        param: "salad", 
        price: 2, 
        calorie: 5
    },
    {
        param: "fries", 
        price: 1.5, 
        calorie: 5
    },
    {
        param: "mayo", 
        price: 2, 
        calorie: 5
    },
    {
        param: "spice", 
        price: 1.5, 
        calorie: 0
    }
];
console.log(HAMBURGER);

class Hamburger {
    constructor(param, staffing, topping) {
        this.param = param;
        this.staffing = staffing;
        this.topping = topping;
    }
}

let mySize;
let prices = 0;
let calories = 0;
let newProduct;

let request = (obj) => {
    mySize = new Hamburger(this.param, this.staffing, this.topping);
    do {
        param = prompt(`Який гамбургер бажаєте (small / large)?`).toLowerCase().replaceAll(" ", "");
        obj.map((obj) => {
            if (obj.param === param) 
                mySize.param = param;
        });
    } while (param != "small" && param != "large");
    do {
        param = prompt(`Яку начинку додати (cheese / salad / fries)?`).toLowerCase().replaceAll(" ", "");
        obj.map((obj) => {
            if (obj.param === param) 
                mySize.staffing = param;
        });
    } while (param != "cheese" && param != "salad" && param != "fries");
    do {
        param = prompt(`Чи додати (spice / mayo)?`).toLowerCase().replaceAll(" ", "");
        obj.map((obj) => {
            if (obj.param === param) 
                mySize.topping = param;
        });
    } while (param != "spice" && param != "mayo");
    console.log(mySize);
}
request(HAMBURGER);

let sum = () => {
    prices += burgerPrices;
    calories += burgerCalories;
    return prices, calories;
}

let getPrices = (obj) => {
    if (obj.param === mySize.param || obj.param === mySize.staffing || obj.param === mySize.topping) {
        burgerPrices = obj.price;
        burgerCalories = obj.calorie;
        sum(burgerPrices, burgerCalories);
    }
}

HAMBURGER.map((obj) => {
    newProduct = obj;
    getPrices(newProduct);
});

console.log(prices);
console.log(calories);



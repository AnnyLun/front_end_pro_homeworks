// Три товара с категории vegetables:
// cabbage = 8;
// avocado = 30;
// tomato = 10;

// Три товара с категории fruits:
// grapes = 20;
// raspberry = 25;
// coconut = 50;

// Задача: в зависимости от выбранного пользователем периода (winter или summer), категории (vegetables или fruits), товара с выбранной категории (vegetables: cabbage, avocado, tomato или fruits: grapes, raspberry, coconut), и количества единиц выбранного товара – посчитать финальную стоимость покупки и вывести всю информацию о выбранном товаре в html.

// Порядок действий:

// Запрашиваем у пользователя период, в которой он совершает покупку: winter или summer.
// Если пользователь вводит winter, то финальное значение стоимости покупки будет умножаться на 2
// Если пользователь вводит summer, то финальное значение стоимости покупки будет умножаться на 0.8
// Важно: 
// Продолжаем запрашивать у пользователя название периода до тех пор, пока не будет введено слово ‘winter’ либо ‘summer’.
// Введенное пользователем значение может быть в любом регистре и с любым количеством пробелов до/внутри слова. 

//Запрашиваем у пользователя категорию, с которой он будет далeе выбирать товар: vegetables или fruits.
// Важно: 
// Продолжаем запрашивать у пользователя название категории до тех пор, пока не будет введено слово ‘vegetables’ либо ‘fruits’.
// Введенное пользователем значение может быть в любом регистре и с любым количеством пробелов до/внутри слова. 

//Запрашиваем у пользователя товар в зависимости от выбранной ранее категории.
// Для категории vegetables пользователь может ввести название товара cabbage или avocado или tomato.
// Для категории fruits пользователь может ввести название товара grapes или raspberry или coconut.
// Важно: 
// Продолжаем запрашивать у пользователя название товара до тех пор, пока не будет введено название одного из трех допустимых товаров.
// Введенное пользователем значение может быть в любом регистре и с любым количеством пробелов до/внутри слова.

// Запрашиваем у пользователя количество единиц ранее выбранного товара.
// Важно:
// Введенное значение должно быть числом и не меньше 1.
// Выводим в html информацию о выбранном товаре с финальной стоимостью покупки. Вариант вывода:
debugger;

totalPrice = 0;
coef = 1;
nameOfProduct = 0;
i=0;
vegetablesList = ["cabbage", "avocado", "tomato"];
vegetablesPrice = [8, 30, 10];
fruitsList = ["grapes", "raspberry", "coconut"];
fruitsPrice = [20, 25, 50];
// Season
do {
    season = prompt("Winter or summer is it now?").replaceAll(" ", "").toLowerCase();
    switch (season) {
        case "winter":
            coef = 2;
            break;
        case "summer":
            coef = 0.8;
    }
} while (season !== "winter" && season !== "summer");

// Vegetables or fruits
do {
    kindOfProduct = prompt("Do you choose vegetables or fruits?").replaceAll(" ", "").toLowerCase();
} while (kindOfProduct !== "vegetables" && kindOfProduct !== "fruits");

//What from vegetable or what from fruits?
switch (kindOfProduct) {
    case "vegetables":
        do {
            nameOfProduct = prompt(`Pls insert the name of prefered vegetables (cabbage, avocado, tomato)?`).replaceAll(` `, ``).toLowerCase();
            vegetableKey = vegetablesList.indexOf(nameOfProduct);
            productPrice = vegetablesPrice[vegetableKey];
        } while (vegetablesList.indexOf(nameOfProduct) < 0);
        break;
    case "fruits":
        do {
            nameOfProduct = prompt(`Pls insert the name of prefered fruits (grapes, raspberry, coconut)?`).replaceAll(` `, ``).toLowerCase();
            fruitsKey = fruitsList.indexOf(nameOfProduct);
            productPrice = fruitsPrice[fruitsKey];
        } while (fruitsList.indexOf(nameOfProduct) < 0);
        break;
}
//Quantity of Product?
do {
    numb = parseInt(prompt(`Pls insert the quantity of ${nameOfProduct}?`).replaceAll(" ", ""));
} while (isNaN(numb) || numb < 1);

//Final price
totalPrice = productPrice * coef * numb;

//Variant_1

    if (kindOfProduct === "vegetables") {
        productImg = `<img src="img/vegetables/${nameOfProduct}.svg" alt="${nameOfProduct}" </img>`;
    } else {
        productImg = `<img src="img/fruits/${nameOfProduct}.svg" alt="${nameOfProduct}" </img>`;
    }

    document.write(`
    <div class = "text">
    ${productImg}
    <p>Selected period: <b>${season}.</b></p>
    <p>Selected category: <b>${kindOfProduct}.</b></p>
    <p>Selected product: <b>${nameOfProduct}.</b></p>
    <p>Quantity of necessary product of: <b>${numb}pcs.</b></p>
    <p>Total price:<b>${totalPrice}UAH.</b></p>
    </div>`);

//Variant_2
// img_1 = "img/vegetables/cabbage.svg";
// img_2 = "img/vegetables/avocado.svg";
// img_3 = "img/vegetables/tomato.svg";
// img_4 = "img/fruits/coconut.svg";
// img_5 = "img/fruits/grapes.svg";
// img_6 = "img/fruits/raspberry.svg";

// switch (nameOfProduct) {
//     case "cabbage":
//         document.write(`<div class = "img">
//         <img src = ${img_1}>
//         </div>`);
//         break;
//     case "avocado":
//         document.write(`<div class = "img">
//         <img src = ${img_2}>
//         </div>`);
//         break;
//     case "tomato":
//         document.write(`<div class = "img">
//         <img src = ${img_3}>
//         </div>`);
//         break;
//     case "coconut":
//         document.write(`<div class = "img">
//         <img src = ${img_4}>
//         </div>`);
//         break;
//     case "grapes":
//         document.write(`<div class = "img">
//         <img src = ${img_5}>
//         </div>`);
//         break;
//     case "raspberry":
//         document.write(`<div class = "img">
//         <img src = ${img_6}>
//         </div>`);
//         break;
// }
            
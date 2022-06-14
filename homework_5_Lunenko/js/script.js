// 1) С помощью prompt запрашиваем у пользователя что он хочет сделать (+ - / *). Спрашиваем до тех пор, пока он не введет допустимое значение

// 2) Запрашиваем сколько операндов он хочет использовать. Это должно быть ЧИСЛО больше 1 и меньше 7. Спрашиваем пока пользователь не введет допустимое значение

// 3) Запрашиваем у пользователя каждый операнд. Это должно быть ЧИСЛО. Запрашиваем пока пользователь не введет допустимое значение

// 4) С помощью alert или console.log выводим финальный результат действия (+ - / *).
debugger;
do { 
    operationSign = prompt('Какую операцию будем проводить (+, -, /, *)?').replaceAll(" ", "");
} while (operationSign != '+' && operationSign != '-'  && operationSign != '/' && operationSign != '*'); 
console.log(operationSign);
do {
    operationQuantity = prompt('Cколько операндов будет использоваться для вычислений (ввести число больше 1 и меньше 7)?').replaceAll(" ", "");
} while (operationQuantity <= 1 || operationQuantity >= 7 || isNaN(operationQuantity));
console.log(operationQuantity);

x=[];
for (i = 1; i <= operationQuantity; i++) {
    operantNumber = +parseInt(prompt(`Ввести ${i} числo:`));
    x.push(operantNumber); 
    console.log(operantNumber);
}


total = x[0];
for (i = 1; i < operationQuantity; i++) {
    switch (operationSign) {
        case "+":
            total += x[i];
            break;
        case "-":
            total -= x[i];
            break;
        case "*":
            total *= x[i];
            break;
        case "/":
            total /= x[i];
            break;
}
console.log(total);
}
alert(`Ответ получаем: ${total}!`);


debugger;
a = +prompt("Сколько будет 2+2?");
firstNumb = 0;
if (a === 4) {
    a = firstNumb + 10; 
} else {
    a = firstNumb - 0; 
}
console.log(a);
b = prompt("Солнце встает на востоке?");
if (b === "Да") {
    a = a + 10;
} 
else {
    a = a - 0;
}
console.log(a);
с = prompt("Сколько будет 5 / 0?");
if (с === "Нельзя" || c === "Делить на 0 нельзя" || c === "Ничего") {
    a = a + 10;
} else {
    a = a - 0;
}
console.log(a);
d = prompt("Какого цвета небо?");
if (d === "Голубой") {
    a = a + 10;
} else {
    a = a - 0;
}
console.log(a);
f = +prompt("Какой правильный ответ на главный вопрос жизни, вселенной и всего такого?");
if (f === 42) {
    a = a + 10;
} else {
    a = a - 0;
}
console.log(a);
alert(a);
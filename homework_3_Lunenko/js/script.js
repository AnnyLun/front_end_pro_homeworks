debugger;
a = parseInt(prompt("Сколько будет 2+2?").replaceAll(" ", ""));
firstNumb = 0;
if (a == 4) {
    a = firstNumb + 10; 
} else {
    a = firstNumb - 0; 
}
console.log(a);
b = prompt("Солнце встает на востоке?").replaceAll(" ", "");
if (b === "Да") {
    a = a + 10;
} 
else {
    a = a - 0;
}
console.log(a);
с = prompt("Сколько будет 5 / 0?").replaceAll(" ", "");
if (с === "Нельзя" || c === "Ничего") {
    a = a + 10;
} else {
    a = a - 0;
}
console.log(a);
d = prompt("Какого цвета небо?").replaceAll(" ", "");
if (d === "Голубой") {
    a = a + 10;
} else {
    a = a - 0;
}
console.log(a);
f = parseInt(prompt("Какой правильный ответ на главный вопрос жизни, вселенной и всего такого?").replaceAll("", " "));
if (f == 42) {
    a = a + 10;
} else {
    a = a - 0;
}
console.log(a);
alert(a);
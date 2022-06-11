// debugger;
sum = 0;
a = parseInt(prompt("Сколько будет 2+2?").replaceAll(" ", ""));
if (a == 4) {
    sum += 10;
} 
console.log(sum);
b = prompt("Солнце встает на востоке?").replaceAll(" ", "");
if (b.toLowerCase() === "да") {
    sum += 10;
} 
console.log(sum);
// Variant one
str = prompt("Сколько будет 5 / 0?").replaceAll(" ", "");
if (str.toLowerCase() === "нельзя") {
    sum += 10;
} 
console.log(sum);
//Variant two
// str = prompt("Сколько будет 5 / 0?");
// if (isNaN(str)) {
//     sum += 10;
// }
// console.log(sum);
d = prompt("Какого цвета небо?").replaceAll(" ", "");
if (d.toLowerCase() === "голубой") {
    sum += 10;
}
console.log(sum);
f = parseInt(prompt("Какой правильный ответ на главный вопрос жизни, вселенной и всего такого?").replaceAll(" ", ""));
if (f == 42) {
    sum += 10;
}
console.log(sum);
alert(sum);
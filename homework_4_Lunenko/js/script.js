// Ввести с клавиатуры a и b, где а меньше b (проверку написать кодом). Запустить цикл перебора от a до b с шагом h (ввод с клавиатуры). Посчитать сумму факториалов* чисел которые попадаются во время перебора.

// Ввести с клавиатуры a и b, где а меньше b (проверку написать кодом).
debugger;
do {
    a = parseInt(prompt("Ввести число а").replaceAll(" ", ""));
} while (a === 0 || isNaN(a) || a < 0 );
do {
    b = parseInt(prompt(`Ввести число b, где ${a} меньше b`).replaceAll(" ", ""));
} while (b === 0 || isNaN(b) || a >= b);
do {
    h = parseInt(prompt(`Ввести шаг h, где h < ${b} - ${a}`).replaceAll(" ", ""));
} while (isNaN(h) || h > b - a);

sumFactolials = 0;
for (step = a; step <= b; step += h) {
        factorial = 1;
        console.log(`Перебор от ${a} до ${b} равен ${step}`);
        for (i = 1; i <= step; i++) {
            factorial *= i;
            console.log(`Число состоит из ${factorial}`);
        }
    sumFactolials += factorial;
    console.log(`Сумма факториалов ${sumFactolials}`);
}

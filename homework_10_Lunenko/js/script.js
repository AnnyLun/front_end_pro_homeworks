// Перепишите функцию main следующим образом:
// Если аргументы a и b не переданы, они равны по умолчанию 2 и 3 соответсвенно.
// Если аргумент c передан и он является функцией, то он выполняется после вызова функции sum, и в качестве входящего значение принимает результат работы функции sum.
// Функция main должна возвращать результат функции аргумента c, если он есть, либо результат функции sum.

function main(a = 2, b = 3, c) { 
  debugger;
  let total = getSum(a, b)
  if (typeof c === 'function') {
    return c (total);
  } else {
    return total;
  }
}

function getSum(a, b) { 
  debugger;
    return a + b; 
}

function getMathPow(x) {
  debugger;
  return Math.pow(x, 2);
}

console.log(main(10, 5, getMathPow));





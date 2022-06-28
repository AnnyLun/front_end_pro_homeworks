// Написать функцию, которая принимает как аргумент(параметр) два массива 
// и сравнивает суммы всех ЧИСЛОВЫХ элементов. 
// Тот массив, сумма которого большая – должен вернутся функцией.
a = [1,2,3, 'hello',4,5];
b = [1,2,3, true, 4, undefined, 6];

function getSum(x) {
  debugger;
  let sum = 0;
  for (i = 0; i < x.length; i++) {
    if (!isNaN(x[i]) ) {
     sum += x[i];
    }
  }
  return sum;
} 

function outputArr(arr1, arr2) {
  debugger;
let sum1 = getSum(arr1);
let sum2 = getSum(arr2);

if (sum1 > sum2) return arr1
else 
  return arr2

// return sum1 > sum2 ?  arr1: arr2;
}
console.log(outputArr(a, b));


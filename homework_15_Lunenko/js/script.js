// Написать функцию assignObjects(obj1, obj2), 
// которая принимает аргументами 2 объекта и возвращает новый, 
// который состоит из свойств обоих объектов (склеить). 
// Если свойство повторяется, то взять значение второго объекта

// assignObjects({ x: 10, y: 20 }, { z: 30 }) вывод { x:10, y:20, z: 30 }
// assignObjects({ x: 10 }, { x: 20, y: 30 }) вывод { x:20, y: 30 }
object1 = { 
    x: 10, 
    y: 20 
  }
object2 = { 
    z: 30 
}
object3 = {
  x: 10
}
object4 = {
  x: 20, 
  y: 30
}


function assignObjects(obj1, obj2) {
return Object.assign (obj1, obj2);
}
console.log(assignObjects(object1, object2));

// function assignObjects(obj1, obj2) {
// return Object.assign (obj1, obj2);
// }

// console.log(assignObjects(object3, object4));
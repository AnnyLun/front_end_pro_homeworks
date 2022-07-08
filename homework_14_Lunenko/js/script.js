// Создать объект с такой структурой: 
// obj = { x: 10, y: 20, 
//   inner: { x: 20, z: 30 }, 
//   foo2: { k: 23, p: 13 } } 
// Написать функцию convert(obj), которая получает аргументом obj. 
// Функция должна вернуть новый объект вида:
// newObj = {
//   x: 20,
//   y: 20,
//   z: 30,
//   k: 23,
//   p: 13
// }

obj = { 
  x: 10, 
  y: 20, 
  inner: { 
    x: 20, 
    z: 30 }, 
    foo2: { 
      k: 23, 
      p: 13 
      } 
    } 
       
 
    function convert (object) {
  debugger
  let newObj = {};
  for (let key in object) {
    if (typeof object[key] === "object"){
     let newObjKey  = convert(object[key]);
        for(let key2 in newObjKey) {
          newObj[key2] = newObjKey[key2]
        }
      }
      else {
        newObj[key] = object[key]
      }
    }
  
return newObj;
}
console.log(convert(obj));

   
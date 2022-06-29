// Реализовать функцию copy(list) по копированию массива.

// Предусмотреть возможность передачи вторым аргументом функции. 
// При копировании массива – функция применяется к каждому элементу копируемого массива.

// newList = copy(list, function(value){ return value*10; })

const arr = [5, "alfa", 10, "numb", 15, "30", 3];
function copy (list, func) {
  // debugger
  let newArr = list.slice();

  if (typeof func === "function") 
      for (let i = 0; i< newArr.length; i++)
        if (typeof newArr[i] === "number") 
          newArr[i] = func(newArr[i])
        return newArr;
  }

function arrIndex (value) {
  // debugger
return value *= 10;
}
newList = copy(arr, arrIndex)

console.log(newList);
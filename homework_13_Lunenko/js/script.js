// Для элементов массивов monday и tuesday необходимо выполнить следующие методы:

// Сконвертировать время потраченное на выполнение задач в часы, вместо минут.
// Оставить только те задачи, на выполнение которых нужно менее 2-х часов.
// Умножить результат на часовую ставку (amount) и добавить полученное значение в качестве третъего элемента в массив.
// Вывести в html таблицу, которая состоит из ячеек с задачами в виде:

let amount = 100;
let monday = [
  ['Write a tutorial',180],
  ['Some web development',120]
];
let tuesday = [
  ['Keep writing that tutorial',240],
  ['Some more web development',360],
   ['A whole lot of nothing',240]
];


let newArr = monday.concat(tuesday)

.map(
  function(num) {
    debugger
    num[1] /= 60; 
    return num;
  }
)

.filter(
  function(item) {
    debugger
    item[1] > 2;
    return item;
  }
)

.map(
  function(item) {
    debugger
    let addTuskResult = item[1] * amount;
    item.push(addTuskResult);
    return item;
  }
)

.forEach(
  function(item) {
    tableTask = `<td>Task name: ${item[0]}.</td>`;
    tableDuration = `<td>Taks duration: ${item[1]} hours.</td>`;
    tableAmount = `<td>Task amount: $${item[2]}.</td>`;
    document.write(`
    <table>
    <tr>${tableTask}</tr>
    <tr>${tableDuration}</tr>
    <tr>${tableAmount}</tr>
    <table>
    `)
  }
)

 



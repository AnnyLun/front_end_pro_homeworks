// 1. С массива sports с помощью метода .slice() скопировать в новый массив summer_sports массивы, которые относятся к летним видам спорта.

// 2. С массива sports с помощью метода .slice() скопировать в новый массив winter_sports массивы, которые относятся к зимним видам спорта.

// 3. С полученных массивов summer_sports и winter_sports вырезать в новый массив fruits те массивы, которые относятся к фруктам.

// 4. Вывести все элементы полученных массивов summer_sports, winter_sports, fruits в консоль в виде, который изображен на рисунке console.png.

sports = [
	['skier','⛷'],
	['snowboarder','🏂'],
	['apple','🍎'],
	['hockey','🏒'],
	['ice skate','⛸'],
	['swimmer','🏊'],
	['surfer','🏄‍'],
	['watermelon','🍉'],
	['lemon','🍋'],
	['rowboat','🚣'],
	['bicyclist','🚴‍'],
];

winter_sports = sports.slice([0], [5]);
summer_sports = sports.slice([5], sports.length);
arr_1 = summer_sports.splice(2, 2);
arr_2 = winter_sports.splice(2, 1);
fruits = [];
fruits = fruits.concat(arr_1, arr_2);

console.log("***Winter sports***");
for (i = 0; i < winter_sports.length; i++) {
	console.log(winter_sports[i].join(": "));
}
console.log("***Summer sports***");
for (i = 0; i < summer_sports.length; i++) {
	console.log(summer_sports[i].join(": "));
}
console.log("***Fruits***");
for (i = 0; i < fruits.length; i++) {
	console.log(fruits[i].join(": "));
}

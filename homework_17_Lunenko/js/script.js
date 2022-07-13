// Задача:

// Создать функцию-конструктор Product, которая принимает на вход аргументы category, type, price и присваивать их полям объекта c соответствующим названием ключа.

// Каждому объекту созданному с помощью функции-конструктор Product доступна функция render, которая возвращает строку вида: 
// Все заданные продукты создаем с помощью функции-конструктор Product и для всех вызываем метод render().

// В результате необходимо отрендерить на странице таблицу с выводом данных о всех продуктах.
// debugger
let kitchenProducts = [
	{
		type: 'grater',
		price: 10
	},
	{
		type: 'pastry-bag',
		price: 25
	},
	{
		type: 'scale',
		price: 5
	},
	{
		type: 'whisk',
		price: 15
	}
];

let devicesProducts = [
	{
		type: 'desktop',
		price: [100,1000]
	},
	{
		type: 'laptop',
		price: [50,1500]
	},
	{
		type: 'smartphone',
		price: [80,2000]
	},
	{
		type: 'tablet',
		price: [20,1300]
	}
];

let cosmeticsProducts = [
	{
		type: 'blush',
		price: 100
	},
	{
		type: 'eyeshadow',
		price: 50
	},
	{
		type: 'lipstick',
		price: 80
	},
	{
		type: 'nail-polish',
		price: 200
	},
	{
		type: 'perfume',
		price: 300,
	}
];

function Product(category, type, price) {
    // debugger
    this.category = category;
    this.type = type;
    this.price = price;
}
Product.prototype.render = function () {
    // debugger
    return `<tr>
			<td><img src="images/${this.category}/${this.type}.svg" alt="${this.type}" width="50" height="50"></td>
			<td>${this.type}</td>
			<td>${this.price} USD</td>
			</tr>
			`
};

let obj1 = kitchenProducts.map(function (item) {
    // debugger
    return new Product("kitchen", item.type, item.price);
});

let obj2 = devicesProducts.map(function (item) {
    // debugger
    return new Product("devices", item.type, item.price);
});

let obj3 = cosmeticsProducts.map(function (item) {
    // debugger
    return new Product("cosmetics", item.type, item.price);
});

function objMap(item) {
    item.map(function (item) {
        return item;
    });
}
objMap(obj1, obj2, obj3);

let concatArr = obj1.concat(obj2, obj3);

concatArr.forEach(function (item) {
    document.write(`<table>${item.render()}</table>`);
});


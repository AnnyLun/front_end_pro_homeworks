// Задача:

// В Array.prototype добавить свойство с названием heroesRender в значении которого находится функция.
// Даная функция может вызываться в контексте любого массива и в качестве входящего аргумента принимает название папки ('dc', 'marvel'), с которой будут подтягиваться иконки супер-героев этого массива. Пример:
// dcHeroes.heroesRender('dc');
// marvelHeroes.heroesRender('marvel');
// Функция возвращает таблицу, в которой выводится информация по каждому из вложенных объектов. Строка каждого объекта имеет вид:
let marvelHeroes = [
    {
        name: "Thor",
    },
    {
        name: "Spider Man",
    },
];

let dcHeroes = [
    {
        name: "Superman",
    },
    {
        name: "Batman",
    },
    {
        name: "Deadpool",
    },
];
debugger;

Array.prototype.heroesRender = function (heroesFolder) {
    debugger;
    let trs = this.map(function (heroName) {
        debugger;
        return `
			<tr>
				<td>${heroName.name}</td>
			<td><img src="images/${heroesFolder}/${heroName.name.toLowerCase().replace(" ", "")}.svg" width = 40px></td>
			</tr>
			`;
    }).join("");

    document.write(`
	<table>
		<thead>
			<tr>
				<th>Name</th>
				<th>Icon</th>
			</tr>
		</thead>
		<tbody>
			${trs}
		</tbody>
	</table>
`);
};

marvelHeroes.heroesRender("marvel");
dcHeroes.heroesRender("dc");


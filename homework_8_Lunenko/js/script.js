// Используя циклы, if/else, switch/case и методы .push(), .pop(), .unshift(), .shift(), .concat(), .splice(), .reverse() .join():

// 1. Объединить массивы destination, native, hero в общий массив rainbow.

// 2. Сделать реверс элементов полученного массива rainbow.

// 3. Изменить/добавить элементы массива rainbow так, что бы в итоге получился массив вида ['Richard','Of','York','Gave','Battle','In','Vain'];

// 4. Вывести элементы полученного массива в html в виде, который представлен в прикрепленном рисунке rainbow.png.

// Шрифт надписей на картинке Quicksand. Вы можете взять любой))
hero = ['Ivan'];
native = ['York','Of'];
action = ['Gave','Buttle'];
destination = ['Poltava','In'];
colors = ['red', 'orange', 'yellow', 'green', 'blue', 'darkblue', 'purple'];
native.reverse();
destination.reverse();
rainbow = [];
rainbow = rainbow.concat(hero,native,action,destination);
rainbow[0] = ['Richard'];
rainbow[rainbow.length-1] = ['Vain'];
document.write(`<div class="wrapp">`);
for (i = 0; i < rainbow.length, i < colors.length; i++) {
	document.write(`<div class = "circles-wrap">
	<div class = "circles" style = "background-color: ${colors[i]}">
	</div>
	<div class>${rainbow[i]}</div>
	</div>`);

}
document.write(`</div>`);

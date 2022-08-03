// Написать скрипт, который добавит класс `last` всем последним li в группах.

const ul = document.querySelectorAll("ul")
// ul[0].lastElementChild.classList.add("last")
// ul[1].lastElementChild.classList.add("last")
// ul[2].lastElementChild.classList.add("last")

let ulmass = ul.forEach((item) =>{
    if (item.lastElementChild){
        let items = item.lastElementChild;
        item.lastElementChild = item.lastElementChild.classList.add("last")
        console.log(items);
    }
}
)
// Написать функцию setFirstItemClassName(level), где level - это номер уровня вложенности, в котором нужно произвести изменения. Функция setFirstItemClassName должна установить первому тегу группы - класс `first-item`

const root = document.querySelectorAll(".root");

function level(item) {
    [...item.children].forEach((item) => {
        if (item.childElementCount !== 0) {
            item.classList.add("first-item")
            console.log(item);
        }
    });
}

let setFirstItemClassName = root.forEach((item) => {
    if (item.childElementCount !== 0) {
        item.classList.add("first-item")
        console.log(item);
        [...item.children].forEach((item) => {
            if (item.childElementCount !== 0) {
                item.classList.add("first-item")
                console.log(item);
                level(item);
            } else {
                level(item);
            }
        });
    }
});

// * при добавлении классов - должен измениться цвет фона на красный(first) и зеленый(last), с анимацией - задержка 2 секунды (transaction)
let last = document.querySelectorAll(".last")
let green = last.forEach((item) => {
    setTimeout(() => {
        item.style.backgroundColor = "green";
    }, 2000);
}
)

let firstItem = document.querySelectorAll(".first-item")
let red = firstItem.forEach((item) => {
    setTimeout(() => {
        item.style.backgroundColor = "red";
    }, 2000);
}
)
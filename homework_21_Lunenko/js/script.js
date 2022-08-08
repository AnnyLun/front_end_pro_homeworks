// на странице находятся элементы:

// div - фигура, которая может принимать какие-то формы

// select - выбрать тип фигуры (квадрат, прямоугольник, круг). При изменении значения в нем, меняется фигура

// input для выбора цвета. При его изменении меняется цвет фигуры

// debugger

const select = document.querySelector("select")
const type = document.querySelector("div")
const colorInput = document.getElementById("figureColor")
type.classList.add("type")

select.addEventListener("change", (e) => {
    if (type.classList.length > 0) {
       type.classList.replace(type.classList[0], `${e.target.value}`);
       getFigure();
    }
    getFigureColor ();
})
function getFigureColor (){
    colorInput.addEventListener("input", () => {
        if (type.className === "rectangle"){
            type.style.backgroundColor = null; 
            type.style.borderBottomColor = `${colorInput.value}`;
        } 
        else {
            type.style.borderBottomColor = null;
            type.style.backgroundColor = colorInput.value;
        }       
    })
}

function getFigure() {
    if (type.className === "rectangle" ) {
        type.style.backgroundColor = null;  
        type.style.borderBottomColor = `${colorInput.value}`;
    } else {
        type.style.backgroundColor = `${colorInput.value}`;  
    }
}


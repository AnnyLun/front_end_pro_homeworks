const xhr = new XMLHttpRequest()
xhr.open("GET", "data.json", false)
xhr.send()

const xhrTwo = new XMLHttpRequest()
xhrTwo.open("GET", "data2.json", false)
xhrTwo.send()

let responseDataFirst = xhr.response;
let responseDataSecond = xhrTwo.response;
let parseData = data => JSON.parse(data)
let parseDataFirst = parseData(responseDataFirst)
let parseDataSecond = parseData(responseDataSecond)

let newArr = [];
function returnObject (object) {
    for (let key in object) {
        pushArrData(object[key]);
    }
}
returnObject (parseDataFirst);
returnObject (parseDataSecond);

function pushArrData (arr) {
    arr.forEach((item) => 
    newArr.push(item))
}
console.log(newArr);

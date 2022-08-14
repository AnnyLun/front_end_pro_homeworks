// Variant #1
let parseData = data => JSON.parse(data)
let newArr = [];

function pushArrData (arr) {
    arr.forEach(item => newArr.push(item))
    if (newArr.length > 3) 
        console.log(newArr)
}
function getResponse (data, callback) {
    const xml = new XMLHttpRequest()
    xml.open("GET", data)
    xml.send()
    xml.addEventListener("readystatechange", () => {
        if(xml.readyState === 4 && xml.status > 199 && xml.status < 400) {
            let response = xml.response;
            callback (parseData(response).children)
        }
    })
}
getResponse ("data.json", pushArrData);
getResponse ("data2.json", pushArrData)

// Variant #2
// function getResponse(action) {
//     return new Promise (
//         function (resolve, reject) {
//             const xml = new XMLHttpRequest()
//             xml.open("GET", action)
//             xml.send()
//             xml.addEventListener("readystatechange", () => {
//                 if (xml.readyState === 4) {
//                     xml.status > 199 && xml.status < 400 
//                     ? resolve (xml.response)
//                     : reject (xml.status)
//                 }
//             })
//         }
//     )
// }
// function myresponse (response) {
//     response = JSON.parse(response).children;
//     response.forEach(item => newArr.push(item))
// }

// getResponse ("data.json")
// .then (
//     function (action) {
//         myresponse(action)
//     }
// ) 
// getResponse ("data2.json")
// .then (
//     function (action) {
//         myresponse(action)
//     }
// ) 
// .finally(
//     function() {
//         console.log(newArr)
//     }
// )




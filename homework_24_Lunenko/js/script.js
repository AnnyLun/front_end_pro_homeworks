let input = document.createElement("input");
let button = document.createElement("button");
let div = document.createElement("div");

input.placeholder = "Type username here..";
document.body.append(input);
document.body.append(button);
document.body.append(div);

input.classList.add("input");
button.classList.add("button");

button.innerHTML = "Найти";

const API = "https://api.github.com/users/"
let path;
    button.addEventListener("click", async function(e) {
        e.preventDefault();
        path = input.value
        controller(`${path}`); 
    })

const controller = async (path, method = "GET") => {
	let URL = API + path;
    let option = {
		method,
		headers: {
			"content-type": "application/json",
		}
	};
        try{
            GET
        } catch (err) {
            console.log(`This is ${err}`);
        } finally {
            let request = await fetch (URL, option); 
            let response = await request.json();
            getResponse (response);
        }
}
function getResponse (obj){
    for (let key in obj){
        div.innerHTML = `
        <img src = "${obj.avatar_url}" alt = "Avatar"/>
        <p>Kоличество репозиториев: ${obj.public_repos}</p>
        <p>Kоличество фолловеров: ${obj.followers}</p>
        <p>Kоличество наблюдаемых: ${obj.following}</p>
    `
    }
}  
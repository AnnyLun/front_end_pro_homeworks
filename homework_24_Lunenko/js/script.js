const button = document.createElement("button");
const form = document.querySelector("#form");
const select = document.getElementById("select");
const inputCheckbox = document.querySelector("#checkbox");
const favourite = form.querySelector("input[name=checkbox]").checked;

const API = "https://6310f45a19eb631f9d6a2a39.mockapi.io";
let controller = async (path, method = "GET", body) => {
    URL = `${API}${path}`;
    let params = {
        method,
        headers: {
            "content-type": "application/json",
        },
    };
    if (body) {
        params.body = JSON.stringify(body);
    }
    let request = await fetch(URL, params);
    let response = await request.json();
    return response;
};

async function option(item) {
    let options = await controller(item);
    options.forEach((obj) => {
        let getobj = obj.name;
        let option = document.createElement("option");
        option.innerText = getobj;
        select.append(option);
    });
}
option("/universes");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const fullname = form.querySelector("#fullname").value;
    const option = form.querySelector("select").value;
    const heroes = await controller("/heroes");
    let findHero = heroes.find((elem) => fullname === elem.name);
    if (findHero) {
        console.log("Hero already exist!");
        let makeHeroTable = new Hero(findHero);
        makeHeroTable.render();
    } else {
        console.log("User not exist!");
        const body = {
            name: fullname,
            comics: option,
            favourite,
        };
        const response = await controller("/heroes", "POST", body);
        if (response) {
            let makeNewHeroTable = new Hero(response);
            makeNewHeroTable.render();
        }
    }
});

class Hero {
    constructor(objHero) {
        for (let key in objHero) {
            this[key] = objHero[key];
        }
    }

    render() {
        const tr = document.createElement("tr");
        const heroInfo = document.querySelector("#heroInfo");
        const deleteButton = document.createElement("button");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td = document.createElement("td");
        const table = document.createElement("table");
        console.log(td3.innerText);
        tr.append(td1);
        td1.innerText = `${this.name}`;
        tr.append(td2);
        td2.innerText = `${this.comics}`;
        tr.append(td3);
        td3.innerText = `${this.favourite}`;

        deleteButton.addEventListener("click", async () => {
            const deleteBut = await controller(`/heroes/${this.id}`, "DELETE");
            if (deleteBut.id) {
                return (table.outerHTML = " ");
            }
        });
        table.append(tr);
        heroInfo.append(table);
        if (table.childElementCount === 1) {
            tr.append(td);
            td.append(deleteButton);
            deleteButton.innerText = "Delete";
        }
        inputCheckbox.addEventListener("click", async () => {
            const favourite = form.querySelector("input[name=checkbox]").checked;
            const body = {
                favourite,
            };
            const response = await controller(`/heroes/${this.id}`, "PUT", body);
            if (td3) {
                return (td3.innerText = `${body.favourite}`);
            }
        });
        deleteButton.addEventListener("click", async () => {
            const deleteBut = await controller(`/heroes/${this.id}`, "DELETE");
            if (deleteBut.id) {
                return (table.outerHTML = " ");
            }
        });
    }
}

button.innerText = "Add Hero";
form.append(button);

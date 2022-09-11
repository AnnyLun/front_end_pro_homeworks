let userData;
let bankData;
let getFirstKey = [];
let getSecondKey = [];
let getPromptCurrency;
let getPromptAmount;
let getCurrencyType;
let currencyName;
let itemName;
let itemValue;
let itemNameSecond;
let itemValueSecond;
let itemImg;
let amount;
let min;
let max;

getFirstKey.forEach((data) => console.log(data));
const getMoney = (userData, bankData) => {
    getCurrencyType = confirm("Посмотреть баланс на карте?");
    if (getCurrencyType === true) {
        fetch("userData.json").then((resolve) => {
            userData = resolve.json().then((data) => {
                for (let key in data) {
                    getFirstKey.push(key);
                }
                getCurrency(getFirstKey);
                getBalance(data);
            });
        });
    } else {
        fetch("bankData.json").then((response) => {
            bankData = response.json().then((data) => {
                for (let key in data) {
                    getSecondKey.push(key);
                }
                getAvailableCurrency(getSecondKey);
                getCurrencyNameAndValue(data);
            });
            fetch("userData.json").then((response) => {
                bankData = response.json().then((data) => {
                    for (let key in data) {
                    }
                    getUserName(data);
                });
                fetch("bankData.json").then((response) => {
                    bankData = response.json().then((data) => {
                        for (let key in data) {
                        }
                        getCurrencyNameAndValue(data);
                    });
                    if (itemNameSecond !== currencyName) {
                        fetch("bankData.json").then((response) => {
                            bankData = response
                                .json()
                                .then((data) => {
                                    for (let key in data) {
                                    }
                                    getUserName(data);
                                })
                                .then(getCurrencyNameAndValue)
                                .then(userName);
                        });
                    }
                });
            });
        });
    }
};
getMoney(userData, bankData);

function getCurrency(item) {
    do {
        getPromptCurrency = prompt(`Введите название валюты в формате ${getFirstKey.join(", ")}`);
        for (i = 0; i <= item.length; i++) {
            if (getPromptCurrency === item[i]) {
                currencyName = getPromptCurrency;
            }
        }
    } while (getPromptCurrency !== currencyName);
    getBalance(item);
}

function getBalance(item) {
    for (let key in item) {
        if (key === currencyName) {
            alert(`Баланс составляет: ${item[key]} ${key}`);
            finalAnswer();
        }
    }
}

function getAvailableCurrency(item) {
    do {
        getPromptCurrency = prompt(`Введите название валюты из допустимых валют в формате ${getSecondKey.join(", ")}`);
        for (i = 0; i <= item.length; i++) {
            if (getPromptCurrency === item[i]) {
                currencyName = getPromptCurrency;
            }
        }
    } while (getPromptCurrency !== currencyName);
}

function getCurrencyNameAndValue(item) {
    for (let key in item) {
        itemName = key;
        itemValue = item[key];
        itemImg = item[key].img;
        getItemValue(itemValue);
        if (currencyName === itemName) {
            itemValue = item[key];
            return itemName, itemValue, itemImg;
        }
    }
}

function getItemValue(obj) {
    for (let key in obj) {
        min = obj.min;
        max = obj.max;
    }
}

function getUserName(item) {
    for (let key in item) {
        itemNameSecond = key;
        itemValueSecond = item[key];

        if (itemNameSecond === currencyName) {
            if (typeof item[key] == "object") {
                for (let key in itemValueSecond) {
                    return (itemValueSecond = itemValueSecond.max);
                }
            }
            return userName();
        }
    }
    if (itemNameSecond !== currencyName) {
        alert(`У вас на балансе нет данной валюты!`);
        return getAvailableCurrency(getSecondKey);
    }
}

function userName() {
    do {
        getPromptAmount = +prompt(`Введите сумму для снятия в вал ${currencyName} меньше или равно ${itemValueSecond}`);
    } while (getPromptAmount > itemValueSecond);
    amount = getPromptAmount;
    getAmount(amount);
}

function getAmount(amount) {
    if (min <= amount && amount <= max) {
        alert(`Вот Ваши денежки: ${amount} ${currencyName} ${itemImg}`);
        return finalAnswer();
    }
    if (amount > max) {
        alert(`Введенная сумма больше допустимой. Максимальная сумма снятия: ${max} ${currencyName}`);
        let getPromptAmountNew = +prompt(`Введите сумму меньше или равно: ${max} ${currencyName}`);
        getAmount(getPromptAmountNew);
    }
    if (amount < min) {
        alert(`Введенная сумма меньше допустимой. Минимальная сумма снятия: ${min} ${currencyName}`);
        let getPromptAmountNew = +prompt(`Введите сумму больше или равно: ${min} ${currencyName}`);
        return getAmount(getPromptAmountNew);
    } else {
    }
}

function finalAnswer() {
    return alert(`Спасибо, хорошего дня 😊`);
}

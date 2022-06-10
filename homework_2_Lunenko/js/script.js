firstName = prompt("What is your name?").trim();
firstNameLength = firstName.length;
firstName = `${firstName[0].toUpperCase()}${firstName.slice(1, firstNameLength)}`;
lastName = prompt("What is your last name?").trim();
lastNameLenth = lastName.length;
lastName = `${lastName[0].toUpperCase()}${lastName.slice(1, lastNameLenth)}`
personalEmail = prompt("What is your email?")
.trim()
.toLowerCase()
yearOfBirth = prompt("What is your year of birth?")
.trim();
yearOfBirth = parseInt(yearOfBirth);
today = new Date();
yearToday = today.getFullYear();
myAge = yearToday - yearOfBirth;
emailLength = personalEmail.length;
emaylMy = `not valid email <b>${personalEmail}</b> (symbol @ not exist)`;
emailMyFirst = `not valid email <b>${personalEmail}</b> (symbol @ find in first place)`;
emailMyLast = `not valid email <b>${personalEmail}</b> (symbol @ find in last place)`;

if (personalEmail.indexOf(`@`) < 0) { 
    document.write(`
        <h1>Personal information</h1>
            <ul>
                <li>First name: ${firstName}</li>
                <li>Last name: ${lastName}</li>
                <li>Email: ${emaylMy}</li>
                <li>Age: ${myAge}</li>
            <ul>
    `);
} else if (!personalEmail.indexOf(`@`)) {
    document.write(`
        <h1>Personal information</h1>
            <ul>
                <li>First name: ${firstName}</li>
                <li>Last name: ${lastName}</li>
                <li>Email: ${emailMyFirst}</li>
                <li>Age: ${myAge}</li>
            <ul>
    `);
} else if (personalEmail.indexOf(`@`) ==                                                                                                         - 1) {
    document.write(`
        <h1>Personal information</h1>
            <ul>
                <li>First name: ${firstName}</li>
                <li>Last name: ${lastName}</li>
                <li>Email: ${emailMyLast}</li>
                <li>Age: ${myAge}</li>
            <ul>
    `);
} else {
    document.write(`
        <h1>Personal information</h1>
            <ul>
                <li>First name: ${firstName}</li>
                <li>Last name: ${lastName}</li>
                <li>Email: ${personalEmail}</li>
                <li>Age: ${myAge}</li>
            <ul>
    `);
}

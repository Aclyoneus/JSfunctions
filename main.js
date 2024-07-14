// 1

function getGreeting(firstName, lastName) {
    return(`Hi, "` + firstName + ` ` + lastName + `". What's up?`);
}

const greeting = getGreeting('John', 'Smith');
console.log(greeting);

// 2
const realName = "Wojciech"

function isThisMyName (name) {
    if (name === realName ) {
        return true;
    } else {
        return false;
    }
}

console.log(isThisMyName("Adam"));
console.log(isThisMyName("Wojciech"));

// 3

function isThisBoolean (value) {
    return typeof value === "boolean";
}

console.log(isThisBoolean(1));
console.log(isThisBoolean(true));


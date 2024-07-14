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

isThisMyName("Adam");


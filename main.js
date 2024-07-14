// 1

function getGreeting(firstName, lastName) {
    return(`Hi, "` + firstName + ` ` + lastName + `". What's up?`);
}

const greeting = getGreeting('John', 'Smith');
console.log(greeting);

// 2
const realName = 'Wojciech';

function isThisMyName (name) {
    if (name === realName ) {
        return true;
    } else {
        return false;
    }
}

console.log(isThisMyName('Adam'));
console.log(isThisMyName('Wojciech'));

// 3

function isThisBoolean (value) {
    return typeof value === 'boolean';
}

console.log(isThisBoolean(1));
console.log(isThisBoolean(true));

// 4

const quarterOf = (month) => {
    if (month <= 3) {
        return 1;
    } else if (month <= 6) {
        return 2;
    } else if (month <= 9) {
        return 3;
    } else {
        return 4;
    }
}

// 5 - Dawne pierwsze 4

function getCircleArea (radius) {
    circleArea = Math.PI * (radius * radius);
    return circleArea;
}

const radius = 5;
const area = getCircleArea(radius);
console.log(area);
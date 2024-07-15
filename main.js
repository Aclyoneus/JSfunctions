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
    return Math.PI * (radius * radius);
}

const radius = 5;
const area = getCircleArea(radius);
console.log(area);

// 6

function getCirclesAreaSum(radiusOne, radiusTwo) {
    return getCircleArea(radiusOne) + getCircleArea(radiusTwo);
}

const circlesAreaSum = getCirclesAreaSum(5, 10);
console.log(circlesAreaSum);

// 7

function convertMinutesToHours (minutesAmount) {
    return minutesAmount / 60;
}

const hours = convertMinutesToHours(75);
console.log(hours);

// 8

function isTextUppercase(text) {
    if (text === text.toUpperCase()) {
        return true;
    } else {
        return false;
    }
}

console.log(isTextUppercase('Hello'));
console.log(isTextUppercase('HELLO'));

// 9

function isDivisible(n, x, y) {
    if (n % x === 0 && n % y === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isDivisible(5, 1, 5));
console.log(isDivisible(5, 1, 3));

// 10

function getBillboardPrice (billboardText, singleCharacterCost) {
    return billboardText.length * singleCharacterCost;
}

console.log(getBillboardPrice('Hello world!', 10));
console.log(getBillboardPrice('Hello world!', 15));
console.log(getBillboardPrice('To be, or not to be', 20));

// 11

function getOppositeNumber(number) {
    return number * -1;
}

console.log(getOppositeNumber(1));

// 12

function getNegativeNumber(num) {
    if (num <= 0) {
        return num;
    } else {
        return num * -1;
    }
}

console.log(getNegativeNumber(5));
console.log(getNegativeNumber(0));
console.log(getNegativeNumber(-3));

// 13

function removeFirstAndLastCharacter(str){
    return str.slice(1, -1);
}

console.log(removeFirstAndLastCharacter("Amazing"));

// 14

function getBasicOperationsResult(operation, value1, value2){
    if (operation === '+') {
        return value1 + value2;
    } else if (operation === '-') {
        return value1 - value2;
    } else if (operation === '*') {
        return value1 * value2;
    } else if (operation === '/') {
        return value1 / value2;
    }
}

console.log(getBasicOperationsResult("+", 5, 10));

// 15
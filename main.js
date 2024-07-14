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
    const circleArea = Math.PI * (radius * radius);
    return circleArea;
}

const radius = 5;
const area = getCircleArea(radius);
console.log(area);

// 6

function getCirclesAreaSum(radiusOne, radiusTwo) {
    const circlesAreaSum = getCircleArea(radiusOne) + getCircleArea(radiusTwo);
    return circlesAreaSum;
}

const circlesAreaSum = getCirclesAreaSum(5, 10);
console.log(circlesAreaSum);

// 7

function convertMinutesToHours (minutesAmount) {
    const minutesToHours = minutesAmount / 60;
    return minutesToHours;
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
    const billboardPrice = billboardText.length * singleCharacterCost;
    return billboardPrice;
}

console.log(getBillboardPrice('Hello world!', 10));
console.log(getBillboardPrice('Hello world!', 15));
console.log(getBillboardPrice('To be, or not to be', 20));
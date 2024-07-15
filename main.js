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

function whichCentury(year) {
    return Math.ceil(year / 100);
}

console.log(whichCentury(301));

// 16

function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    }
    return "Odd";
}

// 17

function areYouPlayingBanjo(name) {
    if (name[0] === 'R' || name[0] === 'r') {
        return name + ' plays banjo';
    }
    return name + ' does not play banjo'
}

// 18

function bmi(weight, height) {
    const bodyMassIndex = weight / (height * height);

    switch (true) {
        case (bodyMassIndex <= 18.5):
            return "Underweight";
        case (bodyMassIndex <= 25.0):
            return "Normal";
        case (bodyMassIndex <= 30.0):
            return "Overweight";
        default:
            return "Obese";
    }
}

console.log(bmi(20, 1.80));

// 19

function rockPaperScissors (player1, player2) {
    if (player1 === player2) {
        return 0;
    } else if ((player1 === "rock" && player2 === "scissors") ||
    (player1 === "scissors" && player2 === "paper") ||
    (player1 === "paper" && player2 === "rock"))
    {
        return 1;
    }
    return 2;
}

console.log(rockPaperScissors('rock', 'scissors'));
console.log(rockPaperScissors('rock', 'paper'));
console.log(rockPaperScissors('paper','paper'));

// 20

function getCalculationResult(calculationType, firstNumber, secondNumber) {
    if (calculationType === '+') {
        return firstNumber + secondNumber;
    } else if (calculationType === '-') {
        return firstNumber - secondNumber;
    } else if (calculationType === '*') {
        return firstNumber * secondNumber;
    } else if (calculationType === '/') {
        return firstNumber / secondNumber;
    }
    return null;
}

console.log(getCalculationResult("&", 5, 10));

// 21

function getPercentageValue (baseNumber, percentage) {
    return (baseNumber * percentage) / 100;
}

// 22

function getGreaterNumber (firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
        return firstNumber;
    } else if (firstNumber < secondNumber) {
        return secondNumber;
    }
    return "Equal numbers";
}

// 23

function isOddNumber (number) {
    return number % 2 !== 0 ? true : false;
}

// 24

function isEvenNumber (number) {
    return number % 2 === 0 ? true : false;
}

// 25

function isDivisible (dividedNumber, numberToDivideBy) {
    return dividedNumber % numberToDivideBy === 0 ? true : false;
}

// 26

function getSmallerNumber (firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
        return secondNumber;
    } else if (firstNumber < secondNumber) {
        return firstNumber;
    }
    return "Equal numbers";
}

// 27

function isNumberPositive (number) {
    return number > 0 ? true : false;
}

// 28

function getCelciusConvertedToFahrenheit (number) {
    return (number * 1.8) + 32;
}

// 29

function getFahrenheitConvertedToCelcius (number) {
    return (number - 32) / 1,8;
}

// 30

function isLeapYear (number) {
    return number % 4 === 0 ? true : false;
}
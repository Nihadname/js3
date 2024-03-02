let number1 = 7;
let number2 = 40
let counter = 0;
function GettingOddNumbersFromArray(number1, number2, counter) {
    for (let index = number1; index < number2; index++) {
        if (index % 2 == 1) {
            counter++;
        }
    }
    return { amountOfNumbers: counter };
}
console.log(GettingOddNumbersFromArray(number1, number2, counter));

let Num = 5;
let counter2 = 0;
function DefiningSimpleOrComplexNumber(Num, counter) {
    for (let index = 1; index < Num; index++) {
        if (Num % index == 0) {
            counter++;
        }
    }
    if (counter > 2) {
        console.log("bu eded murekkeb kateqoriyasina daxildir");
    } else {
        console.log("bu eded sade kateqoriyasina daxildir");

    }
}
DefiningSimpleOrComplexNumber(Num, counter2);


let number3 = 8;

function DefiningPowerOf2(number3) {
    if (number3 <= 0) {
        return false;
    }
    while (number3 > 1) {
        if (number3 % 2 != 0) {
            return false;
        }
        number3 = number3 / 2;
    }
    return true;
}
console.log(DefiningPowerOf2(number3));
let NewNumber = 2345;
let counter3 = 0;
function HowManyNumberFloorsContain(NewNumber, counter3) {
    while (NewNumber >= 1) {
        NewNumber = Math.floor(NewNumber / 10);
        counter3++;
    }
    return counter3;
}
console.log(HowManyNumberFloorsContain(NewNumber, counter3));

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let counter5 = 0;
function sumOfTheArray(Array, counter5) {
    for (let index = 0; index < Array.length; index++) {
        const element = Array[index];
        counter5 += element;
    }
    return counter5;
}
console.log(sumOfTheArray(array, counter5));
let numbers = [10, 5, 25, 8, 15];
let One = numbers[0];
function TheBiggestNumber(numbers, One) {
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] > One) {
            One = numbers[i];
        }
    }
    return One;
}
console.log(TheBiggestNumber(numbers, One));
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function TheSumOfFirstAndLast(number2) {
    let Result = number2[0] + number2[number2.length - 1];
    return Result;
}
console.log(TheSumOfFirstAndLast(numbers2));
let number5 = 12;
function DefiningOddOrEven(number5) {
    if (number5 % 2 == 0) {
        console.log("bu cut ededir");
    } else {
        console.log("bu tek eded hesap olunur ");
    }
}
DefiningOddOrEven(number5);
let number6 = 42;
function DividingTo21(number) {
    if (number % 21 == 0) {
        return true
    }
    return false;
}
console.log(DividingTo21(number6));
let n = 6;
let m = 8;

function SumOfNumbers(number, number2) {
    if (number % 2 == 0 && number2 % 2 == 0) {
        let sum = number + number2;
        return sum;
    } else {
        return "2sinde biri cut deyil";
    }
}
console.log(SumOfNumbers(n, m));
let number7 = 7;
let number10 = 40;

function countOddNumbers(number1, number2) {
    let counter = 0;
    for (let index = number1; index < number2; index++) {
        if (index % 2 == 1) {
            counter++;
        }
    }
    return { amountOfNumbers: counter };
}

console.log(countOddNumbers(number7, number10));
let number8 = 7;
let number9 = 40;

function sumOddNumbers(number1, number2) {
    let sum = 0;
    for (let index = number1; index < number2; index++) {
        if (index % 2 == 1) {
            sum += index;
        }
    }
    return { totalSum: sum };
}

console.log(sumOddNumbers(number8, number9));

let m2 = 18;
function GettingNumbers(m2) {
    let counter = 1;
    for (let index = 1; index < m2; index++) {
        if (index % 2 == 0) {
            counter *= index;
        }
    }
    return counter;
}
console.log(GettingNumbers(m2)); 

let havaDerecesi=15;
function CalculatingWeather(){
    if(havaDerecesi>15){
        console.log("istidir");
    }else{
        console.log("soyuqdur");
    }
}
CalculatingWeather(havaDerecesi);


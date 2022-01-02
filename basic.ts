//#1
const favouriteHero = "Hulk";
//#2
let num1 = 50;
let num2 = 5;
let num3 = 10;
let num4 = num2 + num3;
//#3
interface User {
    name: string;
    age: number;
}
let character: User = {name:"Jack Sparrow", age:10};
character.age = 25;
console.log(character);
//#4
const fName = "Jon";
const lName = "Snow";
let ageNumber = 24;
console.log("Soy " + fName + " " + lName + ", tengo " + ageNumber + " años y me gustan los lobos.");
//#5
interface Toy {
    name: string, 
    price: number
}
let toyBuss: Toy = {name:"Buss myYear", price: 19};
let toyRallo: Toy = {name:"Rallo mcKing", price:29};
console.log(toyBuss, toyRallo);
//#6
let basePrice: number = 10000;
interface Car {
    name: string, 
    base: number,
    final: number
}
let carOne: Car = {name:"BMW m&m", base:50000, final:60000};
let carTwo: Car = {name:"Chevrolet Corbina", base:70000, final:80000};
basePrice = 25000;
carOne.final = carOne.base + basePrice;
carTwo.final = carTwo.base + basePrice;
//#7
let multip: number = 10*5;
console.log(multip);
let division: number = 10/2;
console.log(division);
let rest: number = 15%9;
console.log(rest);
const yTwo: number = 10;
const zTwo: number = 5;
const resultado: number = yTwo + zTwo;
const resultado2: number = yTwo * zTwo;
//#8
const avengersArr: string[] = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
let favHero: string = avengersArr[0];
avengersArr.splice(0,1,"IRON MAN");
console.log(avengersArr);
//#9
const avengersArr2 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengersArr2.length);
//#10
const rickMortyCharacters: string[] = ["Rick", "Beth", "Jerry"];
rickMortyCharacters.push('Morty','Summer');
console.log(rickMortyCharacters[rickMortyCharacters.length - 1]);
//#11
const rickMortyCharacters2: string[] = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickMortyCharacters2.pop();
console.log(rickMortyCharacters2[0], rickMortyCharacters2[rickMortyCharacters2.length - 1]);
//#12
const rickMortyCharacters3: string[] = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickMortyCharacters3.splice(1, 1);
console.log(rickMortyCharacters3);
//#13
const numberOne:number = 10;
const numberTwo:number = 20;
const numberThree:number = 2;
if(numberOne === 10){
    console.log('number1 es estrictamente igual a 10')
};
if (numberTwo / numberOne == 2) {
  console.log("number2 dividido entre number1 es igual a 2");
};
if (numberOne !== numberTwo) {
  console.log("number1 es estrictamente distinto a number2");
};
if (numberThree != numberOne) {
  console.log("number3 es distinto number1");
};
if (numberThree * 5 == numberOne) {
  console.log("number3 por 5 es igual a number1");
};
if ((numberThree * 5 == numberOne) && (numberOne * 2 == numberTwo)) {
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
};
if ((numberTwo / 2 == numberOne) || (numberOne / 5 == numberThree)) {
  console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}
//#14
for (let i:number = 0; i < 10; i++) {
    console.log(i);
}
for (let i:number = 0; i < 10; i++) {
    if (i%2 == 0) {
        console.log(i);
    }
}
for (let i:number = 0; i <= 10; i++) {
    if (i < 10) {
        console.log("Intentando dormir...");
    }
    else if (i == 10) {
        console.log("Dormido!");
    }
}
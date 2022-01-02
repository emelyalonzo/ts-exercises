//Exercise #1
const comparisonTwoNumbers = (numOne:number , numTwo:number) => {
    if (numOne < numTwo) {
        console.log(numTwo + " es el mayor");
    } else if (numOne > numTwo) {
        console.log(numOne + " es el mayor");
    } else {
        console.log("Ninguno es mayor que el otro :S");
    }
};
comparisonTwoNumbers(2,4);
//Exercise #2
const avengersHeroes: string[] = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
const longestWord = (arr: string[]) => {
    let longestLength = 0;
    let longestIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestLength) {
            longestLength = arr[i].length;
            longestIndex = i;
        } else if (arr[i].length == longestLength) {
            continue;
        }
    }
    console.log(arr[longestIndex]);
}
longestWord(avengersHeroes);
//Exercise #3
const nums: number[] = [1, 2, 3, 5, 45, 37, 58];
const arithmeticSum = (arr: number[]) => {
    let result: number = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}
console.log(arithmeticSum(nums));
//Exercise #4
const nums2: number[] = [12, 21, 38, 5, 45, 37, 6];
const averageNumbers = (arr: number[]) => {
    let arithmeticSum = 0;
    for (let i = 0; i < arr.length; i++) {
        arithmeticSum += arr[i];
    }
    return (arithmeticSum / arr.length);
}
console.log(averageNumbers(nums2));
//Exercise #5
const wordsAndNumbers:(number|string)[] = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
const averageWords = (array: (number|string)[]) => {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] == "string") {
            result += (array[i] as string).length;
        } else if (typeof array[i] == "number") {
            result += (array[i] as number);
        }   
    }
    return result;
}
console.log(averageWords(wordsAndNumbers));
//Exercise #6
const meals: string[] = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda',
    'sushi'
];
const removeMealsDuplicates = (array: string[]) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (newArray.includes(array[i])) {
            continue;
        } else {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
//Exercise #7
const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
];
const findAName = (array:string[], element:string) => {
    if (array.includes(element)) {
        return [true, array.indexOf(element)];
    } else {
        return false;
    }
}
//Exercise #8
const randomWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
];
const counterRepetitions = (array: string[]) => {
    let repetitions = {};
    for (let i:number = 0; i < array.length; i++) {
        if (array[i] in repetitions) {
        repetitions[array[i]] += 1;
        } else {
        repetitions[array[i]] = 1;
        }
    }
    return repetitions;
}
console.log(counterRepetitions(randomWords));
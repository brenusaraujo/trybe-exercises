//questão 1
let factorial = 1;
for (let index = 10; index >= 1; index -= 1) {
    factorial = factorial * index;
}
console.log(factorial);

// fim da questão 1

//questão 2
let word = 'breno';
let reverseWord = [];
for (let index = word.length - 1; index >= 0; index -= 1) {
    reverseWord += word[index];
}
console.log(reverseWord); //https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/

//fim da questão 2

let array = ['java', 'javascript', 'python', 'html', 'css'];
let storage = array[0];

for (let index = 0; index < array.length; index += 1) {

    if (array[index].length > storage.length) {
        storage = array[index];

    }
}
console.log(storage)

for (let index = 0; index < array.length; index += 1) {

    if (array[index].length < storage.length) {
        storage = array[index];

    }
}
console.log(storage)

//fim da questão 3

//questão 4

let biggestPrimeNumber = 0;
for (let currentNumber = 0; currentNumber <= 50; currentNumber += 1) {
    let isPrime = true;
    for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
        if (currentNumber % currentDivisor === 0) {
            isPrime = false;
        }
    }
    if (isPrime) {
        biggestPrimeNumber = currentNumber;
    }
}

console.log(biggestPrimeNumber);

//fim da questão 4
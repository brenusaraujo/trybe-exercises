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
console.log(reverseWord);
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
} //questao 1

for (i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
}
console.log(sum); //questao 2

let aux = sum / numbers.length;

console.log(aux); //questao 3

if (aux > 20) {
    console.log('valor maior que 20.');
} else {
    console.log('valor menor que 20');
} //questao 4

let maxValue = 0;

for (let index = 1; index < numbers.length; index++) {
    for (let secondIndex = 0; secondIndex < index; secondIndex++) {
        if (numbers[index] < numbers[secondIndex]) {
            let position = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = position;
        }
    }
}
console.log(numbers[numbers.length - 1]); //questão 5;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circleArea = exports.trapezoid = exports.diamond = exports.rectangle = exports.square = exports.triangle = exports.sumArray = exports.sum = exports.personAge = exports.greeter = void 0;
function greeter(name) {
    return `Olá ${name}`;
}
exports.greeter = greeter;
function personAge(name, age) {
    return `${name} tem ${age} anos`;
}
exports.personAge = personAge;
function sum(x, y) {
    return x + y;
}
exports.sum = sum;
function sumArray(numbers) {
    return numbers.reduce(sum, 0);
}
exports.sumArray = sumArray;
function triangle(base, height) {
    return (base * height) / 2;
}
exports.triangle = triangle;
function square(side) {
    return side ** 2;
}
exports.square = square;
function rectangle(base, height) {
    return base * height;
}
exports.rectangle = rectangle;
function diamond(biggerDiagnoal, minorDiagnoal) {
    return (biggerDiagnoal * minorDiagnoal) / 2;
}
exports.diamond = diamond;
function trapezoid(biggerBase, minorBase, height) {
    return ((biggerBase + minorBase) * height) / 2;
}
exports.trapezoid = trapezoid;
function circleArea(radios) {
    return Math.PI * radios * radios;
}
exports.circleArea = circleArea;

"use strict";
// ./exercises.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLosangleArea = exports.triangleCheck = exports.getPolygonPerimeter = exports.getTriangleArea = exports.getRectangleArea = exports.getSquareArea = void 0;
function getSquareArea(side) {
    return side ** 2;
}
exports.getSquareArea = getSquareArea;
function getRectangleArea(side, base) {
    return side * base;
}
exports.getRectangleArea = getRectangleArea;
function getTriangleArea(height, base) {
    return (height * base) / 2;
}
exports.getTriangleArea = getTriangleArea;
function getPolygonPerimeter(sides) {
    return sides.reduce((curr, acc) => curr + acc, 0);
}
exports.getPolygonPerimeter = getPolygonPerimeter;
function triangleCheck(sideA, sideB, sideC) {
    const checkSideA = sideB - sideC < sideA && sideA < sideB + sideC;
    const checkSideB = sideA - sideC < sideB && sideB < sideA + sideC;
    const checkSideC = sideA - sideB < sideC && sideC < sideA + sideB;
    return checkSideA && checkSideB && checkSideC;
}
exports.triangleCheck = triangleCheck;
function getLosangleArea(BiggerDiagonal, SmallestDiagnoal) {
    return (BiggerDiagonal * SmallestDiagnoal) / 2;
}
exports.getLosangleArea = getLosangleArea;

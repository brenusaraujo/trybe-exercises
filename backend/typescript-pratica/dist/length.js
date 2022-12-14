"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// ./length.ts
const readline_sync_1 = __importDefault(require("readline-sync"));
const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
function convert(value, fromUnit, toUnit) {
    const fromIndex = units.indexOf(fromUnit); // pegamos o index da unidade base no array
    const toIndex = units.indexOf(toUnit); // pegamos o index da unidade para a conversão
    const exponent = toIndex - fromIndex; // calculamos o expoente a partir da diferença dos index
    return value * Math.pow(10, exponent);
}
const exec = () => {
    const userValue = parseInt(readline_sync_1.default.question("Whats the value you want to convert?"));
    const userBaseUnit = readline_sync_1.default.question("From what unit do you want to convert?");
    const userToUnit = readline_sync_1.default.question("To what unit you want to convert?");
    convert(userValue, userBaseUnit, userToUnit);
};
exec();

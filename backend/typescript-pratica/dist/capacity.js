"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exec = void 0;
const readline_sync_1 = __importDefault(require("readline-sync"));
const capacityValues = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];
const convertCapacity = (value, bunit, toUnit) => {
    const baseIndex = capacityValues.indexOf(bunit);
    const toIndex = capacityValues.indexOf(toUnit);
    const exponent = baseIndex - toIndex;
    return value * Math.pow(10, exponent);
};
const exec = () => {
    const userValue = parseInt(readline_sync_1.default.question("Whats the value you want to convert?"));
    const userBaseUnit = readline_sync_1.default.question("From what unit do you want to convert?");
    const userToUnit = readline_sync_1.default.question("To what unit you want to convert?");
    convertCapacity(userValue, userBaseUnit, userToUnit);
};
exports.exec = exec;

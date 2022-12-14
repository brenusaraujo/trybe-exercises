"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const volumeUnits = ["km3", "hm3", "dam3", "m3", "dm3", "cm3", "mm3"];
const convertValue = (value, bunit, toUnit) => {
    const baseIndex = volumeUnits.indexOf(bunit);
    const toIndex = volumeUnits.indexOf(toUnit);
    const exponent = baseIndex - toIndex;
    return value * Math.pow(1000, exponent);
};
const exec = () => {
    const userValue = parseInt(readline_sync_1.default.question("Whats the value you want to convert?"));
    const userBaseUnit = readline_sync_1.default.question("From what unit do you want to convert?");
    const userToUnit = readline_sync_1.default.question("To what unit you want to convert?");
    convertValue(userValue, userBaseUnit, userToUnit);
};
exec();

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const areaUnits = ["km2", "hm2", "dam2", "m2", "dm2", "cm2", "mm2"];
const convertArea = (value, bunit, toUnit) => {
    const baseIndex = areaUnits.indexOf(bunit);
    const toIndex = areaUnits.indexOf(toUnit);
    const exponent = baseIndex - toIndex;
    return value * Math.pow(100, exponent);
};
const exec = () => {
    const userValue = parseInt(readline_sync_1.default.question("Whats the value you want to convert?"));
    const userBaseUnit = readline_sync_1.default.question("From what unit do you want to convert?");
    const userToUnit = readline_sync_1.default.question("To what unit you want to convert?");
    const convertedValue = convertArea(userValue, userBaseUnit, userToUnit);
    console.log(`${userValue}${userBaseUnit} é igual a ${convertedValue}${userToUnit}`);
};
exec();

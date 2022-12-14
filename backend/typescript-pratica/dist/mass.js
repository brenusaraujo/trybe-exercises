"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const unidades = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];
const convertMass = (value, bunit, toUnit) => {
    const baseIndex = unidades.indexOf(bunit);
    const toIndex = unidades.indexOf(toUnit);
    const difference = baseIndex - toIndex;
    return value * Math.pow(10, difference);
};
const exec = () => {
    const userValue = parseInt(readline_sync_1.default.question("Whats the value you want to convert?"));
    const userBaseUnit = readline_sync_1.default.question("From what unit do you want to convert?");
    const userToUnit = readline_sync_1.default.question("To what unit you want to convert?");
    convertMass(userValue, userBaseUnit, userToUnit);
};
exec();

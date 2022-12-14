// ./length.ts
import readlineSync from "readline-sync";

const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

function convert(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = units.indexOf(fromUnit); // pegamos o index da unidade base no array
  const toIndex = units.indexOf(toUnit); // pegamos o index da unidade para a conversão
  const exponent = toIndex - fromIndex; // calculamos o expoente a partir da diferença dos index

  return value * Math.pow(10, exponent);
}

const exec = ():void => {
  const userValue:number = parseInt(
    readlineSync.question("Whats the value you want to convert?")
  );

  const userBaseUnit:string = readlineSync.question(
    "From what unit do you want to convert?"
  );
  const userToUnit:string = readlineSync.question("To what unit you want to convert?");

  convert(userValue, userBaseUnit, userToUnit);
};

exec();
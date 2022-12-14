import readlineSync from "readline-sync";

const volumeUnits: string[] = ["km3", "hm3", "dam3", "m3", "dm3", "cm3", "mm3"];

const convertValue = (value: number, bunit: string, toUnit: string): number => {
  const baseIndex = volumeUnits.indexOf(bunit);
  const toIndex = volumeUnits.indexOf(toUnit);
  const exponent = baseIndex - toIndex;

  return value * Math.pow(1000, exponent);
};

const exec = (): void => {
  const userValue: number = parseInt(
    readlineSync.question("Whats the value you want to convert?")
  );

  const userBaseUnit: string = readlineSync.question(
    "From what unit do you want to convert?"
  );
  const userToUnit: string = readlineSync.question(
    "To what unit you want to convert?"
  );

  convertValue(userValue, userBaseUnit, userToUnit);
};

exec();

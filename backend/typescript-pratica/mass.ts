import readlineSync from "readline-sync";

const unidades: string[] = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];

const convertMass = (value: number, bunit: string, toUnit: string): number => {
  const baseIndex = unidades.indexOf(bunit);
  const toIndex = unidades.indexOf(toUnit);
  const difference = baseIndex - toIndex;

  return value * Math.pow(10, difference);
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

  convertMass(userValue, userBaseUnit, userToUnit);
};

exec();

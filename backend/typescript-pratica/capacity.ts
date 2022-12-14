import readlineSync from "readline-sync";

const capacityValues: string[] = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];

const convertCapacity = (
  value: number,
  bunit: string,
  toUnit: string
): number => {
  const baseIndex = capacityValues.indexOf(bunit);
  const toIndex = capacityValues.indexOf(toUnit);
  const exponent = baseIndex - toIndex;
  return value * Math.pow(10, exponent);
};

export const exec = (): void => {
  const userValue: number = parseInt(
    readlineSync.question("Whats the value you want to convert?")
  );

  const userBaseUnit: string = readlineSync.question(
    "From what unit do you want to convert?"
  );
  const userToUnit: string = readlineSync.question(
    "To what unit you want to convert?"
  );

  convertCapacity(userValue, userBaseUnit, userToUnit);
};


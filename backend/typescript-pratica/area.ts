import readlineSync from "readline-sync";

const areaUnits: string[] = ["km2", "hm2", "dam2", "m2", "dm2", "cm2", "mm2"];

const convertArea = (value: number, bunit: string, toUnit: string): number => {
  const baseIndex = areaUnits.indexOf(bunit);
  const toIndex = areaUnits.indexOf(toUnit);
  const exponent = baseIndex - toIndex;

  return value * Math.pow(100, exponent);
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

  const convertedValue = convertArea(userValue, userBaseUnit, userToUnit);

  console.log(
    `${userValue}${userBaseUnit} é igual a ${convertedValue}${userToUnit}`
  );
};

exec();

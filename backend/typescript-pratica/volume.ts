const volumeUnits: string[] = ["km3", "hm3", "dam3", "m3", "dm3", "cm3", "mm3"];

const convertValue = (value: number, bunit: string, toUnit: string): number => {
  const baseIndex = areaUnits.indexOf(bunit);
  const toIndex = areaUnits.indexOf(toUnit);
  const exponent = baseIndex - toIndex;

  return value * Math.pow(1000, exponent);
};

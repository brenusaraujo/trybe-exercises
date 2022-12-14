const areaUnits: string[] = ["km2", "hm2", "dam2", "m2", "dm2", "cm2", "mm2"];

const convertArea = (value: number, bunit: string, toUnit: string): number => {
  const baseIndex = areaUnits.indexOf(bunit);
  const toIndex = areaUnits.indexOf(toUnit);
  const exponent = baseIndex - toIndex;

  return value * Math.pow(100, exponent);
};

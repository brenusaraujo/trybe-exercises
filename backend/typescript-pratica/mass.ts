const unidades: string[] = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];

const convertMass = (value: number, bunit: string, toUnit: string): number => {
  const baseIndex = unidades.indexOf(bunit);
  const toIndex = unidades.indexOf(toUnit);
  const difference = baseIndex - toIndex;

  return value * Math.pow(10, difference);
};

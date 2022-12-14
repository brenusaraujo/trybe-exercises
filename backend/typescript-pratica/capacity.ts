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

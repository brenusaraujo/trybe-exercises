// ./exercises.ts

export function getSquareArea(side: number): number {
  return side ** 2;
}
export function getRectangleArea(side: number, base: number): number {
  return side * base;
}
export function getTriangleArea(height: number, base: number): number {
  return (height * base) / 2;
}
export function getPolygonPerimeter(sides: number[]): number {
  return sides.reduce((curr, acc) => curr + acc, 0);
}
export function triangleCheck(
  sideA: number,
  sideB: number,
  sideC: number
): boolean {
  const checkSideA = sideB - sideC < sideA && sideA < sideB + sideC;
  const checkSideB = sideA - sideC < sideB && sideB < sideA + sideC;
  const checkSideC = sideA - sideB < sideC && sideC < sideA + sideB;
  return checkSideA && checkSideB && checkSideC;
}

export function getLosangleArea(
  BiggerDiagonal: number,
  SmallestDiagnoal: number
): number {
  return (BiggerDiagonal * SmallestDiagnoal) / 2;
}

export function getTrapezoidArea(
  SBase: number,
  BBase: number,
  height: number
): number {
  return ((SBase + BBase) * height) / 2;
}

export function getCircleArea(radio: number): number {
  return Math.PI * radio * radio;
}

export function greeter(name: string): string {
  return `Olá ${name}`;
}

export function personAge(name: string, age: number): string {
  return `${name} tem ${age} anos`;
}

export function sum(x: number, y: number): number {
  return x + y;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(sum, 0);
}

export function triangle(base: number, height: number): number {
  return (base * height) / 2;
}

export function square(side: number): number {
  return side ** 2;
}

export function rectangle(base: number, height: number): number {
  return base * height;
}

export function diamond(biggerDiagnoal: number, minorDiagnoal: number): number {
  return (biggerDiagnoal * minorDiagnoal) / 2;
}

export function trapezoid(
  biggerBase: number,
  minorBase: number,
  height: number
): number {
  return ((biggerBase + minorBase) * height) / 2;
}

export function circleArea(radios: number): number {
  return Math.PI * radios * radios;
}

export default class Car {
  _brand: string;
  _color: string;
  _doors: number;

  constructor(b: string, c: string, d: number) {
    this._brand = b;
    this._color = c;
    this._doors = d;
  }

  honk(): void {
    console.log("the horn is on");
  }
  turnOn(): void {
    console.log("the car is on");
  }
  speedUp(): void {
    console.log("the car is speeding up");
  }
  speedDown(): void {
    console.log("the car is slowing down");
  }
  stop(): void {
    console.log("the car is stopped");
  }
  turn(direction: string): void {
    console.log(`the car is turning into ${direction}`);
  }
}

const myCar = new Car("volkswagen", "silver", 4);

myCar.speedUp();
myCar.turn("left");
myCar.speedUp();
myCar.turn("right");
myCar.speedUp();
myCar.turn("right");
myCar.speedDown();
myCar.stop();

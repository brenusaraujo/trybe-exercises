"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(b, c, d) {
        this._brand = b;
        this._color = c;
        this._doors = d;
    }
    honk() {
        console.log("the horn is on");
    }
    turnOn() {
        console.log("the car is on");
    }
    speedUp() {
        console.log("the car is speeding up");
    }
    speedDown() {
        console.log("the car is slowing down");
    }
    stop() {
        console.log("the car is stopped");
    }
    turn(direction) {
        console.log(`the car is turning into ${direction}`);
    }
}
exports.default = Car;
const myCar = new Car("volkswagen", "silver", 4);
myCar.speedUp();
myCar.turn("left");
myCar.speedUp();
myCar.turn("right");
myCar.speedUp();
myCar.turn("right");
myCar.speedDown();
myCar.stop();

class animal {
  constructor(public name: string, private birthDate: Date) {}

  public get age(): void | number {
    const timeDiff = Math.abs(Date.now() - new Date(this.birthDate).getTime());
    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }
}

class mamal extends animal {
  walk() {
    console.log(`${this.name} is walking`);
  }
  // constructor(parameters) {}
}

const tiger = new mamal("tiger", new Date(Date.parse("August 08, 1996")));

const main = (animal: animal) => {
  console.log(animal.age);
};

main(tiger);
tiger.walk();

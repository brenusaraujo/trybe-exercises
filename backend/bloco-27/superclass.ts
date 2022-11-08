class Superclass {
  constructor(public isSuper: boolean) {
    isSuper = true;
  }

  public sayHello(): void {
    console.log("hello world");
  }
}

class Subclass extends Superclass {
  constructor() {
    super(false);
  }
}

const myFunc = (superclass: Superclass): void => {
  superclass.sayHello();
};

const firstSuperClass = new Superclass(true);

const firstSubClass = new Subclass();

myFunc(firstSubClass);
myFunc(firstSuperClass);

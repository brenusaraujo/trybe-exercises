class Superclass {
  constructor(public isSuper: boolean) {
    isSuper = true;
  }

  public sayHello() {
    console.log("hello world");
  }
}

class Subclass extends Superclass {
  // constructor(parameters) {}
}

const myFunc = (superclass: Superclass) => {
  superclass.sayHello();
};

const firstSuperClass = new Superclass(true);

const firstSubClass = new Subclass(false);

myFunc(firstSubClass);
myFunc(firstSuperClass);

interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) {}

  public myFunc(myParam: number): string {
    return `${myParam + this.myNumber}`;
  }
}

const teste = new MyClass(10);

teste.myFunc(20);
console.log(
  "🚀 ~ file: MyInterface.ts ~ line 17 ~ teste.myFunc(20);",
  teste.myFunc(20)
);

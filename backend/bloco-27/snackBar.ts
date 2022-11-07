class Costumer {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
}

class OrderItem {
  name: string;
  price: number;
  constructor(n: string, p: number) {
    this.name = n;
    this.price = p;
  }
}

class Order {
  costumer = new Costumer("Breno");
  fries = new OrderItem("fries", 10);
  payment: string;
  discount?: number;
  constructor(p: string) {
    this.payment = p;
  }

  private value = (): number => {
    const allOrdersPrice = [];
    allOrdersPrice.push(this.fries.price);
    return allOrdersPrice.reduce((acc, curr) => acc + curr, 0);
  };

  public get entireValue(): number {
    return this.value();
  }

  public get discountedValue(): number | string {
    if (this.discount) {
      return this.value() * this.discount - this.value();
    }
    return "discount was not provided";
  }
}

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
}

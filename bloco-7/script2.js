const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const costumerName = order.name;
  const costumerPhone = order.phoneNumber;
  const street = order.address.street;
  const number = order.address.number;
  const apartment = order.address.apartment;
  console.log(`Olá ${deliveryPerson}, entrega para ${costumerName}, telefone ${costumerPhone}, R. ${street}, nº ${number}, ap: ${apartment}`)


}

customerInfo(order);

const orderModifier = (order) => {
  order.name = 'Luiz Silva';
  const costumerName = order.name;
  const orders = Object.keys(order.order.pizza);
  // for(let index = 0; index<pizza.length; index+=1){

  // }
  const total = order.payment.total = 50;
  orders.push(order.order.drinks.coke.type); 
  
  console.log(`Olá, ${costumerName}. O total do seu pedido de ${orders[0]}, ${orders[1]} e ${orders[2]} é ${total}` )
}

orderModifier(order);
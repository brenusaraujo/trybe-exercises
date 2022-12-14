type numberOfSlices = 4 | 6 | 8;

interface pizza {
  flavor: string;
  slices: numberOfSlices;
}

const pizza1: pizza = {
  flavor: "Calabresa",
  slices: 8
};
const pizza2: pizza = {
  flavor: "Marguerita",
  slices: 6
};
const pizza3: pizza = {
  flavor: "Nutela",
  slices: 4
};
type common = "Calabresa" | "Frango" | "Pepperoni";

interface PizzaCommon extends pizza {
  flavor: common;
}

type vegetarian = "Marguerita" | "Palmito" | "Cogumelo";
type sweet = "Nutela" | "Goiabada com Queijo" | "Marshmallow";

interface PizzaVegetarian extends pizza {
  flavor: vegetarian;
}
interface PizzaSweet extends pizza {
  flavor: sweet;
  slices: 4;
}

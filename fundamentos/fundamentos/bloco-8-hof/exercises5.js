// Faça uma lista com as suas frutas favoritas
const specialFruit = ['maçã', 'pêra', 'uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['suco de laranja', 'leite condensado', 'granola'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];

console.log(fruitSalad(specialFruit, additionalItens));
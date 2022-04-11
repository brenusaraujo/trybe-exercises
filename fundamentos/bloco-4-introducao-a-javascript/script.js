let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Bem-vinda, ' + info.personagem)

info.recorrente = 'Sim';

console.log(info.recorrente)

for (let key in info) {
    console.log(key)
}

for (let key in info) {
    console.log(info[key])
}


function verificaPalindrome(string) {
    let lowerCaseStr = string.toLowerCase();
    let reverseStr = lowerCaseStr.split('').reverse().join('');
    if (reverseStr === lowerCaseStr) {
        return true;
    } else {
        return false;
    }
}

console.log(verificaPalindrome('desenvolvimento'));

let numeros = [2, 4, 6, 7, 10, 1, -3];

function indexBigger(numeros) {
    let compara = 0;
    let indiceDoMaior = 0
    for (let index = 0; index < numeros.length; index += 1) {
        if (numeros[index] > compara) {
            compara = numeros[index];
            indiceDoMaior = index;
        }
    }
    return indiceDoMaior;
}

console.log(indexBigger(numeros));

function indexSmaller(numeros) {
    let compara = 0;
    let indiceDoMenor = 0
    for (let index = 0; index < numeros.length; index += 1) {
        if (numeros[index] < compara) {
            compara = numeros[index];
            indiceDoMenor = index;
        }
    }
    return indiceDoMenor;
}

console.log(indexSmaller(numeros));

names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];


function biggerWord(names) {
    let compara = 0;
    let indiceDoMenor = 0
    for (let index = 0; index < numeros.length; index += 1) {
        if (numeros[index] < compara) {
            compara = numeros[index];
            indiceDoMenor = index;
        }
    }
    return indiceDoMenor;
}
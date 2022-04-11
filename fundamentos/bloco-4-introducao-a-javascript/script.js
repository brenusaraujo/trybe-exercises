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

console.log(verificaPalindrome('desenvolvimento'))
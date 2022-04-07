let piece = 'KING';
let pieceLowerCase;

pieceLowerCase = piece.toLowerCase(); //https://www.w3schools.com/jsref/jsref_tolowercase.asp

if (pieceLowerCase === 'bishop') {
    console.log('diagonals')
} else if (pieceLowerCase === 'king') {
    console.log('square in any direction.');
} else if (pieceLowerCase === 'queen') {
    console.log('diagonally, horizontally or vertically, in any number of squares');
} else if (pieceLowerCase === 'rook') {
    console.log('horizontally or vertically any number os squares.');
} else if (pieceLowerCase === 'knight') {
    console.log('"L" shape. Two squares in a horizontal or vertical direction, then move one square horizontally or vertically.');
} else if (pieceLowerCase === 'pawn') {
    console.log('vertically one square.');
}
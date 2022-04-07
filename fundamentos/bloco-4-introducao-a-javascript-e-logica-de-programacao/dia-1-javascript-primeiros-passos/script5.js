const angleOne = 45;
const angleTwo = 30;
const angleThree = 105;

if (angleOne || angleTwo || angleThree < 0) {
    console.log('there is an invalid angle.');
}

if (angleOne + angleTwo + angleThree == 180) {
    console.log(true);
} else {
    console.log(false);
}
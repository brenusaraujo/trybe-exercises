const a = 40;
const b = 20;
const c = 30;

if (a > b) {
    console.log(a);
} else {
    if (a > c) {
        console.log(a);
    } else {
        if (b > c) {
            console.log(b);
        } else {
            console.log(c);
        }
    }
}
// even-odd reporter
function isEven(i) {
    return n % 2 === 0
}
console.log(isEven);

for (let i = 0; i < 20; i++) {
    if (i = isEven) {
        return i + "this is an even number";
    } else {
        return i + "this is an odd number";
    };
}
// Oplossing even-odd
for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is oneven");
    }
}
// Multiplication tables
function Multiplication(score) {
    console.log(i * 9);
}
console.log(Multiplication);
for (let i = 0; i <= 10; 1++) {
    console.log(i + Multiplication + "");
}
// Oplossing multiplication
const multiplier = 9;
for (let i = 0; i <= 10; i++) {
    let result = multiplier * i;
    console.log(multiplier + " * " + i + " = " + result);
}
// Grade Assigment
function assignGrade(score) {
    if (score > 90) {
        return "A";
    } else if (score > 80) {
        return "B";
    } else if (score > 70) {
        return "C";
    } else if (score > 65) {
        return "D";
    } else {
        return "F";
    }
}

for (let i = 60; i <= 100; i++) {
    console.log("Voor " + i + " punten, krijg je een " + assignGrade(i));
}
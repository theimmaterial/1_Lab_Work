'use strict';

// середнє арифметичне двох чисел
{ function average(a, b) {
  return (a + b) / 2;
};
}
// квадрат числа
function square(x) {
  return x * x;
}

// куб числа
function cube(x) {
  return x * x * x;
}

// обчислення в циклі 0..9 і збирання результатів у масив
function calculate() {
  const res = [];
  for (let i = 0; i <= 9; i++) {
    const s = square(i);
    const c = cube(i);
    res.push(average(s, c));
  }
  return res;
}

console.log(calculate());
console.log(average(10, 5));
console.log(cube(3));
'use strict';

function inc(n) { //Створюємо функцію
  return n + 1; //Повертаємо значення параметру 'n' + 1
};

//Приклад виклику
const a = 5;
let b = inc(a);
console.dir({ a, b });
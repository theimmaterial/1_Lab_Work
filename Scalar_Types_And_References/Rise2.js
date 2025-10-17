'use strict';

function inc(num) {
  num.n += 1; //Змінюємо поле n у вихідному об'єкті
}

//Приклад виклику
const obj = { n: 5 };
inc(obj);
console.dir(obj); // { n: 6 }
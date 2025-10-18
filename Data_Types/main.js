'use strict';

const src = [
  true, 'hello', 5, 12, -200, false, false, 'word',
  null, undefined, NaN, Symbol('s'), 10n,
  { a: 1 }, [1, 2], function () {}, new Date(), /re/,
  new Map(), new Set(), () => {}, { x: null }
];

const counts = {};              // стартуємо з порожнього об’єкта

for (const item of src) {       // for..of по масиву
  const t = typeof item;        // тип елемента
  counts[t] ??= 0;              // якщо ключу ще нема — створюємо з 0
  counts[t]++;                  // інкремент
}

console.log(counts);
// Приблизний вивід: { boolean: 3, string: 2, number: 4, object: 7, symbol: 1, bigint: 1, function: 2, undefined: 1 }

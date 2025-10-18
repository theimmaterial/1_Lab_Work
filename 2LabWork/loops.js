'use strict';

// масив усіх чисел у діапазоні [start, end], включно з межами
function range(start, end) {
  const res = [];
  const step = start <= end ? 1 : -1;

  for (let i = start; step > 0 ? i <= end : i >= end; i += step) {
    res.push(i);
  }
  return res;
}

// масив непарних чисел у діапазоні [start, end], включно з межами
function rangeOdd(start, end) {
  const res = [];
  const step = start <= end ? 1 : -1;

  for (let i = start; step > 0 ? i <= end : i >= end; i += step) {
    if (Math.abs(i) % 2 === 1) res.push(i); // непарність для від’ємних теж працює
  }
  return res;
}

console.log(range(15, 30));

console.log(rangeOdd(15, 30));

console.log(range(5, 1));
console.log(rangeOdd(10, 3));
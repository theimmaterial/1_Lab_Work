'use strict';

const contacts = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Julia', phone: '+380671112233' },
  { name: 'Max', phone: '+380931234567' },
  { name: 'Olena', phone: '+380501112244' },
  { name: 'Vladyslav', phone: '+380934995665' },
  { name: 'Obama', phone: '+18165724164'}
];

// пошук телефону за ім’ям у масиві (цикл for)
function findPhoneByName(name) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].name === name) {
      return contacts[i].phone;
    }
  }
  return null; // якщо не знайдено
}

// хеш-код
const phoneBook = {
  'Marcus Aurelius': '+380445554433',
  'Julia': '+380671112233',
  'Max': '+380931234567',
  'Olena': '+380501112244',
  'Vladyslav': '+380934995665',
  'Obama': '+18165724164'
};

function findPhoneByNameFromHash(name) {
  return phoneBook[name] ?? null;
}

console.log(findPhoneByNameFromHash('Vladyslav'));
console.log(findPhoneByName('Obama'));
console.log(findPhoneByNameFromHash('Unknown'));
console.log(findPhoneByName());
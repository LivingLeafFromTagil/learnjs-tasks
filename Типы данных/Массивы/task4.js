// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

function sumInput() {
  let num = +prompt("Enter value");
  const arr = [];
  let counter = 0;
  while(isFinite(num)) {
    arr.push(num);
    counter += num;
    num = +prompt("Enter value");
  }
  return counter;
}
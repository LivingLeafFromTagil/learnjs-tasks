//Сортировать по убыванию

/* let arr = [5, 2, 1, -10, 8];

// ... ваш код для сортировки по убыванию

alert( arr ); // 8, 5, 2, 1, -10 */

function descSort(a, b) {
  return a >= b ? -1 : 1;
}

let arr = [5, 2, 1, -10, 8];

arr.sort(descSort);

alert( arr );
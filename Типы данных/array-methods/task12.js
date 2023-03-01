// Пусть arr – массив строк.

// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

// Например:

/* function unique(arr) {
   //ваш код 
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O */

function unique(arr) {
  const result = [];
  for(let i = 0; i < arr.length; i++) {
    if(result.indexOf(arr[i]) == -1) {
      result.push(arr[i]);
    }
  }
  return result;
}
// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

function sum() {
  const firstValue = prompt("First", "");
  const secondValue = prompt("Second","");
  alert(+firstValue + +secondValue);
}

sum();
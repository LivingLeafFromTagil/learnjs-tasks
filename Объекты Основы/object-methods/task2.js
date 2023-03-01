// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

/* let calculator = {
  // ... ваш код ...
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul()); */

let calculator = {
  read() {
    this.firstValue = prompt("First value:", "");
    this.secondValue = prompt("First value:", "");
    return this;
  },

  sum() {
    return +this.firstValue + +this.secondValue || "No values";
  },

  mul() {
    return this.firstValue * this.secondValue || "No values";
  }
};
// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.

/* 
let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul()); */

function Calculator() {
	this.read = function() {
		this.firstValue = prompt("First value:", "");
		this.secondValue = prompt("Second value:", "");
	};

	this.sum = function() {
		return +this.firstValue + +this.secondValue || "No values";
	};

	this.mul = function() {
		return this.firstValue * this.secondValue || "No values";
	};
}
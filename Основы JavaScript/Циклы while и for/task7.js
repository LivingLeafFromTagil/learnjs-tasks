let n = prompt("Введите число:", "");

while (n < 2) {
	if (n == null) {
		break;
	}
	alert("Введите число, которое не меньше 2!");
	n = prompt("Введите число:", "");
}

label: for (let i = 2; i <= n; i++) {
  let isPrime = true;
	for (let j = 2; j <= i; j++) {
		if (i % j == 0) {
			isPrime = false;
			continue label;
		}
	}
	if (isPrime) {
		alert(`${i} - простое`);
	}
}

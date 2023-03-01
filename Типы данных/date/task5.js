// Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

// Параметры:

// year – год из четырёх цифр, например, 2012.
// month – месяц от 0 до 11.
// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

function getLastDayOfMonth(year, month) {
  const longMonths = [0, 2, 4, 6, 7, 9, 11];
  if(longMonths.includes(month)) {
    return 31;
  } else if(month == 1) {
    if(year % 4 == 0) {
      return 29;
    } else {
      return 28;
    }
  } else {
    return 30;
  }
}
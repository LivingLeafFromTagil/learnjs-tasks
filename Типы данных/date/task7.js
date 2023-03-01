// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

// Например, если сейчас 23:00, то:

/* getSecondsToTomorrow() == 3600; */

// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

function getSecondsToTomorrow() {
  const today = new Date();
  const pastSeconds = Math.floor((Date.now() - +(new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0))) / 1000);
  const SECONDSINDAY = 86400;
  return SECONDSINDAY - pastSeconds;
}
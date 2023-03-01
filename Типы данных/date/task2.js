// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

/* let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getWeekDay(date) );        // нужно вывести "ВТ" */

function getWeekDay(date) {
  const days = ["«ВС»", "«ПН»", "«ВТ»", "«СР»", "«ЧТ»", "«ПТ»", "«СБ»"];
  return days[date.getDay()];
}
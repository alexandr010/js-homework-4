/*
 * #1
 *
 * Создайте функцию wordsList(str, subStr), принимающую два параметра:
 * строку текста произвольной длины и подстроку для поиска.
 * Функция должна вернуть коллекцию уникальных слов в нижнем регистре, без символов-разделителей, т.е.:
 * из строки str необходимо удалить все следующие символы: . , ! ? ; : "
 * привести строку к нижнему регистру
 * получить коллекцию уникальных, неповторяющихся слов, в которых содержится подстрока,
 * переданная в параметре subStr.
 */

let wordsList = (str, subStr) => {
  let re = new RegExp('\\.|,|\\?|!|:|;|"', 'gui');
  let arr = str.
  replace(re, '').
  toLowerCase().
  split(' ').
  filter((arrItem) => arrItem.indexOf(subStr) > -1);
  let set = new Set(arr);
  return set;
};

console.log(wordsList(myLongStr, 'lore')); // {"lorem", "dolores", "doloremque", "dolore", "dolorem"}
console.log(wordsList(myLongStr, 'no')); // {"non", "nostrum", "nobis"}
console.log(wordsList(myLongStr, 'rep')); // {"repellendus", "repudiandae", "repellat", "reprehenderit"}


/*
 * #2
 *
 * Создайте функцию getLocalDate(date, isSeconds, isISO), которая будет принимать любую
 * дату от конструктора new Date и преобразовывать ее в следующие форматы в зависимости от параметров:
 * getLocalDate(date)              → dd.mm.yyyy, hh:mm,    например: 16.07.2019, 00:15
 * getLocalDate(date, true)        → dd.mm.yyyy, hh:mm:ss, например: 16.07.2019, 00:15:32
 * getLocalDate(date, false, true) → yyyy-mm-dd, hh:mm,    например: 2019-06-02, 00:15
 * getLocalDate(date, true, true)  → yyyy-mm-dd, hh:mm:ss, например: 2019-06-02, 00:15:32
 * date – любая дата из конструктора new Date().
 * isSeconds – опциональный параметр для отображения секунд в дате.
 * isISO – опциональный параметр переключения формата даты.
 */

let myDate = new Date();
let getLocalDate = (date, isSeconds = false, isISO = false) => {
  const reg = new RegExp(':\\d{2}$', 'gui');
  let res;

  if (!isISO) {res = isSeconds ?
    date.toLocaleString() :
    date.toLocaleString().replace(reg, '');}
  else {
    const year = date.getFullYear();
    const month =
      date.getMonth() + 1 < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const day = date.getDate() < 9 ? `0${date.getDate()}` : date.getDate();
    const hour = date.getHours() < 9 ? `0${date.getHours()}` : date.getHours();
    const minutes =
      date.getMinutes() < 9 ? `0${date.getMinutes()}` : date.getMinutes();
    const seconds =
      date.getSeconds() < 9 ? `0${date.getSeconds()}` : date.getSeconds();

    res = isSeconds ?
      `${year}-${month}-${day}, ${hour}:${minutes}:${seconds}` :
      `${year}-${month}-${day}, ${hour}:${minutes}`;
  }

  return res;
};

// console.log(getLocalDate(myDate)); // 16.07.2019, 00:15
// console.log(getLocalDate(myDate, true)); // 16.07.2019, 00:15:32
// console.log(getLocalDate(myDate, false, true)); // 2019-06-02, 00:15
// console.log(getLocalDate(myDate, true, true)); // 2019-06-02, 00:15:32
// console.log(getLocalDate(new Date(123456))); // 01.01.1970, 03:02
// console.log(getLocalDate(new Date(123456), true)); // 1970-01-01, 03:02:03
// console.log(getLocalDate(new Date(123456), false, true)); // 1970-01-01, 03:02:03
// console.log(getLocalDate(new Date(123456), true, true)); // 1970-01-01, 03:02:03

// тестирование
// console.log(getLocalDate(new Date(123456)) === '01.01.1970, 03:02');
// console.log(getLocalDate(new Date(123456), true) === '01.01.1970, 03:02:03');
// console.log(getLocalDate(new Date(123456), false, true) === '1970-01-01, 03:02');
// console.log(getLocalDate(new Date(123456), true, true) === '1970-01-01, 03:02:03');
// console.log(getLocalDate(new Date(1999999123456)) === '18.05.2033, 06:18');
// console.log(getLocalDate(new Date(1999999123456), true) === '18.05.2033, 06:18:43');
// console.log(getLocalDate(new Date(1999999123456), false, true) === '2033-05-18, 06:18');
// console.log(getLocalDate(new Date(1999999123456), true, true) === '2033-05-18, 06:18:43');


/*
 * #3
 *
 * Создайте функцию getWeekDay(date), которая принимает дату в виде строки в формате 'yyyy-mm-dd'
 * и выводит текущий день недели: "понедельник", "вторник", … "воскресенье".
 */
let getWeekDay = (date) => {
  let d = new Date(date);
  let days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
  return days[d.getDay(date)];
};
console.log(getWeekDay('2019-01-30')); // среда
console.log(getWeekDay('2019-07-16')); // вторник
console.log(getWeekDay('2019-07-27')); // суббота

/*
 * #4
 *
 * Напишите функцию, getLocalDay(date) которая возвращает день недели для даты date.
 * День нужно возвратить в европейской нумерации, т.е. понедельник имеет номер 1, вторник номер 2, …, воскресенье – номер 7.
 */
let getLocalDay = (date) => {
  let d = new Date(date);
  let day = d.getDay();
  if (day === 0) {
    day = 7;
  }
  return day;
};
console.log(getLocalDay('2019-07-16')); // 2
console.log(getLocalDay('2019-07-25')); // 4
console.log(getLocalDay('2019-07-27')); // 6

/*
 * #5
 *
 * Создайте функцию getDateAgo(date, days), которая возвращает дату,
 * которая была days дней назад от указанной даты date.
 * Дата принимается и возвращается в формате YYYY-MM-DD.
 */
let getDateAgo = (d, days) => {
  const date = new Date(d);

  date.setDate(date.getDate() - days);
  return date.toLocaleString().replace(/(\d.*),\s+(\d.*)/gu, '$1');
};

console.log(getDateAgo('2019-01-29', 1)); // 28.01.2019
console.log(getDateAgo('2019-01-29', 2)); // 27.01.2019
console.log(getDateAgo('2019-01-29', 365)); // 29.01.2018

/*
 * #6
 *
 * Используя в качестве основы, объект car, описанный в прошлом занятии, создайте прототип Car,
 * реализующий те же поля (#17.4) и методы(#17.5 и #17.6) у создаваемых объектов.
 *
 * Например:
 * let car = new Car(2000, 'Lacetti', 'Chevrolet', 2010);
 * let car2 = new Car(5000, 'FX50 AWD', 'Infinite', 2019);
 *
 * Способ создания прототипа не регламентирован.
 * Объекты и их методы, созданные прототипом должны полностью соответствовать объектам из прошлого задания.
 */
let Car = function (engine, model, name, year) {
  this.engine = engine;
  this.model = model;
  this.name = name;
  this.year = year;
};

Object.defineProperties(Car.prototype, {
  used: {
    get(){
      const yearNow = new Date().getFullYear();
      return yearNow -this.year > 1 ? 'used' : 'new';
    },
    set(value){
      const yearNow = new Date().getFullYear();
      if (value === 'new' && this.year < yearNow) {this.year =yearNow;}
    }
  }
});
Car.prototype.info = function(){
  return `${this.name} ${this.model}, ${this.engine}cc, year ${this.year}, ${this.used}`;
};

let car = new Car(2000, 'Lacetti', 'Chevrolet', 2010);
let car2 = new Car(5000, 'FX50 AWD', 'Infinite', 2019);
console.log(car.info()); // chevrolet Lacetti, 2010cc, year 2010, used
car.used = 'new';
console.log(car.info()); // chevrolet Lacetti, 2019cc, year 2019, new -- год изменен
car.used = 'used';
console.log(car.info()); // chevrolet Lacetti, 2019cc, year 2019, new -- изменения не выполняются
console.log(car2.info()); // infinite FX50 AWD, 2019cc, year 2019, new
car.used = 'used';
console.log(car2.info()); // infinite FX50 AWD, 2019cc, year 2019, new -- изменения не выполняются

/*
 * #7
 * Напишите функцию testPerformance(iterations, func) для тестирования производительности любых, переданных ей в качестве параметра функций.
 * iterations – количество повторений для тестирования.
 * func – тестируемая функция.
 *
 * Если в качестве параметра передается что-либо кроме функции, тестирование не выполняется, возвращается 0.
 */

let testPerformance = (iterations, func) => {
  let time = Date.now();
  if (typeof func === 'function') for (let i = iterations; i--;) func();
    return Date.now() - time;
};
// данная функция необходима для корректного тестирования кода
function test1() {
  let str = myLongStr;
  while (str.indexOf('o') !== -1) str = str.replace('o', '');
  while (str.indexOf('a') !== -1) str = str.replace('a', '');
  while (str.indexOf('e') !== -1) str = str.replace('e', '');
  while (str.indexOf('u') !== -1) str = str.replace('u', '');
  while (str.indexOf('i') !== -1) str = str.replace('i', '');
}

// данная функция необходима для корректного тестирования кода
function test2() {
  const reg = new RegExp('[oaeui]', 'gui');

  myLongStr.replace(reg, '');
}

console.log(testPerformance(100, test1)); // time
console.log(testPerformance(100, test2)); // time
console.log(testPerformance(100, 12345)); // 0

'use strict';
// на кнопку добавить обработчик события клик,
// который будет логировать количество кликов на кнопку
// после 3 кликов  - удалять обработчик с кнопки 
// и делать кнопку некликабельной(disabled)

const btnCounter = document.getElementById('btnCounter');

//v.1 Первое, что пришло в голову
// let counter = 0;
// const count = () => {
//   console.log('click' + ++counter);
//   if (counter === 3) {
//     btnCounter.removeEventListener('click', count);
//     btnCounter.disabled = true;
//   }
// }
// btnCounter.addEventListener('click', count);

//v.2 Добавил замыкание, чтоб избавиться от глобальной переменной
// const createCounter = (counter = 0) => () => {
//   console.log('click' + counter--);
//   if (counter === 0) {
//     btnCounter.removeEventListener('click', count);
//     btnCounter.disabled = true;
//   }
// };
// const count = createCounter(3);  
// btnCounter.addEventListener('click', count);

//v.3 Неудачная попытка сделать для любой кнопки.
//Стрелочной не получится, поскольку у нее отсутствует связывание с this
// function createCounter(counter = 0) {
//   return function () {
//     console.log('click' + counter--);
//     if (counter === 0) {
//       this.removeEventListener('click', count);
//       this.disabled = true;
//     }
//   }
// }
// const count = createCounter(3);
// btnCounter.addEventListener('click', count);

//v.4 Ура! Сделал для любой кнопки :-)
// function createCounter(counter = 0) {
//   return function count (event) {
//     console.log('click' + counter--);
//     if (counter === 0) {
//       this.disabled = true;
//       this.removeEventListener('click', count);
//     }
//   }
// }
// btnCounter.addEventListener('click', createCounter(3));

//v.5 Решил победить стрелочными функциями, добрался до event
const createCounter = (counter = 0) => {
  const count = (event) => {
    console.log('click' + counter--);
    if (counter === 0) {
      event.target.disabled = true;
      event.target.removeEventListener('click', count);
    }
  }
  return count;
}
btnCounter.addEventListener('click', createCounter(3));
//ЗАДАЧА No1
// Моделирование Задержки Выполнения:
// Напишите функцию, которая принимает число в качестве входных данных и
// возвращает промис, который разрешается после указанного количества миллисекунд.
// Используйте эту функцию, чтобы создать задержку в 2 секунды, а затем
// зарегистрировать сообщение в консоли после разрешения промиса.

// const MyFunc = (seconds) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Вызов консоли спустя ${seconds / 1000} секунды`);
//     }, seconds);
//   });
// };

// MyFunc(2000).then((value) => {
//   console.log(value);
// });

//_______________________________________________________________________________________________

//ЗАДАЧА No2
// Цепочка Промисов:
// Создайте две функции, `firstTask` и `secondTask`, каждая из которых возвращает
// промис, разрешающийся строковым сообщением. Свяжите эти промисы так, чтобы
// вторая задача выполнялась только после разрешения первой. Наконец,
// зарегистрируйте объединенный результат в консоли.

// const firstTask = (seconds) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Первая задача");
//     }, seconds);
//   });
// };

// const secondTask = (secodns) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Вторая задача");
//     }, secodns);
//   });
// };

// firstTask(1000)
//   .then((value) => {
//     console.log(value);
//     return secondTask(2000);
//   })
//   .then((value) => {
//     console.log(value);
//   });

//_______________________________________________________________________________________________

//ЗАДАЧА No3
// Использование Promise.all():
// Создайте три отдельные функции, каждая из которых возвращает промис, который
// разрешается строковым сообщением после указанной задержки. Используйте
// `Promise.all()` для выполнения всех трех функций параллельно и зарегистрируйте
// массив разрешенных сообщений после разрешения всех промисов

// const FirstFn = (seconds) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Первая функция");
//     }, seconds);
//   });
// };

// const secondFn = (seconds) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Вторая функция");
//     }, seconds);
//   });
// };

// const ThirdFn = (seconds) => {
//   return new Promise((resolve) => {
//     resolve("Третья функция");
//   }, seconds);
// };

// Promise.all([FirstFn(1000), secondFn(2000), ThirdFn(3000)]).then((value) => {
//   console.log(value);
// });

//_______________________________________________________________________________________________

//ЗАДАЧА No4
//Сценарий с Promise.race():
// Напишите две функции, `fastTask` и `slowTask`, каждая из которых возвращает
// промис, который разрешается строковым сообщением после различных временных
// задержек (один быстрый, другой медленный). Используйте `Promise.race()` для
// выполнения обеих функций и зарегистрируйте результат промиса, который
// разрешается первым

// const fastTask = (seconds) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Fast");
//     }, seconds);
//   });
// };

// const slowTask = (seconds) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Slow");
//     }, seconds);
//   });
// };

// Promise.race([fastTask(1000), slowTask(2000)])
//   .then((value) => {
//     console.log(value);
//     return slowTask(2000);
//   })
//   .then((value) => {
//     console.log(value);
//   });

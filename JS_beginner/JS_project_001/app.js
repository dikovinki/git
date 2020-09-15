// 1.FUNCTION <-- ФУНКЦИИ <-- Смотри ютюб-канал Владилена: Сложный ДжаваСкрипт простым языком

// Function Declaration - можем обращаться к ней когда захотим 
// можем вызвать greet ее по коду до ее инициализации
// function greet(name){
//     console.log('Привет -', name)
// }

// Function expression - не можем обращать к ней до инициализации
// создадим переменную и как значение укажем функцию
// const greet2 = function greet2(name) {
//     console.log('привет 2 -', name)
// }
// greet('Andrey')
// greet2('Andrey')
// console.log(typeof greet)  // хак для удобства кодинга который поможет определить функция или нет 
//onsole.dir(greet) // покажет всю конструкцию объекта (в данном случае функции)

// 2.Анонимные функции
// let counter = 0
// const interval = setInterval(function() {
//     if (counter === 5) {
//         clearInterval(interval) // остановит каунтер на 5
//     } else {
//     console.log(++counter)
//     }
// }, 1000)

// 3. Стрелочные функции - новый синтакс в ES06 чтобы не писать каждый раз function etc.
// ARROW
function greet(name){
    console.log('Привет -', name)
}
const arrow = (name) => {  // => дает название стрелочная функции
    console.log('Привет - ', name)
    }
    arrow('Andre')
    // иднтичная запись но короче:
    const arrow2 = name => console.log('Hello -', name)
    arrow2('Andre')
    // это работает т.к. существует одна переменная поэтому можно обойтись без скобок
    // example:
const pow2 = num => {
    return num **2 // возводит в квадрат
}
console.log(pow2(5))
// 4. Параметры по умолчанию -- Default Parameters ES06 
// const sum = (a, b=1) => a + b // b в данной записи равно по умолчанию 1
// console.log(sum(41, )) // в случае когда второй параметр не указан b принимает значение 1 по умолчанию
// если параметр по умолчанию не указан результатом суммы будет NaN (undefined + number)=NaN
 const sum = (a = 40, b = a * 2) => a + b
 console.log(sum())
 // создадим функцию котор будет принимать неограниченное колличество цифр и считать общую сумму
 // ... - три точки это оператор REST котор собирает все числа в All превращая в массив
 function sumAll(...all){
     let result = 0
     for (let num of all){
         result += num
     }
     return result
 }
 const res = sumAll(1, 2, 3, 4, 5, 6, 7, 12)
 console.log(res)

 // 5. Замыкания 
 function createMember(name) {
    return function(lastName) {
        console.log(name + lastName)
    }
 }

 const logWithLastName = createMember('Andrey ') // одно из практических применений этого
 // создание приватных переменных для защиты данных
 console.log(logWithLastName('Zhelkovsky')) 
 console.log(logWithLastName('Dikovinki')) 
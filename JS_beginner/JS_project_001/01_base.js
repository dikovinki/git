//   1. variables
// camelCase - acceptable syntax typing 
// data_types
// const firstName = 'Andrey' // data_type STRING
// //const age = 41   // data_type NUMBER
// const isProgrammer = true // data_type boolean

// // type variables
// const _ = 'value'
// const $ = 'some value'
// // const if = 'mkef' // error
// const withNum5 = '5'
// // const 5withnum = '5' // error

// var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world! :)';


//  2. мутирование Mutation
// concatenation
// console.log('Name of the person ' + firstName + ', and age of the person ' + age)
// alert('Name of the person ' + firstName + ', and age of the person ' + age)
// const lastName = prompt('enter your lastName')
// alert(firstName + ' ' + lastName)

//  3. операторы Operators
// let currentYear = 2020 // чтобы можно было изменять параметр
// const birthYear = 1978
// //const age = currentYear - birthYear

// const a = 10
// const b = 5
// let c = 32
// // c=c+a
// c +=a
// // c=c-a
// // c=c*a
// // c=c/a

// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(++currentYear)
// console.log(--currentYear)
// console.log(c)

//  4. Type of DATA
// const isProgrammer = true
// const name = 'Andrey'
// const age = 41
// let x
// let a = 10
// let b = 5
// a = a-b
// b = a + b

// console.log('a is '+a)
// console.log('b is '+b)

// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)

//   5. приоритет операторов Operators priority
// const fullAge = 41
// const currentYear = 2020
// const birthYear = 1978
// // операторы сравнения <, >, <=, >=
// const isFullAge = currentYear - birthYear >= fullAge // 42 >= 41 => true
// console.log(isFullAge)

//   6. Условные операторы Conditional Operators
// const courseStatus = 'pending' // pending, ready, fail
// if (courseStatus === 'ready'){
// console.log('Курс готов и его можно проходить')
// }else if (courseStatus === 'pending'){
//     console.log('Курс в процессе подготовки')
// }else{
//     console.log('Курс не получился')
// }
const isReady = true
// if (isReady === true) {
//     console.log('Все готово!')
// }else {
//     console.log('Все не готово!')
// }
//тернарное выражение ternary expression
isReady ? console.log('Все готово!') : console.log('Все не готово!')

// const num1 = 42 //number
// const num2 ='42'//string
// console.log(num1 === num2) // тройное равно всегда проверят все услови сопадения числовое и тип дата

//   7. Logical operators see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators

//   8. FUNCTION
function calculateAge(year) {
    return 2020 - year
}
// const myAge = calculateAge(1978)
// console.log(myAge)
// console.log(calculateAge(1978)) // более котроткая форма записи
// console.log(calculateAge(2005)) // более котроткая форма записи
// console.log(calculateAge(2019)) // более котроткая форма записи
// function logInfoAbout(name, year) {
//     const age = calculateAge(year)

//     if (age > 0) {
//         console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
//     } else {
//         console.log('Я считаю что это будущее')
//     }
// }

// logInfoAbout('Andrey', 1978)
// logInfoAbout('Alisa', 2009)
// logInfoAbout('Sababa', 2022)

//   9. МАССИВЫ  ARRAYS
// const cars = ['Mazda', 'Mercedes', 'Ford']
// // const cars = new Array('Mazda', 'Mercedes', 'Ford')
// console.log(cars.length)
// console.log(cars[1])
// console.log(cars[0])
// console.log(cars[3])
// cars[0] = 'Porsche'
// cars[cars.length] = 'Mazda'
// console.log(cars)

//  10. ЦИКЛЫ  LOOPS and ITERATIONS
const cars = ['Mazda', 'Mercedes', 'Ford', 'Porsche']

// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i]
//     console.log(car)
// }
// Более лаконичная запись:

// 

// 11.  ОБЪЕКТЫ  OBJECTS
const person = {
    firstName: 'Andrey', //key
    lastName: 'Zhelkovsky',
    year: 1978,
    language: ['RU','EN','FR','HE'],  // можно вставлять массивы
    hasWife: true,
    greet: function() {
        console.log('greet from person')  // можно вставлять функции
    }
} 

console.log(person.firstName) 
console.log(person['lastName'])
const key = 'year'
console.log(person[key])
person.hasWife = true
person.isProgrammer = true // добавит новый ключ
console.log(person)
person.greet() //выполнит функцию из ключа
// // 1. NUMBER <-- Class
// const num = 42 // integer целое число
// const float = 42.42 // float число которое содержит в себе десятичную часть
// const pow = 10e3 // 10 возводим в 3-ю степень
// console.log(pow)
// console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER) // максимальное возможное для операций число в JS (2e53 - 1) 2 в 53 степени
// //ex:
// console.log('Math.pow', Math.pow(2, 53)-1) // возводим 2 в 53 степень и вычитаем единицу даст макс итеджер
// console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
// console.log('MAX_VALUE', Number.MAX_VALUE) // MAX_VALUE 1.7976931348623157e+308 максимально возможное значение которым может оперировать JS
// console.log('MIN_VALUE', Number.MIN_VALUE) // MIN_VALUE 5e-324
// console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
// console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
// console.log('2 / 0', 2 / 0)
// console.log(Number.NaN)  // Not a Number <-- spacial reserved number in JS see typeof
// console.log(typeof NaN)
// const weird = 2 / undefined // деление на 0 или undefined даст NaN
// console.log(Number.isNaN(weird)) // проверка являеется ли операция weird NaN 
// console.log(Number.isNaN(42)) // проверка 42 нормальное число
// console.log(Number.isFinite(Infinity)) // проверка является ли число конечным
// console.log(Number.isFinite(42)) // проверка является ли число конечным

// const stringInt = '40'
// const stringFloat = '40.42'
// console.log(Number.parseInt(stringInt) + 2) //  parsing integer приводим строчку в число
// console.log(parseInt(stringInt) + 2) //  parsing integer приводим строчку в число
// console.log(Number(stringInt) + 2) //   parsing integer приводим строчку в число
// console.log(+stringInt + 2)  //  parsing integer приводим строчку в число

// console.log(parseInt(stringFloat) + 2) // parsingIn работает с целыми числами
// console.log(parseFloat(stringFloat) +2) // с дробями используем parseFloat
// console.log(+stringFloat +2) // с дробями используем parseFloat

// console.log(0.4 + 0.2) // особенность JS получаем 0.6000000000000001 вместо 0.6   SOLUTION-->

// console.log((0.4 + 0.2).toFixed(1)) /* результат получим стринг 0.6 тк toFixed отрезает заданное колличество цифр после запятой
// чтобы это исправить нам потребуется*/
// console.log(+(0.4 + 0.2).toFixed(1))
// // либо 
// console.log(parseFloat((0.4 + 0.2).toFixed(1)))

// // 2. BigInt - числа большие чем MAX_SAFE_INTEGER
// console.log(typeof 90071992547409919999999n)  // n - даст значение BigInt
// console.log(90071992547409919999999n - 900719925474099199999n)  // 
// console.log(-90071992547409919999999n)  // 
// // console.log(90071992547409919999999.2345n)  // error Integriter can't be decimal
// // console.log(10n - 4) // error can't mix BigInt and other types
// // solution -->
// console.log(parseInt(10n)-4)
// console.log(10n - BigInt(4))
// console.log(5n / 2n) // receive 2n дробная чать отсеклась

// // 3. объект Math - позволяет взаимодействовать с математическими операциями
// console.log(Math.E) //  exponent
// console.log(Math.PI) // constant PI
// console.log(Math.sqrt(25)) // square root
// console.log(Math.pow(5,3)) // 
// console.log(Math.abs(-42)) // выдаст модуль числа |-42|=|42|
// console.log(Math.max(11,25,455,36,97)) // max number in list
// console.log(Math.min(11,25,455,36,97)) // min number in list
// console.log(Math.floor(4.9)) // округляеет всегда в низшую сторону
// console.log(Math.ceil(4.9)) // округляеет всегда в большую сторону
// console.log(Math.round(4.9)) // возвращает к ближайшему целому числу
// console.log(Math.trunc(4.9)) // возвращает целую часть числа путем удаления всех дробных знаков
// console.log(Math.sin(45)) // Returns the sine of a number.

// console.log(Math.random()) // Returns a pseudorandom number between 0 and 1.
// 4.Example Функция получения числа в заданном диапазоне

function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min) // округляеем рандомальное значение +1 для того чтобы не терять значение max
}
console.log(getRandomBetween(10, 42))



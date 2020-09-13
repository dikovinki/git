// STRINGS - СТРОКИ  <-- Class
// const name = 'Andrey'
// const age = 41

// const output = 'Hi, my name is ' + name + ' and I am ' + age + ' years old.'
// const output = `Hi, my name ${name} and I am ${age}` // new sintax ES06
// console.log(output)  // выведет предыдущую канструкцию с помощью переменной output котр мы создали
// кавычки ` ` позволяют ввести болле оптимизированный синтакс + запоминает состояние строки
// удобно для html сгенерированном в JS.
// const output = ` 
//   <div>This is div</div>
//   <p>and this is paragraph</p>
// `
// console.log(output)
// Different methods
const name = 'Andrey'
console.log(name.length) // выдаст длину строки
console.log(name.toUpperCase()) // приведет строку к верхнему регистру
console.log(name.toLowerCase()) // приведет строку к нижнему регистру
console.log(name.charAt(2)) // символ в строке по индексу 
console.log(name.indexOf('e')) // индекс в строке по символу если задать чего-то
// чего нет в строке выдаст -1
console.log(name.startsWith('andr')) // проверка а стартует ли строка с заданной строчки andr
console.log(name.startsWith('Andr')) // проверка а стартует ли строка с заданной строчки Andr
console.log(name.endsWith('Andr')) // проверка а заканчивается ли строка с заданной строчки Andr
console.log(name.repeat(3)) // повтор строчки на заданное колличество раз
const string = '     password    '
console.log(string.trim()) // уберет все лишние пробелы
console.log(string.trimRight()) // уберет все лишние пробелы справа
console.log(string.trimLeft()) // уберет все лишние пробелы слево

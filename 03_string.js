// const name = 'Ростислав'
// const age = 25

// function getAge() {
//     return age
// }

// const output = 'Привіт, мене звати ' + name + ', мені ' + age + ' років. '//застарілий варіант
// const output = `Привіт, мене звати ${name}, мені ${getAge()} років`//Зворотні кавички зберігають рядки і конкатенацію
// const output = `Привіт, мене звати ${name}, мені менше 30 років (${age < 30? 'Так' : 'Ні'})`//boolean


// console.log(output)


// const name = 'Rostyslav'
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.charAt(3))
// console.log(name.indexOf('slav'))//-1 якщо нема
// console.log(name.toLowerCase().startsWith('rost'))//Переводим в нижній регістр, тоді true
// console.log(name.startsWith('rost'))
// console.log(name.endsWith('lav'))
// console.log(name.repeat(3))
// const string = '     password    '
// console.log(string)
// console.log(string.trim())
// console.log(string.trimLeft())
// console.log(string.trimRight())

// function logPerson(s, name, age) {
//     if (age < 0) {
//         age = "Was not born yet!"
//     }
//     // console.log(s, name, age)
//     // return 'Info about person'
//     // return `${s[0]}`
//     return `${s[0]}${name}${s[1]}${age}${s[2]}`
// }

// const personName = 'Rostyslav'
// const personName2 = 'Max'
// const personAge = 25
// const personAge2 = -13

// const output = logPerson`Name: ${personName}, age: ${personAge}!`//зворотні кавички //back quotes
// const output2 = logPerson`Name: ${personName2}, age: ${personAge2}!`

// console.log(output)
// console.log(output2)
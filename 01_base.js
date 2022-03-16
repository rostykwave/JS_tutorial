// variable]
//camelCase
// var name = 'Rostyslav'
// const firstName = 'Rostyslav'
// // const lastName = 'Kovalchuk'//string
// // let age = 25//number

// const isProgrammer = true//boolean


// console.log(name)
// console.log(age)


// console.log(isProgrammer)

//2 Mutation
// console.log('Name of person: ' + firstName + ', and he is ' + age + ' years age')

// const lastName = prompt('Add Your Last Name')
// alert(firstName + ' ' + lastName)

// // 3 Operators
// let currentYear = 2022//can change
// const birthYear = 1996//cannot change, constant

// const age = currentYear - birthYear

// console.log(age)

// console.log(--currentYear)

// const a = 10
// const b = 5
// let c = 32
// // c = c + a
// c += a
 
// console.log(c)

// // 4 Types of data
// const isProgrammer = true
// const name = 'Rostyslav'
// const age = 25
// let x
// null
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(typeof null)

// // 5 Operators priority
// const fullAge = 26
// const birthYear = 1993
// const currentYear = 2020

// const isFullAge = (currentYear - birthYear) >= fullAge
// console.log(isFullAge)

// 6 Conditional operatorі

// const courseStatus = 'pendingg'

// if (courseStatus === 'ready') {
//     console.log('Course is ready')
// } else if (courseStatus === 'pending') {
//     console.log('Course is pending')
// } else {
//     console.log('Course is failed')
// }

// const num1 = 42//number
// const num2 = '42'//string

// console.log(num1 === num2)
// console.log(num1 == num2)

// const isReady = true

// if (isReady) {
//     console.log('Everything is ready')
// } else {
//     console.log('Everything is not ready')
// }

//now the same:
// //Тернарний вираз
// isReady? console.log('Everything is ready') : console.log('Everything is not ready')

// 7 Boolean
//http://www-lia.deis.unibo.it/materiale/JS/developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators.html

// 8 Functions

// function calculateAge(year){
// return 2021 - year
// }

// const myAge = calculateAge(1993)

// console.log(myAge)

// console.log(calculateAge(1996))

// function logInfoAbout(name, year) {
//     const age = calculateAge(year)

//     if (age > 0) {
//         console.log('Human ' + name + ' has a ' + age + ' years old')
//     } else {
//         console.log('It`s future!!!')
//     }
// }

// logInfoAbout('Rostyslav', 1996)

// logInfoAbout('Oleg', 2003)

// // 9 Massives
// const cars = ['Mazda', 'Mercedes', 'Tesla']

// cars[3] = 'Porshe'

// // const cars = new Array('Mazda', 'Mercedes', 'Tesla')
// console.log(cars)
// console.log(cars[1])
// console.log(cars.length)


// // 10 Cycles
// const cars = ['Mazda','Tesla','Mercedes', 'Porshe']
// // for (let i = 0; i < cars.length; i++){
// //     const car = cars[i]
// //     console.log(car)
// // }
// //Better way
// for (let car of cars) {
//     console.log(car)
// }

// 11 Objects
const person = {
    firstName: 'Rostyslav',
    lastName: 'Kovalchuk',
    year: 1996,
    languages: ['Ua', 'Eng'],
    hasWife: false,
    greet: function () {
        console.log('greet from person')
    }
}

console.log(person.firstName)
console.log(person['lastName'])
const key = 'year'
console.log(person[key])
person.hasWife = true
person.isProgrammer = true
console.log(person)

person.greet()
const cars = ['Mazda','Ford','BMW','Mercedes']
const fib = [1, 1, 2, 3, 5, 8, 13]//числа Фібоначі

//Складніший масив (об'єктний)//Замість IndexOf використовувати findIndex
const people = [
    {name: 'Vladilen', budget: 4200 },
    {name: 'Rostyslav', budget: 13000 },
    {name: 'Katya', budget:5200}
]

//Fuction
function addItemToEnd(){

}

//Method

// cars.push('Renault') //Добавляння елементу вкінці

// cars.unshift('Porshe')//Добавляння елементу на початку

// cars.shift()//Видалення елементу на початку
// const firstItem = cars.shift()///Вибір видаленого елемнта (першого з масиву)
// console.log(firstItem)

// const lastCar = cars.pop()///Вибір видаленого елемнта (останнього з масиву)
// console.log(lastCar)
// console.log(cars.reverse())

// const index = cars.indexOf('BMW')
// console.log(cars[index])//Виведення константи в консоль

// cars[index] = 'Porsche'
// console.log(cars)

// const index = people.findIndex(function (person) {
//     return person.budget === 13000
// })
// console.log(people[index])

const person = people.find(function (person) {
    return person.budget === 13000
})
console.log(person)

//Exercise 1//Перевертання тексту ззаду наперед (робиться через масиви)
// const text = 'Hi, we are studying JavaScript'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)

3:25:15
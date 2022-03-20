//1.Функції
//Function Declaration - при перенесенні функції будь де в списку, вона працюватиме, пов'язано з JS
// greet('Rostyslav')
// function greet(name) {
//     console.log('Hello -',name)
// }//Працює

// greet2('Rostyslav')
// const greet2 = function greet2 (name) {
//      console.log('2Hello -',name)
// }// не працює


// function greet(name) {
//     console.log('Hello -',name)
// }
// //Function Expression
// const greet2 = function greet2 (name) {
//      console.log('2Hello -',name)
// }

// greet('Rostyslav')
// greet2('Rostyslav')

// console.log(typeof greet)

//  console.dir(greet)

// //2.Анонімні функції
// let counter = 0
// const interval = setInterval(function () {
//     if (counter === 5) {
//         clearInterval(interval) // clearTimeOut
//     } else {
//         console.log(++counter)
//     }
// },1000)

// // 3. Стрілочна функція
// function greet(name) {
//     console.log('Hello -', name)
// }
// const arrow = (name) => {
//     console.log('Hello -', name)
// }

// const arrow2 = name => console.log('Hello -', name)

// arrow('Rostyslav')
// arrow2('Rostyslav')

// //**2 - Піднесення до степеня */
// // const pow2 = num => {
// //     return num **2
// // }

// const pow2 = num => num **2//скороченийи варіант, так як функція складається з одного рядка

// console.log(pow2(2))


//4. Параметри по замовчуванню
// const sum = (a, b) => a + b
// console.log(sum(41,1))

// const sum = (a, b = 1) => a + b
// console.log(sum(41))

// const sum = (a = 40, b = a * 2) => a + b
// console.log(sum())

// function sumAll(...all) {///збирає масив
//     console.log(all)
// }
// sumAll(1,2,3,3,4,5,6)

function sumAll(...all) {///рахує суму/ Функція універсальна і рахує будь яку кількість чисел
    let result = 0
    for (let num of all) {
        result += num
    }
    return result
}

const res = sumAll(1, 2, 3, 3, 4, 5)
console.log(res)

//5. Замикання
function createMember(name) {
    return function (lastName) {
        console.log(name + lastName)
    }
}

const logWithLastName = createMember('Rostyslav')
console.log(logWithLastName('Kovalchuk'))//name замкнулось (лишилось одним і тим самим)
console.log(logWithLastName('Minin'))
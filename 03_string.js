const name = 'Ростислав'
const age = 25

function getAge() {
    return age
}

// const output = 'Привіт, мене звати ' + name + ', мені ' + age + ' років. '//застарілий варіант
// const output = `Привіт, мене звати ${name}, мені ${getAge()} років`//Зворотні кавички зберігають рядки і конкатенацію
// const output = `Привіт, мене звати ${name}, мені менше 30 років (${age < 30? 'Так' : 'Ні'})`//boolean


// console.log(output)
// window.alert('1')

// window.confirm('Wthat is your name?')

const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2')[0]
// const heading2 = document.getElementsByClassName('h2-class')[0]
// const heading2 = document.querySelector('h2')
// const heading2 = document.querySelector('.h2-class')
const heading2 = document.querySelector('#sub-hello')

console.log(heading2)

// const heading3 = heading2.nextElementSibling

const h2List = document.querySelectorAll('h2')
console.log(h2List)
const heading3 = h2List[h2List.length - 1]
console.log(heading3)



console.dir(heading.textContent)

setTimeout(() => {
addStylesTo(heading, 'JavaScript')
}, 700)

setTimeout(() => {
addStylesTo(heading2, 'Practice', 'blue')
}, 1000)

const link = heading3.querySelector('a')

setTimeout(() => {
addStylesTo(link, 'Done', 'yellow', '2rem')
}, 1500)

// setTimeout(() => {
// addStylesTo(heading3.children[0], 'Done', 'yellow', '2rem')
// }, 4500)

function addStylesTo(node, text, color = 'teal', fontSize) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '2rem'
    node.style.display = 'block'
    node.style.width = '100%'
    if (fontSize) {
        node.style.fontSize = fontSize
    }
    //Якщо fontSize не false
    //falsy: '', undefined, null, 0, false//
}

heading.onclick = () => {
    console.log('click')
} 

heading.onclick = () => {
    if (heading.style.color === 'teal') {
        heading.style.color = '#000'
        heading.style.backgroundColor = '#fff'
    } else {
        heading.style.color = 'teal'
        heading.style.backgroundColor = '#000'
    }
}

heading2.addEventListener('dblclick', () =>{
    if (heading2.style.color === 'blue') {
        heading2.style.color = '#000'
        heading2.style.backgroundColor = '#fff'
    } else {
        heading2.style.color = 'blue'
        heading2.style.backgroundColor = '#000'
    }
})

link.addEventListener('click', () => {
    event.preventDefault()//Забороняє перехід за посиланням
    console.log('click on link', event.target.getAttribute('href'))//Шлях як взяти посилання
    //перебити target_blank (відкрити  в тому самому вікні)
    const url = event.target.getAttribute('href')
    
    window.location = url
})


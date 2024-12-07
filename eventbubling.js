const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')


// window.addEventListener('click', (e) => {
//     console.log('6. Window Event Listener');
// })

// document.addEventListener('click', (e) => {
//     console.log('5. Document Event Listener');
// })

// document.body.addEventListener('click', (e) => {
//     console.log('4. Body Event Listener');
// })

// green.addEventListener('click', (e) => {
//     console.log('3. Green Event Listener');
// })

// pink.addEventListener('click', (e) => {
//     // e.stopPropagation() is stop inherit property upper eventlisner ya anything
//     console.log('2. Pink Event Listener');
// })

// blue.addEventListener('click', (e) => {
    
//     console.log('1. Blue Event Listener');
// })
// the output from bubling method when u click on blue
// blue event lisner
// pink event lisner
// green event lisner
// body event lisner
// document event lisner
// window event lisner
// // blue.addEventListener('click', (e) => {
// //     console.log('1. Blue Event Listener');
// // }, {once: true})










window.addEventListener('click', (e) => {
    console.log('6. Window Event Listener');
}, {capture: true})

document.addEventListener('click', (e) => {
    console.log('5. Document Event Listener');
}, {capture: true})

document.body.addEventListener('click', (e) => {
    console.log('4. Body Event Listener');
}, {capture: true})

green.addEventListener('click', (e) => {
    console.log('3. Green Event Listener');
}, {capture: true})

pink.addEventListener('click', (e) => {
    console.log('2. Pink Event Listener');
}, {capture: true})

blue.addEventListener('click', (e) => {
    console.log('1. Blue Event Listener');
}, {capture: true})//when you use false in place on true then it is used like bubling
// this is capturing method when u click on blue
// window event lisner
// document event lisner
// body event lisner
// green event lisner
// pink event lisner
// blue event lisner
// blue.addEventListener('click', (e) => {
//     console.log('1. Blue Event Listener');
// }, {once: true}) it used when you you click once and u again click it is not in use
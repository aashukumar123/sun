const nameElement = document.querySelector('.name-tag')
const nameInput=document.querySelector('.name')
const ageElement=document.querySelector('.age-tag')
const ageInput =document.querySelector('.age')
//username.innerText=localStorage.myName//at span tag update the value and below line same method
username.innerText=localStorage.getItem('myName')

nameInput.addEventListener('input',(e)=>{
    // console.log(e.target.value);it is just kuch bhi likho box main wo console pe print hoga
    // localStorage.myName=e.target.value//below line same method
    localStorage.setItem('myName',e.target.value)
    username.innerText=localStorage.myname//update and access the value in input box

})
// ageElement.innerText = localStorage.getItem('myAge')
// ageInput.addEventListener('input', (e) => {
//     localStorage.setItem('myAge', e.target.value);
//     ageElement.innerText = localStorage.getItem('myAge')
// })

const myData = JSON.parse(localStorage.getItem('myData')) || {}

// const myData={
//     name:'',
//     age:'',
// }
if (myData.name) {
  nameElement.innerText = myData.name
}

if (myData.age) {
  ageElement.innerText = myData.age
}

nameInput.addEventListener('input', (e) => {
  myData.name = e.target.value
  localStorage.setItem('myData', JSON.stringify(myData))
  nameElement.innerText = e.target.value
})

ageInput.addEventListener('input', (e) => {
  myData.age = e.target.value
  localStorage.setItem('myData', JSON.stringify(myData))
  ageElement.innerText = e.target.value
})
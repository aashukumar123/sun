const h1=document.querySelector("h1");
function sayhii(){
    console.log("hii");

}
function secondsayhii()
{
    console.log("nacho")
}
//h1.onclick=sayhii//this is second method and first method used in html



//h1.addEventListener('click',sayhii)
//h1.addEventListener('click',secondsayhii)//third and effective method

const card=document.querySelector(".card")
const container=document.querySelector(".container")
//queston
 let count=1;
card.addEventListener('click',()=>{
    const newcard=document.createElement("div")
    newcard.classList.add("card")
    newcard.innerText=count++
  container.append(newcard)
    console.log(newcard);
})


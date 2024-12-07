const card=document.querySelector(".card")
const container=document.querySelector(".container")
//queston
 let count=1;
card.addEventListener('mouse',(e)=>{//you can also use mouseup,mousedown,mosueenter,mouseleave,mousemove,mouseover same as mouseenter,wheel,sroll event use with other mouse event,touchstart is worked on phone interface and touchend also,touchmove,pointermove,pointerenter,pointerleave, pointer is better than other event
    console.log(e);
    const newcard=document.createElement("div")
    newcard.classList.add("card")
    newcard.innerText=count++
  container.append(newcard)
    console.log(newcard);
})

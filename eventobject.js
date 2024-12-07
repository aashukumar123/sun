const usernameinput=document.querySelector('#username')
const paragraph=document.querySelector('p')
const form=document.querySelector('form')


usernameinput.addEventListener('input',(e)=>{//e is event object
   console.log(e.target.value);//if you write on box same thing print in console
  //  paragraph.innerText= e.target.value//if write on box same thing print below the box
   //change event the event which print something in boxthen it print in console..
    
//}

//)
//usernameinput.addEventListener('change',(e)=>{
   // console.log(e.target.value);//if you write on box same thing print in console
 // paragraph.innerText= e.target.value//if write on box same thing print below the box
//chnage event is the event that write on box then click on outside the box then it is print on console
    
})
//let inputvalue
//)

//usernameinput.addEventListener('focus',(e)=>{
  //  console.log(e);
   // console.log(e.target.value);//if you write on box same thing print in console
   // inputvalue = e.target.value
   // paragraph.innerText= e.target.value//if write on box same thing print below the box
    //focus event is event that focus on that boxthere is focus event is start 
    
//}

//)
///usernameinput.addEventListener('blur',(e)=>{
   // console.log(e);
    //console.log(e.target.value);//if you write on box same thing print in console
   // paragraph.innerText= e.target.value//if write on box same thing print below the box
    //blur event is event that click outside the box then the 
    //blur eventlistner
    
//}

//)
//console.log(e.type)//only focus is print





//form.addEventListener('submit',(e)=>{
  //  e.preventDefault()//not reload the page
  //  console.log(e.target)
    //console.log(e.current.Target)
    //console.log(e);
//})
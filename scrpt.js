var buttonPlus = document.querySelectorAll('.btnplus')

let totaPrice = document.querySelector('.som')

Array.from(buttonPlus).map(el => {
    el.addEventListener("click" , () => {
        el.nextElementSibling.innerHTML = parseInt(el.nextElementSibling.innerHTML) + 1
        totaPrice.innerHTML = parseInt(totaPrice.innerHTML.replace('€', "")) + parseInt(el.parentElement.previousElementSibling.innerHTML.replace('€', "") )
        // console.log(parseInt(totaPrice.innerHTML.replace('€', "")))
        // let ramzi = el.parentElement.parentElement.parentElement.nextElementSibling.lastElementChild.innerHTML
        // console.log(parseInt(el.parentElement.previousElementSibling.innerHTML.replace('€', ""))+parseInt(ramzi.replace('€', "")))
        // ramzi ='€'+ parseInt(el.parentElement.previousElementSibling.innerHTML.replace('€', "")) + parseInt(ramzi.replace('€', ""))
        
//buttonsom.innerHTML = '€' + parseInt( buttonsom.innerHTML.innerHTML.replace('€', "")) + parseInt(el.parentElement.previousElementSibling.innerHTML.replace('€', ""))

    })
})

var buttonm = document.querySelectorAll('.btnMinus')
Array.from(buttonm).map(el => {
    el.addEventListener("click" , () => {
        if (el.previousElementSibling.innerHTML>1){
        el.previousElementSibling.innerHTML = parseInt(el.previousElementSibling.innerHTML) - 1
        totaPrice.innerHTML = parseInt(totaPrice.innerHTML.replace('€', "")) - parseInt(el.parentElement.previousElementSibling.innerHTML.replace('€', "") )
    }
    })
})
var buttonDEl=document.querySelectorAll('.close')

Array.from(buttonDEl).map(el =>{
    el.addEventListener("click",()=>{
        el.parentElement.remove()
       
        totaPrice.innerHTML= parseInt(totaPrice.innerHTML.replace('€', ""))- parseInt(el.parentElement.lastElementChild.previousElementSibling.innerHTML.replace('€', ""))* parseInt (el.parentElement.lastElementChild.lastElementChild.previousElementSibling.innerHTML)

    })
   
})
/*var nb = document.querySelectorAll('.con')
var prix=document.querySelectorAll('.prix')
var tab1=Array.from(nb)  
var tab2=Array.from(prix)
console.log(tab1)
console.log(tab2)

    var som=0;
    for(let i=0;i<tab1.length; i++){
        som+=parseInt(tab1[i].innerHTML)*(parseInt(tab2[i].innerHTML.replace('€', "")))
    }
    console.log(som)
*/
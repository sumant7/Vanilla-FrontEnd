const tagsel = document.getElementById('tags')
const textarea = document.getElementById('textarea')



textarea.focus()   //puts the cursor in this element


textarea.addEventListener('keyup',(typed)=>{  //whenever a key is left after pressed the function is fired
    createTags(typed.target.value)   
    //console.log(typed.target)   //<textarea id="textarea" placeholder="Enter Your Choices">
    //console.log(typed.target.value) //whatever is written  
})



function createTags(input){
    
}
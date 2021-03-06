const tagsel = document.getElementById('tags')
const textarea = document.getElementById('textarea')



textarea.focus()   //puts the cursor in this element


textarea.addEventListener('keyup',(typed)=>{  //whenever a key is left after pressed the function is fired
    createTags(typed.target.value)   
    //console.log(typed.target)   //<textarea id="textarea" placeholder="Enter Your Choices">
    //console.log(typed.target.value) //whatever is written
    if(typed.key==='Enter'){
        setTimeout(()=>{
            typed.target.value=''  //clears the text area
        },10)
        randomSelect()
    }  
})



function createTags(input){
    //const tags= input.split(',')  //splits input by ',' and makes ann array with splitted elements of input
    const tags=input.split(',').filter(tag=> tag.trim()!=='').map(tag=>tag.trim())  //if tag.trim() does not make it empty atring then do tag.trim()

    tagsel.innerHTML=""  //to stop repeating pileup


    tags.forEach(tag=> {
        const tagEL= document.createElement('span') //creates a span 
        tagEL.classList.add('tag')  //gives the span class og .tag
        tagEL.innerText = tag   //makes the inner text as the word typed
        tagsel.appendChild(tagEL)   //adds the span to tagsel
    });
}


function randomSelect(){
    const times = 30

    const interval =setInterval(()=>{
        const randomTag= pick()   //picks a random tag
        highlightTag(randomTag)    //highlights it
        setTimeout(()=>{
            unhighlightTag(randomTag)   //unhighlights it after 100ms
        },100)
    },100)   //all of this repeats after 100ms

    setTimeout(()=>{
        clearInterval(interval)

        setTimeout(()=>{
            const randomTag= pick()
            highlightTag(randomTag)
            const result = randomTag.innerText
            const display= document.querySelector('.result')
            display.innerHTML = `The Computer Generated Choice is ${result}!`
        },100)
    },times*100 )
}



function pick(){
    const tags = document.querySelectorAll(".tag")
    return tags[Math.floor(Math.random()*tags.length)]
}

function highlightTag(tag){   
    tag.classList.add('highlight')
}
function unhighlightTag(tag){
    tag.classList.remove('highlight')
}
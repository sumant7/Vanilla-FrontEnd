const container= document.querySelector('.container')
const right= document.querySelector('.right')
const left= document.querySelector('.left')
const up= document.querySelector('.up')
const down= document.querySelector('.down')
const slideLength= right.querySelectorAll('div').length

let activeSlideIndex=0

left.style.top=`-${(slideLength-1)*100}vh`  //shifts left up by 300vh

up.addEventListener('click',()=>changeSlide('up'))
down.addEventListener('click',()=>changeSlide('down'))


const changeSlide= (direction)=>{
    const sliderHeight= container.clientHeight
    if(direction=='up'){
        activeSlideIndex++;
        if(activeSlideIndex> slideLength-1){
            activeSlideIndex=0
        }
    }else if(direction=='down'){
        activeSlideIndex--;
        if(activeSlideIndex<0)
        {
            activeSlideIndex= slideLength-1
        }
    }

    right.style.transform=`translateY(-${activeSlideIndex*sliderHeight}px)`
    left.style.transform=`translateY(${activeSlideIndex*sliderHeight}px)`
}
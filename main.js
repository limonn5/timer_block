let box = document.querySelector('.box')
let start = document.querySelector('.start')
let stopButton = document.querySelector('.stopButton')
let reset = document.querySelector('.reset')

let couter = 0
let timer
box.innerHTML= couter


start.addEventListener('click', () => {
    timer= setInterval(function(){
      couter++
      box.innerHTML = couter
    }, 1000)
    start.style.display = 'none'
})
stopButton.addEventListener('click', () => {
    clearInterval(timer)
    start.style.display = 'flex'
})
reset.addEventListener('click', () => {
    couter=0
    box.innerHTML = couter
    clearInterval(timer)
    start.style.display = 'flex'
})
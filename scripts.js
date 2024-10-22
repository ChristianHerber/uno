let unoCard = document.querySelector('.uno__card')

const colorRed = document.querySelector('.uno__color--red')
const colorBlue = document.querySelector('.uno__color--blue')
const colorYellow = document.querySelector('.uno__color--yellow')
const colorGreen = document.querySelector('.uno__color--green')

let unoNumber = document.querySelectorAll('.uno__number')
let unoCardNumberTop = document.querySelector('.uno__number--top')
let unoCardNumberMiddle = document.querySelector('.uno__number--middle')
let unoCardNumberBottom = document.querySelector('.uno__number--bottom')

colorRed.addEventListener('click', (e) => {
    unoCard.style.background = '#DA3C24'
})

colorBlue.addEventListener('click', (e) => {
    unoCard.style.background = '#0176BA'
})

colorYellow.addEventListener('click', (e) => {
    unoCard.style.background = '#FFD534'
})

colorGreen.addEventListener('click', (e) => {
    unoCard.style.background = '#84C03F'
})

unoNumber.forEach((number) => {
    number.addEventListener('click', function() {
        unoCardNumberTop.textContent = number.textContent
        unoCardNumberMiddle.textContent = number.textContent
        unoCardNumberBottom.textContent = number.textContent
        
    })
})
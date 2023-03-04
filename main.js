const daysContainer = document.querySelector('[data-days-counter]')
const hoursContainer = document.querySelector('[data-hours-counter]')
const minutesContainer = document.querySelector('[data-minutes-counter]')
const secondsContainer = document.querySelector('[data-seconds-counter]')

const dateToLaunch = new Date('March 13, 2023, 17:23:03').getTime()

function resetAnimation(element) {
    element.parentElement.classList.remove('active')
}

function runAnimation(element) {
    element.parentElement.classList.add('active')
    resetTimeout = setTimeout(resetAnimation, 550, element.nextElementSibling)
}

function updateLayout(days, hours, minutes, seconds) {
    daysContainer.textContent = days
    daysContainer.nextElementSibling.nextElementSibling.textContent = days
    if(daysContainer.nextElementSibling.textContent != days) runAnimation(daysContainer)
    setTimeout(() => {
        daysContainer.nextElementSibling.textContent = days
    }, 300)

    hoursContainer.textContent = hours
    hoursContainer.nextElementSibling.nextElementSibling.textContent = hours
    if(hoursContainer.nextElementSibling.textContent != hours) runAnimation(hoursContainer)
    setTimeout(() => {
        hoursContainer.nextElementSibling.textContent = hours
    }, 300)

    minutesContainer.textContent = minutes
    minutesContainer.nextElementSibling.nextElementSibling.textContent = minutes
    if(minutesContainer.nextElementSibling.textContent != minutes) runAnimation(minutesContainer)
    setTimeout(() => {
        minutesContainer.nextElementSibling.textContent = minutes
    }, 300)

    secondsContainer.textContent = seconds
    secondsContainer.nextElementSibling.nextElementSibling.textContent = seconds
    runAnimation(secondsContainer)
    setTimeout(() => {
        secondsContainer.nextElementSibling.textContent = seconds
    }, 300)
}

function timer() {
    const currentDate = new Date().getTime()

    const timeRemaining = Math.floor((dateToLaunch - currentDate) / 1000)
    
    const days = Math.floor(timeRemaining /  86400)
    const hours = Math.floor(timeRemaining / 3600) - days * 24
    const minutes = Math.floor(timeRemaining / 60) - (days * 1440 + hours * 60)
    const seconds = timeRemaining - (days * 86400 + hours * 3600 + minutes * 60)

    updateLayout(days.toString().padStart(2, '0'), hours.toString().padStart(2, '0'), minutes.toString().padStart(2, '0'), seconds.toString().padStart(2, '0'))
}

timer()
let interval = setInterval(timer, 1000)


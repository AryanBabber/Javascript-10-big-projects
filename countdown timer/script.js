const nextYear = new Date().getFullYear() + 1 // since getFullYear only outputs the current year
const newYears = `1 Jan ${nextYear}`
const getNewYears = document.getElementById('new-years')
getNewYears.textContent += nextYear

const getDays = document.getElementById('days')
const getHours = document.getElementById('hours')
const getMins = document.getElementById('mins')
const getSeconds = document.getElementById('seconds')

function countdown(){
    const newYearDate = new  Date(newYears)
    const currentDate = new Date()
    const msLeft = (newYearDate - currentDate)/1000;
    const seconds = Math.floor(msLeft) % 60
    const mins = Math.floor(msLeft / 60) % 60;
    const hours = Math.floor(msLeft / 3600) % 24
    const days = Math.floor(msLeft / 86400)
    getDays.innerText = formatTime(days)
    getHours.innerText = formatTime(hours)
    getMins.innerText = formatTime(mins)
    getSeconds.innerText = formatTime(seconds)
}

const formatTime = (time)=>{
    return time < 10? `0${time}`: time
}

countdown();

setInterval(countdown,1000)


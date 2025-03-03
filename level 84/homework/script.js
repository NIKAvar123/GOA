function time(){
    const date = new date()
    const hoursBox = document.getElementById("hours")
    let hours = date.getHours()
        let resHours = hours.toString().padStart(2, "0")

        hoursBox.textContent = resHours

    const minutesBox = document.getElementById("minutes")
    let minutes = date.getMinutes()
    let resMinutes = minutes.toString().padString(2, "0")
    
    minutesBox.textContent = resMinutes



    const secondsBox = document.getElementById("seconds")
    let seconds = date.getSeconds()
    let resSeconds = seconds.toString().padString(2,"0")

    secondsBox.textContent = resSeconds
}

setInterval(time,1000)

time()
// get the DOM elements
const time = document.getElementById('time')
const greet = document.getElementById('greet')
const content = document.getElementsByClassName('content')


// set up the time

function showTime(){
    let today = new Date()
    let hr = today.getHours()
    let min = today.getMinutes()
    let sec = today.getSeconds()

    

    // add amPM
    const amPm = hr >= 12 ? 'PM' : 'AM';

    // set 12 hr format
    hr = hr % 12 || 12;

    // add zero in sec and min if < 10
    function addZero (e){
        return (parseInt(e, 10) < 10 ? '0' : '') + e
    }

    // display the time
    time.innerHTML = `${hr}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}<span> </span>${amPm}`;
    setTimeout(showTime, 1000);

}

// setup the greetings

function greetings(){
    let today = new Date()
    let hr = today.getHours()
    let min = today.getMinutes()
    let sec = today.getSeconds()

    if(hr < 12){
        // for morning
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
        document.getElementById('content').style.marginTop = "650px";
        // document.body.style.marginTop = "650px";
        greet.innerHTML = "Good Morning Sherwin";
        
    } else if (hr < 18){
        //  for afternoon
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundImage = "url('./img/afternoon.jpg')";
        greet.innerHTML = "Good Afternoon Sherwin"
    
    } else {
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundImage = "url('./img/evening.jpg')";
        greet.innerHTML = "Good Evening Sherwin"
    }

}

greetings();

showTime();


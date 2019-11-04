// DOM Elements
const time = document.getElementById('time')
const greet = document.getElementById('greet')
const image = document.getElementById('image')

// show the time
function showTime() {
    // get the time
    let tdy = new Date();
    let hrs = tdy.getHours();
    let min = tdy.getMinutes();
    let sec = tdy.getSeconds();

    // display AM or PM
    const amPm = hrs > 12 ? 'PM' : 'AM';

    // set 12 hr format
    hrs = hrs % 12 || 12;

    // add Zero in min and sec
    function addZero(e) {
        return (parseInt(e, 10) < 10 ? '0' : '') + e
    }

    time.innerHTML = `${hrs}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}<span> </span>${amPm}`;
    setTimeout(showTime, 1000);

}

// set the greetings
function greetings() {
    let tdy = new Date();
    let hrs = tdy.getHours();
    let min = tdy.getMinutes();
    let sec = tdy.getSeconds();

    if (hrs < 12) {
        greet.innerHTML = "Good Morning Sherwin"
        // document.body.style.backgroundImage = "url('morning.jpg')";
    } else if(hrs < 18) {
        greet.innerHTML = "Good Afternoon Sherwin"
    } else {
        greet.textContent = "Good Evening Sherwin"
    }
}

greetings();
showTime();
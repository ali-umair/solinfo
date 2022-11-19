import React from 'react'

export default function Countdown() {

    const countDownDate = new Date("Nov 20, 2022 23:59:59").getTime();

    var x = setInterval(function() {
        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        //   document.getElementById("timer").innerHTML = days + "d " + hours + "h "
        //   + minutes + "m " + seconds + "s ";
        document.querySelector("#days").innerHTML = days;
        document.querySelector("#hours").innerHTML = hours;
        document.querySelector("#minutes").innerHTML = minutes;
        document.querySelector("#seconds").innerHTML = seconds;

        // If the count down is finished, write some text
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("timer").innerHTML = "EXPIRED";
        }
    }, 1000)

    return (
    <div className="min-w-screen min-h-screen bg-[#0E0E0E] flex items-center justify-center px-5 py-5" x-data="beer()" x-init="start()">
        <div id='timer' className="text-yellow-100">
            <h1 className="text-3xl text-center mb-10 font-extralight">You will see something exciting</h1>
            <div className="text-6xl text-center flex w-full items-center justify-center">
                <div className="text-2xl mr-1 font-extralight">in</div>
                <div className="w-24 mx-1 p-2 bg-yellow-100 text-yellow-700 rounded-lg">
                    <div id='days' className="font-mono leading-none" x-text="days">00</div>
                    <div className="font-mono uppercase text-sm leading-none">Days</div>
                </div>
                <div className="w-24 mx-1 p-2 bg-yellow-100 text-yellow-700 rounded-lg">
                    <div id='hours' className="font-mono leading-none" x-text="hours">00</div>
                    <div className="font-mono uppercase text-sm leading-none">Hours</div>
                </div>
                <div className="w-24 mx-1 p-2 bg-yellow-100 text-yellow-700 rounded-lg">
                    <div id='minutes' className="font-mono leading-none" x-text="minutes">00</div>
                    <div className="font-mono uppercase text-sm leading-none">Minutes</div>
                </div>
                <div className="text-2xl mx-1 font-extralight">and</div>
                <div className="w-24 mx-1 p-2 bg-yellow-100 text-yellow-700 rounded-lg">
                    <div id='seconds' className="font-mono leading-none" x-text="seconds">00</div>
                    <div className="font-mono uppercase text-sm leading-none">Seconds</div>
                </div>
            </div>
        </div>
        {/* <button onClick={seconds} className="bg-white">Click</button> */}
    </div>
  )
}

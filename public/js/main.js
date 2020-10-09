

//  Timmer
// ======================================= 
var timeoutHandle;
function countdown(minutes) {
    var seconds = 60;
    var mins = minutes
    function tick() {
        var counter = document.getElementById("timmer");
        var current_minutes = mins-1
        seconds--;
        counter.innerHTML =
        current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 ) {
            timeoutHandle=setTimeout(tick, 1000);
        } else {

            if(mins > 1){

               // countdown(mins-1);   never reach “00″ issue solved:Contributed by Victor Streithorst
               setTimeout(function () { countdown(mins -1); }, 1000);

            }
        }
    }
    tick();
}
countdown(20);




  //  Current time
// ======================================= 

var clock = setInterval(clocktiming, 1000)

function clocktiming(){
    var d = new Date();
    var a = d.toLocaleTimeString();
    document.getElementById('showclock').innerHTML = a;
}





















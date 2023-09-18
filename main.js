var stat = 0;
var mt;
var tt;

var fulltime;

function setTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    const finalTime = str_pad_left(minutes, '0', 2) + ':' + str_pad_left(seconds, '0', 2);
    document.getElementById('maintime').innerHTML = finalTime;
}
function clearAll(type) {
    document.getElementById("maintime").style.display = "none";

    if (type == 1) {
        document.getElementById("mes").style.display = "flex";

        setInterval(function () {
            document.getElementById("mes").style.display = "none";
            document.getElementById("starCont").style.display = "flex";

        }, 10000);
    } else {
        setTime(fulltime);
        document.getElementById("starCont").style.display = "flex";

    }
    time = fulltime;
    clearInterval(tt);
    clearInterval(mt);
    stat = 0;

}
function str_pad_left(string, pad, length) {
    return (new Array(length + 1).join(pad) + string).slice(-length);
}
function startTime() {
    document.getElementById("starCont").style.display = "none";
    document.getElementById("maintime").style.display = "block";
    fulltime = fulltime - 1;

    setTime(fulltime);
    mt = setTimeout(startTime, 1000);

    if (fulltime < 1) {
        clearAll(1);
    }

}

function clickb() {
    var temptime = document.getElementById('tt').value;
    document.getElementById('maintime').style.color = "rgb(0, 255, 0)";//getColor(1);
    
    clearInterval(tt);
    
    if (stat == 0) {
        fulltime = document.getElementById('mt').value;
        stat = 1;
        startTime();
    }

    var counter = 0;
    tt = setInterval(function () {
        temptime -= 1;
        if (temptime < 9)
            document.getElementById('maintime').style.color = "rgb(255, 0, 0)";//getColor(1);

        counter++;
        if (counter === 10) {
            clearAll(0);
        }
    }, 1000);
}
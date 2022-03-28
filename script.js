var h = 0,
    m = 0,
    s = 0;

function count() {
    s++;
    s = Math.floor(s % 60);
    m = Math.floor(s / 60);
    h = Math.floor(m / 60);
    if (s < 10)
        s = "0" + s;

    if (m < 10)
        m = "0" + m;

    if (h < 10)
        h = "0" + h;

    document.getElementById("span").innerHTML = h + " : " + m + " : " + s;
}


function start() {
    stopped = setInterval(count, 1000);
}

function stop() {
    clearInterval(stopped);
}

function reset() {
    document.getElementById("span").innerHTML = "00 : 00 : 00";
}
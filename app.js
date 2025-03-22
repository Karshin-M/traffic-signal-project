var Stoplight = document.getElementById("Stoplight");
var Readylight = document.getElementById("Readylight");
var Golight = document.getElementById("Golight");

function b1() {
    Stoplight.style.backgroundColor = "red";
    Readylight.style.backgroundColor = "rgb(0, 0, 0)";
    Golight.style.backgroundColor = "rgb(0, 0, 0)";
}

function b2() {
    Readylight.style.backgroundColor = "yellow";
    Stoplight.style.backgroundColor = "rgb(0, 0, 0)";
    Golight.style.backgroundColor = "rgb(0, 0, 0)";
}

function b3() {
    Golight.style.backgroundColor = "green";
    Stoplight.style.backgroundColor = "rgb(0, 0, 0)";
    Readylight.style.backgroundColor = "rgb(0, 0, 0)";
}
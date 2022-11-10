var circle1 = document.getElementById('circle1');
var circle2 = document.getElementById('circle2');
var circle3 = document.getElementById('circle3');
var circle4 = document.getElementById('circle4');
var circle5 = document.getElementById('circle5');

circle1.onclick = function () {
    event.target.src= "../img/green_donate-10.png";
}

circle2.onclick = function () {
    event.target.src= "../img/green_donate-20.png";
}

circle3.onclick = function () {
    event.target.src= "../img/green_donate-50.png";
}

circle4.onclick = function () {
    event.target.src= "../img/green_donate-100.png";
}

circle5.onclick = function () {
    event.target.src= "../img/green_donate-other.png";
}

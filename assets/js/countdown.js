// set the date we're counting down to
var target_date = new Date(2017, 3, 24, 9, 0, 0, 0).getTime();

// variables for time units
var days, hours, minutes, seconds;

// get tag element
var countdown = document.getElementById('countdown');

// update the tag with id "countdown" every 1 second
setInterval(function () {

// find the amount of "seconds" between now and target
var current_date = new Date().getTime();
var seconds_left = (target_date - current_date) / 1000;

// do some time calculations
days = parseInt(seconds_left / 86400);
seconds_left = seconds_left % 86400;

hours = parseInt(seconds_left / 3600);
seconds_left = seconds_left % 3600;

minutes = parseInt(seconds_left / 60);
seconds = parseInt(seconds_left % 60);

// format countdown string + set tag value
countdown.innerHTML = '<h1><span class="days">' + days +  ' <b>jours</b></span> <span class="hours">' + hours + ' <b>heures</b></span><br><span class="minutes">'
+ minutes + ' <b>minutes</b></span> <span class="seconds">' + seconds + ' <b>secondes</b></span></h1>';

}, 1000);

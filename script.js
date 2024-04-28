/*-- ----------------------------------------------------- -->
<---              Background Changing Widgets              -->
<--- ----------------------------------------------------- -*/

//Night Sky
function click1() {
  document.body.style.backgroundImage = "url('https://s7d2.scene7.com/is/image/TWCNews/stars_png')"
}

//Blue Sky
function click2() {
  document.body.style.backgroundImage = "url('https://www.worldatlas.com/r/w1200/upload/56/c5/7c/shutterstock-520792630.jpg')"
}

//Evening Sky
function click3() {
  document.body.style.backgroundImage = "url('https://www.planetware.com/wpimages/2020/04/iceland-best-waterfalls-seljalandsfoss.jpg')"
}

//Default Background Color
function click4() {
  document.body.style.backgroundImage = null;
  document.body.style.backgroundColor = "#0bb5f4";
}

/*-- --------------------------------------- -->
<---                  Clock                  -->
<--- --------------------------------------- -*/

var myVar = setInterval(function() {
  myTimer();
}, 1000);
  
function myTimer() {
  var d = new Date();
  document.getElementById("clock").innerHTML = d.toLocaleTimeString();
}

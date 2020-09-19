'use strict';

var currentscore = 0;


$(document).ready(function() {

 if (typeof localStorage["highScore"] !== 'undefined') {
  $("#highscore").text('Your current high score is' + " " + localStorage["highScore"]);
 } else {
  localStorage["highScore"] = 0;
  $("#highscore").text('Your current high score is 0');
 }



 $("#try").click(function() {
  location.reload();
 });

 $("#trySucess").click(function() {
  location.reload();
 });

 $("#score").text(currentscore);

 shuffle();

 $(".yeti").mousedown(function(event) {
  Yeti();

 });

 $(".penguin").mousedown(function(event) {
  Penguins();
 });


 function shuffle() {

  var parentDiv = $("#gameholder");
  var childDivs = parentDiv.children();
  while (childDivs.length) {
   parentDiv.append(childDivs.splice(Math.floor(Math.random() * childDivs.length), 1)[0]);
  }
 }



 function Penguins() {

  if (event.target.getAttribute("class") == "penguin") {
   event.target.setAttribute("class", "penguin activeClass");
   currentscore++;
  }
  if (currentscore == 20) {
   document.getElementById("myDialogSuccess").showModal();
  }
  $("#score").text(currentscore);
  jump();
     
  localstore(currentscore);
 }


 function Yeti() {
  event.target.setAttribute("class", "yeti activeClass");

  $("div").fadeOut("slow");

  document.getElementById("myDialog").showModal();

  $("#finalScore").text(currentscore);

  sound();

  localstore(currentscore);

 }

});


function localstore(currentscore) {

 if (currentscore > localStorage["highScore"]) {
  localStorage["highScore"] = currentscore;
 }

 if (typeof localStorage["highScore"] !== 'undefined') {
  $("#highscore").text('Your current high score is' + " " + localStorage["highScore"]);
 }
}


function sound() {
 var s = document.getElementById("yetisound");
 s.currentTime = 0;
 s.play();
}


function jump() {

 var p = document.getElementById("jumpsound");
 p.currentTime = 0;
 p.play();
}
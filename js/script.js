  
var page1 = document.getElementById("page1");
var page2 = document.getElementById("page2");
var page3 = document.getElementById("page3");

var next1 = document.getElementById("next1");
var next2 = document.getElementById("next2");
var prev1 = document.getElementById("prev1");
var prev2 = document.getElementById("prev2");

var progress = document.getElementById("progress");


next1.onclick = function(){
  page1.style.left="-450px";
  page2.style.left="40px";
  progress.style.width="240px";
}

prev1.onclick = function(){
  page1.style.left="40px";
  page2.style.left="450px";
  progress.style.width="120px";
}

next2.onclick = function(){
  page2.style.left="-450px";
  page3.style.left="40px";
  progress.style.width="360px";

}

prev2.onclick = function(){
  page2.style.left="40px";
  page3.style.left="450px";
  progress.style.width = "240px";
}

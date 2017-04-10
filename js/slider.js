var slideIndex = 1;
var count = 1;
var timer_count = 5000; //3s

showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}
//showDivsAuto();
var myVar = setInterval(showDivsAuto, timer_count);

function showDivsAuto() {

  if (count == -1) {
    showDivs(slideIndex += count);
    count = 1;
  } else if (count == 1) {
    showDivs(slideIndex += count);
    count = -1;
  }

}


function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");

  var dots = document.getElementsByClassName("demo");
  
  if (dots.length == 0) { return; }


  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " w3-white";

}
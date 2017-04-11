/* var i;
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

*/


  function nav_toggle(){
var ul_list = document.getElementsByClassName("nav-c-ul");
console.log("asd");

      ul_list[0].style.display = "block";

  }
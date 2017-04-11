var width_limit = 566;

var addEvent = function (object, type, callback) {

  if (object == null || typeof (object) == 'undefined') return;

  if (object.addEventListener) {
    object.addEventListener(type, callback, false);
  } else if (object.attachEvent) {
    object.attachEvent('on' + type, callback);
  } else {
    object['on' + type] = callback;
  }


};

addEvent(window, 'resize', test)

function test() {


  if (window.innerWidth < width_limit) {

    if (getState() == 'block') {
      document.getElementsByClassName("nav-c-ul")[0].style.display = "none";
      
    }


  } else if (window.innerWidth > width_limit + 1) {
    if (getState() == 'none') {
      document.getElementsByClassName("nav-c-ul")[0].style.display = "block";
    }
  }
}

function getState() {

  var state = getElementsByClassName("nav-c-ul");

  if (state[0] != null) {
    state = window.getComputedStyle(state[0]).getPropertyValue('display');
  }

  return state;

}

function showNav() {
  var state = document.getElementsByClassName("nav-c-ul");

  state = window.getComputedStyle(state[0]).getPropertyValue('display');

  switch (state) {
    case "none":
      document.getElementsByClassName("nav-c-ul")[0].style.display = "block";
      animateButton(true);
      break;
    case "block":
      document.getElementsByClassName("nav-c-ul")[0].style.display = "none";
      animateButton(false);
      break;
  }

}

function animateButton(state) {

  //get button
  var btn = document.getElementsByClassName('nav-c-toggle')[0];

  //check which rule to apply
  if (state) {

    //rotate button 90deg
    btn.style.transform = "rotate(90deg)";

  } else {

    //rotate button 0deg
    btn.style.transform = "rotate(0deg)";
  }

}

function hideMenu(){
  
   var state = document.getElementsByClassName("nav-c-ul")[0];

   if (state != null){

     state.style.display = 'none';

     animateButton(false);
   }
}
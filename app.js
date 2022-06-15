

const backgrounds = ["url(pics/restaurant.jpg)","url(pics/0171477.jpg)","url(pics/Chicken-Parmesan-Barbara-Bakes.jpg)"];
var backgroundNum = 1;

function hello(){
  var name = prompt("What is your name?");
  alert("Hello " + name + "! Welcome to Ristorante Italiano home page!");
}

function changeBackground(element){
  element.style.backgroundImage = backgrounds[backgroundNum % backgrounds.length];
  backgroundNum++;
}

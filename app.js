
var name = prompt("What is your name?");
alert("Hello " + name + "! Welcome to Ristorante Italiano home page!");
const backgrounds = ["url(pics/restaurant.jpg)","url(pics/0171477.jpg)","url(pics/Chicken-Parmesan-Barbara-Bakes.jpg)"];
var backgroundNum = 1;

function changeBackground(element){
  element.style.backgroundImage = backgrounds[backgroundNum % backgrounds.length];
  backgroundNum++;
}

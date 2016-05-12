'use strict';


var body = document.body;

for (var i = 0; i < 100; i++){
  var newDiv = document.createElement('div');
  body.appendChild(newDiv);
  newDiv.style.width = "10%";
  newDiv.style.cssFloat = "left";
  newDiv.style.paddingBottom = "10%";
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  newDiv.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
}
setInterval(function() {
  for (i = 0; i < body.children.length; i++) {
    var myThing = body.children[i];
    console.log(myThing);
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    myThing.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
  }
}, 5);
window.addEventListener("click", function() {
    alert("You clicked on the page!");
});

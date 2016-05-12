'use strict';


var body = document.body;
for (var i = 0; i < 81; i++){
  var newDiv = document.createElement('div');
  body.appendChild(newDiv);
  newDiv.style.width = "11.1%";
  newDiv.style.cssFloat = "left";
  newDiv.style.paddingBottom = "11.1%";
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  newDiv.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
}

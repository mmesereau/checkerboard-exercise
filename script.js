// Your JS goes here'use strict';
'use strict';

var red = 25;
var blue = 150;

var body = document.body;
for (var i = 0; i < 81; i++){
  var newDiv = document.createElement('div');
  body.appendChild(newDiv);
  newDiv.style.width = "11.1%";
  newDiv.style.cssFloat = "left";
  newDiv.style.paddingBottom = "11.1%";
  red += 3;
  if (i % 2 == 0) {
    var green = 100;
  }
  else {
    var green = 130;
  }
//this is a comment
  newDiv.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
}

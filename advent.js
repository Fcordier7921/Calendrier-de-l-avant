
var i;
for (i = 0; i < 24; i++) {
  var circle = document.createElement('div');
  circle.className = "circle";
  circle.id = 'circle'+i;
  document.getElementById("app").appendChild(circle);
}

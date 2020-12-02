
let i;
for (i = 1; i < 24; i++) {
  let circle = document.createElement('div');
  circle.className = "jour";
  circle.id = 'jour'+i;
  
  document.getElementById("app").appendChild(circle);
}

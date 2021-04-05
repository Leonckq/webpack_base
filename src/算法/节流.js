var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {

  console.log(e);
  container.innerHTML = count++;
};
container.onmousemove = throttle(getUserAction, 1000);


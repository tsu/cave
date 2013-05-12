function init() {
  function tick() {
    frame++;
    if (ship.controls.left)
      ship.a -= 4;
    if (ship.controls.right)
      ship.a += 4;
    var e = document.getElementById("ship");
    e.setAttribute("transform", "translate("+ ship.x +","+ ship.y +") rotate("+ ship.a +")");
    if (frame<1000)
      setTimeout(tick, 50);
  }
  function keydown(e) {
    switch(e.keyCode) {
      case 65:
        ship.controls.left = true;
        break;
      case 68:
        ship.controls.right = true;
        break;
    }
  }
  function keyup(e) {
    switch(e.keyCode) {
      case 65:
        ship.controls.left = false;
        break;
      case 68:
        ship.controls.right = false;
        break;
    }
  }
  var frame = 0;
  var ship = {
    x: 200,
    y: 100,
    a: 0,
    controls: {
      left: false,
      right: false
    }
  };
  document.onkeydown = keydown;
  document.onkeyup = keyup;
  tick();
}

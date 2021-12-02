isGameActive = true
document.addEventListener('readystatechange', () => {
  if (document.readyState === 'complete') game();
})

function game() {
  var div = document.getElementById('border');
  for (var i = 0; i < 30; i++) { // строки
    for (var j = 0; j < 40; j++) { // столбца
      var newDiv = document.createElement('div');
      newDiv.id = `${i}  ${j}`;
      newDiv.classList.add('areabox');
      // newDiv.innerText = `${i}:${j}`;  
      newDiv.setAttribute('title', `Column - ${j} \nRow - ${i}`);
      div.appendChild(newDiv);

    }
  }
  function square() {
    for (var i = 0; i < 30; i++) { // строки
      if (i === 26 || i === 27 || i===25 || i==28 || i==24) {
        for (var j = 16; j < 20; j++) { 
          // столбцы
          document.getElementById(`${i}  ${j}`).classList.remove('areabox');
          document.getElementById(`${i}  ${j}`).classList.add('card');
        }
      }
    }
    if (isGameActive) { setTimeout(square, 1000); }
  }
  setTimeout(square, 1000);
  function moveRect(e) {

    var block = document.getElementById("card")
    var cs = window.getComputedStyle("card");

    var left = parseInt(cs.marginLeft);
    var top = parseInt(cs.marginTop);

    switch (e.key) {
      case "ArrowLeft": // нажатие клавиши влево
        if (left > 0)
          block.style.marginLeft = left - 10 + "px";
        break;
      case "ArrowTop":
        if (top > 0)
          blueRect.style.marginTop = top - 10 + "px";
        break;
      case "ArrowLeft":
        if (left > 0)
          block.style.marginLeft = left - 10 + "px";
    }
  }
}

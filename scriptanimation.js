isGameActive = true
document.addEventListener('readystatechange', () => {
  if (document.readyState === 'complete') game();
})

document.addEventListener('keyup', function (event) {
  console.log('Key: ', event.key);
  console.log('keyCode: ', event.keyCode);
});

const rowNumber = 30;
const columnNumber = 40;

const playerShape = [
  { x: 16, y: 26 },
  { x: 16, y: 27 },
  { x: 16, y: 28 },
  { x: 17, y: 26 },
  { x: 17, y: 27 },
  { x: 17, y: 28 },
];

let moveDirection = null;

const leftBorderX = 10;
const rightBorderX = 30;


function game() {
  var div = document.getElementById('border');
  for (var i = 0; i < rowNumber; i++) { // строки
    for (var j = 0; j < columnNumber; j++) { // столбца
      var newDiv = document.createElement('div');
      newDiv.id = `${i}  ${j}`;
      newDiv.classList.add('areabox');
      // newDiv.innerText = `${i}:${j}`;  
      newDiv.setAttribute('title', `Column - ${j} \nRow - ${i}`);
      div.appendChild(newDiv);

    }
  }
  // render left border
  for (let i = 0; i < rowNumber; i += 1) {
    document.getElementById(`${i}  ${leftBorderX}`).classList.remove('areabox');
    document.getElementById(`${i}  ${leftBorderX}`).classList.add('cell--border');
  }
  // render right border
  for (let i = 0; i < rowNumber; i += 1) {
    document.getElementById(`${i}  ${rightBorderX}`).classList.remove('areabox');
    document.getElementById(`${i}  ${rightBorderX}`).classList.add('cell--border');
  }

  function render() {
    // remove player from field
    for (const point of playerShape) {
      document.getElementById(`${point.y}  ${point.x}`).classList.remove('card');
      document.getElementById(`${point.y}  ${point.x}`).classList.add('areabox');
    }

    // move player
    
    if (moveDirection !== null) {
      for (const point of playerShape) {
        if (moveDirection === 'RIGHT') point.x += 1;
        else if (moveDirection === 'DOWN') point.y += 1;
        else if (moveDirection === 'LEFT') point.x -= 1;
        else if (moveDirection === 'UP') point.y -= 1;
        if (10 > playerShape > 0 ){
          document.getElementById(`${point.y}  ${point.x}`).classList.remove('areabox');
          document.getElementById(`${i}  ${leftBorderX}`).classList.add('cell--border');
        }
      }
    }
    // render player
    for (const point of playerShape) {
      document.getElementById(`${point.y}  ${point.x}`).classList.remove('areabox');
      document.getElementById(`${point.y}  ${point.x}`).classList.add('card');
    }

    if (isGameActive) { setTimeout(render, 1000); }
  }
  setTimeout(render, 1000);
}

document.addEventListener('keydown', function (event) {
  if (event.key == 'ArrowRight') moveDirection = 'RIGHT';
  else if (event.key == 'ArrowDown') moveDirection = 'DOWN';
  else if (event.key == 'ArrowLeft') moveDirection = 'LEFT';
  else if (event.key == 'ArrowUp') moveDirection = 'UP';
  else moveDirection = null;
});


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

const agr = [
  { x: 15, y: 15 },
  { x: 15, y: 16 },
  { x: 15, y: 17 },
  { x: 16, y: 15 },
  { x: 16, y: 16 },
  { x: 16, y: 17 },
];

const agr1 = [
  { x: 24, y: 15 },
  { x: 24, y: 16 },
  { x: 24, y: 17 },
  { x: 25, y: 15 },
  { x: 25, y: 16 },
  { x: 25, y: 17 },
];

const agr2 = [
  { x: 24, y: 5 },
  { x: 24, y: 6 },
  { x: 24, y: 7 },
  { x: 25, y: 5 },
  { x: 25, y: 6 },
  { x: 25, y: 7 },
];

const agr3 = [
  { x: 14, y: 5 },
  { x: 14, y: 6 },
  { x: 14, y: 7 },
  { x: 15, y: 5 },
  { x: 15, y: 6 },
  { x: 15, y: 7 },
];


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

    let gameOver = false;
    
    if (moveDirection !== null) {
      for (const point of playerShape) {
        if (moveDirection === 'RIGHT') point.x += 1;
        else if (moveDirection === 'DOWN') point.y += 1;
        else if (moveDirection === 'LEFT') point.x -= 1;
        else if (moveDirection === 'UP') point.y -= 1;
        
        document.getElementById(`${point.y}  ${point.x}`).classList.remove('areabox');
        document.getElementById(`${point.y}  ${point.x}`).classList.add('card');
        if (point.x <= leftBorderX || point.x >= rightBorderX) {
          gameOver = true;
        }
      }
      moveDirection = null;
    }

    if (gameOver) {
      alert("Game Over");
      location.reload();
    }


    // render player
    for (const point of playerShape) {
      document.getElementById(`${point.y}  ${point.x}`).classList.remove('areabox');
      document.getElementById(`${point.y}  ${point.x}`).classList.add('card');
    }
    // render agr player
    for (const point of agr) {
      document.getElementById(`${point.y}  ${point.x}`).classList.remove('areabox');
      document.getElementById(`${point.y}  ${point.x}`).classList.add('card1');
    }

    for (const point of agr1) {
      document.getElementById(`${point.y}  ${point.x}`).classList.remove('areabox');
      document.getElementById(`${point.y}  ${point.x}`).classList.add('card2');
    }

    for (const point of agr2) {
      document.getElementById(`${point.y}  ${point.x}`).classList.remove('areabox');
      document.getElementById(`${point.y}  ${point.x}`).classList.add('card3');
    }

    for (const point of agr3) {
      document.getElementById(`${point.y}  ${point.x}`).classList.remove('areabox');
      document.getElementById(`${point.y}  ${point.x}`).classList.add('card4');
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


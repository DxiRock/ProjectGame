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
  { x: 19, y: 26 },
  { x: 19, y: 27 },
  { x: 19, y: 28 },
  { x: 20, y: 26 },
  { x: 20, y: 27 },
  { x: 20, y: 28 },
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
  { x: 15, y: 5 },
  { x: 15, y: 6 },
  { x: 15, y: 7 },
  { x: 16, y: 5 },
  { x: 16, y: 6 },
  { x: 16, y: 7 },
];



const moveObject = (obj) => {
  for (const point of obj) {
    point.y += 3;
    if (point.y >= rowNumber) point.y = point.y - rowNumber; 
  }
}

//for(const agr of playerShape){
//if(agr > playerShape >= 0){
 //else if(point.x >= agr && point.x >= playerShape ) point.x {
//alert("Game Over");
 //}
//}


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
    document.getElementById(`${i}  ${rightBorderX}`).classList.remove('areabox');// находится ширина и высота границы
    document.getElementById(`${i}  ${rightBorderX}`).classList.add('cell--border');// 
  }

  function render() {
    // remove player from field
    for (const point of playerShape) {
      document.getElementById(`${point.y}  ${point.x}`).classList.remove('card');
      document.getElementById(`${point.y}  ${point.x}`).classList.add('areabox');
    }

    for (const point of agr) {
      document.getElementById(`${point.y}  ${point.x}`).classList.remove('card1');
      document.getElementById(`${point.y}  ${point.x}`).classList.add('areabox');
    }

    for (const point of agr1) {
      document.getElementById(`${point.y}  ${point.x}`).classList.remove('card2');
      document.getElementById(`${point.y}  ${point.x}`).classList.add('areabox');
    }

    for (const point of agr2) {
      document.getElementById(`${point.y}  ${point.x}`).classList.remove('card3');
      document.getElementById(`${point.y}  ${point.x}`).classList.add('areabox');
    }

    for (const point of agr3) {
      document.getElementById(`${point.y}  ${point.x}`).classList.remove('card4');
      document.getElementById(`${point.y}  ${point.x}`).classList.add('areabox');
    }


    //object movement

    moveObject(agr);
    moveObject(agr1);
    moveObject(agr2);
    moveObject(agr3);
   
    // generation next object
    let gameOver = false;

    if (moveDirection !== null) {
      for (const point of playerShape) {
        if (moveDirection === 'RIGHT') point.x += 3;
        else if (moveDirection === 'DOWN') point.y += 3;
        else if (moveDirection === 'LEFT') point.x -= 3;
        else if (moveDirection === 'UP') point.y -= 3;
        console.log("test keyboard");
        document.getElementById(`${point.y}  ${point.x}`).classList.remove('areabox');
        document.getElementById(`${point.y}  ${point.x}`).classList.add('card');

        if (point.x <= leftBorderX || point.x >= rightBorderX) {

          gameOver = true;
          console.log("dialog window is end game");
        }
      }
    }

    //if(playerShape <= agr <= 0){
    //alert("Game Over");
    //location.reload();
    //}

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


    // render time
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






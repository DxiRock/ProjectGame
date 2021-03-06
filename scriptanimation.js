let score = 0;
let maxY = 0;


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

const agr4 = [

  { x: 19, y: 3 },
  { x: 19, y: 4 },
  { x: 19, y: 5 },
  { x: 20, y: 3 },
  { x: 20, y: 4 },
  { x: 20, y: 5 },
];

const agr5 = [

  { x: 19, y: 8 },
  { x: 19, y: 9 },
  { x: 19, y: 10 },
  { x: 20, y: 8 },
  { x: 20, y: 9 },
  { x: 20, y: 10 },
];

const agr6 = [

  { x: 19, y: 14 },
  { x: 19, y: 15 },
  { x: 19, y: 16 },
  { x: 20, y: 14 },
  { x: 20, y: 15 },
  { x: 20, y: 16 },
];




const moveObject = (obj) => {
  for (const point of obj) {
    point.y += 3;
    if (point.y >= rowNumber) point.y = point.y - rowNumber;
  }
}


const checkCollisionWith = (obj) => {
  for (const point of obj) {
    for (const playerPoint of playerShape) {
      if (point.y === playerPoint.y && point.x === playerPoint.x) return true;
    }
  }
  return false;
}




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

    for (const point of agr4) {
      document.getElementById(`${point.y}  ${point.x}`).classList.remove('card5');
      document.getElementById(`${point.y}  ${point.x}`).classList.add('areabox');
    }


    for (const point of agr5) {
      document.getElementById(`${point.y}  ${point.x}`).classList.remove('card6');
      document.getElementById(`${point.y}  ${point.x}`).classList.add('areabox');
    }


    for (const point of agr6) {
      document.getElementById(`${point.y}  ${point.x}`).classList.remove('card7');
      document.getElementById(`${point.y}  ${point.x}`).classList.add('areabox');
    }



    //object movement
   
    moveObject(agr);
    moveObject(agr1);
    moveObject(agr2);
    moveObject(agr3);
    moveObject(agr4);
    moveObject(agr5);
    moveObject(agr6);

    // generation next object
    let gameOver = false;

    if (moveDirection !== null) {
      for (const point of playerShape) {
        if (moveDirection === 'RIGHT') point.x += 3;
        else if (moveDirection === 'DOWN') point.y += 3;
        else if (moveDirection === 'LEFT') point.x -= 3;
        else if (moveDirection === 'UP')  {
          score++;
          point.y -= 3;
        }
        console.log("test keyboard");
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
    gameOver = checkCollisionWith(agr) || checkCollisionWith(agr1) || checkCollisionWith(agr2) || checkCollisionWith(agr3);
  
  
  

    scoredlg();




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

    for (const point of agr4) {
      document.getElementById(`${point.y}  ${point.x}`).classList.remove('areabox');
      document.getElementById(`${point.y}  ${point.x}`).classList.add('card5');
    }

    for (const point of agr5) {
      document.getElementById(`${point.y}  ${point.x}`).classList.remove('areabox');
      document.getElementById(`${point.y}  ${point.x}`).classList.add('card6');
    }

    for (const point of agr6) {
      document.getElementById(`${point.y}  ${point.x}`).classList.remove('areabox');
      document.getElementById(`${point.y}  ${point.x}`).classList.add('card7');
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



function entername() {
  var name = prompt('Как Вас зовут ?');
  document.getElementById('name').innerText = `${name}`;
  
 
  
}
entername();



function scoredlg() {
  document.getElementById('score').innerText = `${score}`;
  


}

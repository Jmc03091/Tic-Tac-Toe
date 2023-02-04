const cells = document.querySelectorAll('.cell');
const para = document.querySelector('p');
const playerOneName = document.querySelector('#player1');
const playerTwoName = document.querySelector('#player2');
const container = document.querySelector('.container');

const nameBox = document.querySelector('.names');
const nameButton = document.querySelector('.nameButton');
const restart = document.querySelector('.restartMove');
const restartButton = document.querySelector('.restart');

let xCount = '';
let oCount = '';
let turn = 1; 

const gameboardObj = (() => {
  const gameboard = ['X', 'O'];
	       
  const printX = () => gameboard[0];
  const printO = () => gameboard[1];
  
  return { printX, printO }
  
})();

const wins = (() => {
  
  const wins = ['123', '132', '213', '231', '312', '321',
		'456', '465', '546', '564', '645', '654',
		'789', '798', '879', '897', '978', '987',
		'147', '174', '417', '471', '741', '714',
		'258', '285', '528', '582', '825', '852',
		'369', '396', '639', '693', '963', '936',
		'159', '195', '519', '591', '915', '951',
		'357', '375', '537', '573', '735', '753',
		'4258', '4519', '4537', '1963', '23657',
		'2147', '1258', '5865', '7689'
	       ];
	       
  const iterateWins = (value) => {
    
    const playerOne = Player(playerOneName.value)
    const playerTwo = Player(playerTwoName.value);
    
    for(let i of wins){
      
      if(xCount === i && value.textContent === "X"){
	para.textContent =  playerOne.displayName() + " wins!";
	restart.style.visibility = "visible";
	turn = -1;
      }
      else if(oCount === i && value.textContent === "O"){
	para.textContent = playerTwo.displayName() + " wins";
	restart.style.visibility = "visible";
	turn = -1;
      }
      else if(turn > 9 && xCount !== i && oCount !== i) {
	para.textContent = "It's a tie!";
	restart.style.visibility = "visible";
      }
      
    }
    
  }
  
  return { iterateWins };
  
})();
    
const Player = (name) => {

  const displayName = () => para.textContent = name;
  
  return { displayName }
};

const flowOfGame = (() =>  { 
  
  const playGame = () => {
    cells.forEach(cell => {
    cell.addEventListener('click', function(e){
      
      playerOne(cell);
      
      countMarker(cell);
      
      wins.iterateWins(cell);
      
      if(turn === 10) {
	e.preventDefault();
      }
      
      console.log(turn);
      console.log(xCount);
    });
  });
  }
  
  return { playGame };
  
})();

flowOfGame.playGame();

function countMarker(value) {
  
  for(let i of value.getAttribute('value')){
    
    if(i && value.textContent === "X") {
      xCount += i;
    }
    
    else if(i && value.textContent === "O"){
      oCount += i;
    }
    
  }
}

function playerOne(value) {
  
      if(value.textContent === "X" || value.textContent === "O"){
	turn = turn;
      }
  
      else if(turn === 1) {
	value.textContent = gameboardObj.printX();
	turn++;
      }
      
      else if(turn === 2 && value.textContent !== "X") {
	value.textContent = gameboardObj.printO();
	turn++;
      }
      else if(turn === 3 && value.textContent !== "O"){
	value.textContent = gameboardObj.printX();
	turn++;
      }
      else if(turn === 4 && value.textContent !== "X"){
	value.textContent = gameboardObj.printO();
	turn++;
      }
      else if(turn === 5 && value.textContent !== "O"){
	value.textContent = gameboardObj.printX();
	turn++;
      }
      else if(turn === 6 && value.textContent !== "X") {
	value.textContent = gameboardObj.printO();
	turn++;
      }
      else if(turn === 7 && value.textContent !== "O") {
	value.textContent = gameboardObj.printX();
	turn++;
      }
      else if(turn === 8 && value.textContent !== "X") {
	value.textContent = gameboardObj.printO();
	turn++;
      }
      else if(turn === 9 && value.textContent !== "O"){
	value.textContent = gameboardObj.printX();
	turn++;
      }
      
      
}

function clear() {
  
  cells.forEach(cell => {
    turn = 1;
    xCount = '';
    oCount = '';
    cell.textContent = '';
    para.textContent = '';
    restart.style.visibility = "hidden";
  });
  
}

restart.addEventListener('click', () => {
  clear();
});

nameButton.addEventListener('click', (e) => {
  if(playerOneName.value && playerTwoName.value) {
    nameBox.style.visibility = "hidden";
    container.style.visibility = "visible";
  }
  
});


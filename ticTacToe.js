const cells = document.querySelectorAll('.cell');
const cell1 = document.querySelector('.cell1');
const cell2 = document.querySelector('.cell2');

const gameboardObj = (() => {
  const gameboard = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X', 'O'];
  // make a loop later that splices the array until none are left;
  const printX = () => gameboard[0];
  const printO = () => gameboard[1];
  
  return {printX, printO}
  
})();


const Player = (name, marker) => {
  
  const displayPlayer1 = () => console.log(playerOne.marker);
  const displayPlayer2 = () => console.log(playerTwo.marker);
  
  const playerOne = {
    name: "Josh",
    marker: "X"
  }
  
  const playerTwo = {
    name: "Tim", 
    marker: "O"
  }
  
  return { displayPlayer1, displayPlayer2 };
  
};
/*
for reference later on. This is how a Factory Function is accessed.
const taco = Player();

taco.displayPlayer();
*/


const gameFlow = (() => {
  
  
})();


function updateDisplay() {
  "use strict"
  
  
  
}

function clickButton() {
  cells.forEach(cell => {
    cell.addEventListener('click', function() {
      
      const player = Player();
      
      
      cell.textContent = gameboardObj.printX();
      
      
    });
  });
}

clickButton();


  
  

	
	
	
  
  

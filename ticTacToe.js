

const gameboardObj = (() => {
  const gameboard = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X', 'O'];
  
  const cell1 = document.querySelector('#cell1');
  const cell2 = document.querySelector('#cell2');
  
  const printX = () => gameboard[0];
  const printO = () => gameboard[1];
  
  return {printX, printO}
  
})();


const Player = (name) => {
  
  const getName = () => name;
  
};

const gameFlow = (() => {
  
  
})();


function displayUpdate() {
  
  cell1.textContent = gameboardObj.printX();
  cell2.textContent = gameboardObj.printO();
  
  
}

displayUpdate();
  
  

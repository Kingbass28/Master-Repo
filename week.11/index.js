
const gameGrid = document.getElementById('gameGrid');
const turnHeading = document.getElementById('turnHeading');
const resetBtn = document.getElementById('resetBtn');
const alertContainer = document.getElementById('alertContainer');
const alertMessage = document.getElementById('alertMessage');

let board = Array(9).fill('');
let currentPlayer = 'X';
let gameActive = true;

const winPatterns = [
  [0,1,2], [3,4,5], [6,7,8], // rows
  [0,3,6], [1,4,7], [2,5,8], // columns
  [0,4,8], [2,4,6]           // diagonals
];

function renderGrid() {
  gameGrid.innerHTML = '';
  board.forEach((value, index) => {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.textContent = value;
    cell.dataset.index = index;
    cell.addEventListener('click', handleCellClick);
    gameGrid.appendChild(cell);
  });
}

function handleCellClick(e) {
  const index = e.target.dataset.index;

  if (!gameActive || board[index]) return;

  board[index] = currentPlayer;
  renderGrid();

  if (checkWinner(currentPlayer)) {
    showAlert(`${currentPlayer} wins!`);
    gameActive = false;
    return;
  }

  if (board.every(cell => cell !== '')) {
    showAlert("It's a draw!");
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  turnHeading.textContent = `Turn: ${currentPlayer}`;
}

function checkWinner(player) {
  return winPatterns.some(pattern =>
    pattern.every(index => board[index] === player)
  );
}

function showAlert(message) {
    alertMessage.textContent = message;
    alertContainer.classList.remove('d-none');
}
  
    
    alertContainer.onclick = () => {
      alertContainer.classList.add('d-none');
      resetGame();
}

function resetGame() {
  board = Array(9).fill('');
  currentPlayer = 'X';
  gameActive = true;
  renderGrid();
  turnHeading.textContent = `Turn: ${currentPlayer}`;
  alertContainer.classList.add('d-none');
}

renderGrid();
resetBtn.addEventListener('click', resetGame);

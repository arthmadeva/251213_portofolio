const board = document.getElementById("game-board");
const scoreDisplay = document.getElementById("score");
const startBtn = document.getElementById("startBtn");

const width = 10;
const height = 20;
let cells = [];
let score = 0;

// Buat grid
for(let i = 0; i < width * height; i++){
  const div = document.createElement("div");
  div.classList.add("cell");
  board.appendChild(div);
  cells.push(div);
}

// Tetromino (O)
const O_Tetromino = [
  [0,1,width,width+1]
];

let currentPosition = 4;
let currentRotation = 0;
let timerId = null;

function draw(){
  O_Tetromino[currentRotation].forEach(index => {
    cells[currentPosition + index].classList.add("active");
  });
}

function undraw(){
  O_Tetromino[currentRotation].forEach(index => {
    cells[currentPosition + index].classList.remove("active");
  });
}

function moveDown(){
  undraw();
  currentPosition += width;
  draw();
  freeze();
}

function freeze(){
  if(O_Tetromino[currentRotation].some(index => 
      cells[currentPosition + index + width]?.classList.contains("taken")
    )){
    O_Tetromino[currentRotation].forEach(index => {
      cells[currentPosition + index].classList.add("taken");
    });
    currentPosition = 4; // reset ke atas
    draw();
    addScore();
  }
}

function addScore(){
  score += 10;
  scoreDisplay.textContent = score;
}

// Tombol start
startBtn.addEventListener("click", () => {

  if(!timerId){
    draw(); // pastikan brick muncul pertama kali
    timerId = setInterval(moveDown, 1000);
    startBtn.disabled = true;
  }
});

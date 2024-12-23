let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;

const messageElement = document.getElementById("message");

function makeMove(index) {
    if (gameOver || gameBoard[index] !== "") return;

    gameBoard[index] = currentPlayer;
    document.getElementById(`cell-${index}`).innerText = currentPlayer;

    if (checkWinner()) {
        messageElement.innerText = `${currentPlayer} G'alaba qozondi!`;
        gameOver = true;
    } else if (gameBoard.every(cell => cell !== "")) {
        messageElement.innerText = "Durang!";
        gameOver = true;
    } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return true;
        }
    }
    return false;
}

function resetGame() {
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameOver = false;
    messageElement.innerText = "";
    for (let i = 0; i < 9; i++) {
        document.getElementById(`cell-${i}`).innerText = "";
    }
}

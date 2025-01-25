import React, { useState, useEffect } from "react";

const generateBoard = (difficulty: "easy" | "medium" | "hard") => {
  const board = Array.from({ length: 9 }, () => Array(9).fill(""));

  const solveBoard = (b: string[][]): boolean => {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (b[row][col] === "") {
          for (let num = 1; num <= 9; num++) {
            if (isValid(b, row, col, num.toString())) {
              b[row][col] = num.toString();
              if (solveBoard(b)) {
                return true;
              }
              b[row][col] = "";
            }
          }
          return false;
        }
      }
    }
    return true;
  };

  const createPuzzle = (b: string[][], fillCount: number) => {
    const puzzle = b.map(row => row.slice());
    let removed = 81 - fillCount;

    while (removed > 0) {
      const row = Math.floor(Math.random() * 9);
      const col = Math.floor(Math.random() * 9);
      if (puzzle[row][col] !== "") {
        puzzle[row][col] = "";
        removed--;
      }
    }

    return puzzle;
  };

  solveBoard(board);
  const fillCount = difficulty === "easy" ? 40 : difficulty === "medium" ? 30 : 18;
  return createPuzzle(board, fillCount);
};

const isValid = (board: string[][], row: number, col: number, value: string): boolean => {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === value) return false;
  }

  for (let i = 0; i < 9; i++) {
    if (board[i][col] === value) return false;
  }

  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[startRow + i][startCol + j] === value) return false;
    }
  }

  return true;
};

const Sudoku: React.FC = () => {
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">("easy");
  const [board, setBoard] = useState(generateBoard(difficulty));
  const [originalBoard, setOriginalBoard] = useState(board);
  const [error, setError] = useState("");
  const [mistakes, setMistakes] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWinner, setIsWinner] = useState(false);

  useEffect(() => {
    const newBoard = generateBoard(difficulty);
    setBoard(newBoard);
    setOriginalBoard(newBoard);
    setError("");
    setMistakes(0);
    setIsGameOver(false);
    setIsWinner(false);
  }, [difficulty]);

  const handleChange = (row: number, col: number, value: string) => {
    if (!/^[1-9]?$/.test(value)) {
      setError("Only numbers 1-9 are allowed.");
      return;
    }

    if (originalBoard[row][col] !== "") {
      return;
    }

    setError("");
    if (value === "" || isValid(board, row, col, value)) {
      const newBoard = board.map((r, i) =>
        r.map((cell, j) => (i === row && j === col ? value : cell))
      );
      setBoard(newBoard);

      // Check if the board is complete
      if (newBoard.every((r) => r.every((cell) => cell !== ""))) {
        setIsWinner(true);
        setIsGameOver(true);
      }
    } else {
      setError("Invalid move. Violates Sudoku rules.");
      setMistakes((prev) => {
        const newMistakes = prev + 1;
        if (newMistakes >= 5) {
          setIsGameOver(true);
        }
        return newMistakes;
      });
    }
  };

  const handleReset = () => {
    const newBoard = generateBoard(difficulty);
    setBoard(newBoard);
    setOriginalBoard(newBoard);
    setError("");
    setMistakes(0);
    setIsGameOver(false);
    setIsWinner(false);
  };

  const handlePlayAgain = () => {
    const newBoard = generateBoard(difficulty);
    setBoard(newBoard);
    setOriginalBoard(newBoard);
    setError("");
    setMistakes(0);
    setIsGameOver(false);
    setIsWinner(false);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Sudoku</h1>
      <div className="mb-4">
        <label className="mr-2">Select Difficulty:</label>
        <select
          className="border border-gray-400 px-2 py-1"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value as "easy" | "medium" | "hard")}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      {isGameOver ? (
        <div className="text-center">
          {isWinner ? (
            <h2 className="text-green-500 text-xl font-bold mb-4">Congratulations! You won!</h2>
          ) : (
            <h2 className="text-red-500 text-xl font-bold mb-4">You lost! Made 5 mistakes.</h2>
          )}
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handlePlayAgain}
          >
            Play Again
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-9 gap-1">
            {board.map((row, rowIndex) =>
              row.map((cell, colIndex) => (
                <input
                  key={`${rowIndex}-${colIndex}`}
                  className={`w-10 h-10 text-center border ${originalBoard[rowIndex][colIndex] ? "bg-gray-200" : "bg-white"}`}
                  value={cell}
                  onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
                  maxLength={1}
                  disabled={!!originalBoard[rowIndex][colIndex]}
                />
              ))
            )}
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <p className="text-red-500 mt-2">Mistakes: {mistakes}/5</p>
          <div className="mt-4 flex space-x-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Sudoku;

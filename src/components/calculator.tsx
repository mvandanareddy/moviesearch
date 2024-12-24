import React, { useState } from "react";

export const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [history, setHistory] = useState<string[]>([]);
  const handleClick = (value: string) => {
    setInput((prevInput) => prevInput + value);
    setHistory((prevInput) => [...prevInput, value]);
  };
  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("error");
    }
  };
  const handleClear = () => {
    setInput("");
    setHistory([]);
  };
  const handleUndo = () => {
    if (history.length > 0) {
      const lastValue = history.pop(); // Remove the last entered character from history
      setHistory([...history]); // Update history state without the last value
      setInput((prevInput) => prevInput.slice(0, -1)); // Remove the last character from input
    }
  };
  return (
    <div>
      <div>
        <div>
          <input
            style={{
              margin: "20px",
              borderColor: "black",
              borderWidth: "2px",
              padding: "10px",
            }}
            value={input}
          />
          <button
            onClick={handleClear}
            style={{
              backgroundColor: "lightblue",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            clear
          </button>
        </div>
      </div>
      <div style={{ margin: "10px" }}>
        <button
          onClick={() => handleClick("1")}
          style={{
            backgroundColor: "pink",
            padding: "20px",
            borderRadius: "5px",
            margin: "10px",
          }}
        >
          1
        </button>
        <button
          onClick={() => handleClick("2")}
          style={{
            backgroundColor: "pink",
            padding: "20px",
            borderRadius: "5px",
            margin: "10px",
          }}
        >
          2
        </button>
        <button
          onClick={() => handleClick("3")}
          style={{
            backgroundColor: "pink",
            padding: "20px",
            borderRadius: "5px",
            margin: "10px",
          }}
        >
          3
        </button>
        <button
          onClick={() => handleClick("+")}
          style={{
            backgroundColor: "pink",
            padding: "20px",
            borderRadius: "5px",
            margin: "10px",
          }}
        >
          +
        </button>
      </div>
      <div style={{ margin: "10px" }}>
        <button
          onClick={() => handleClick("4")}
          style={{
            backgroundColor: "pink",
            padding: "20px",
            borderRadius: "5px",
            margin: "10px",
          }}
        >
          4
        </button>
        <button
          onClick={() => handleClick("5")}
          style={{
            backgroundColor: "pink",
            padding: "20px",
            borderRadius: "5px",
            margin: "10px",
          }}
        >
          5
        </button>
        <button
          onClick={() => handleClick("6")}
          style={{
            backgroundColor: "pink",
            padding: "20px",
            borderRadius: "5px",
            margin: "10px",
          }}
        >
          6
        </button>
        <button
          onClick={() => handleClick("-")}
          style={{
            backgroundColor: "pink",
            padding: "20px",
            borderRadius: "5px",
            margin: "10px",
          }}
        >
          -
        </button>
      </div>
      <div style={{ margin: "10px" }}>
        <button
          onClick={() => handleClick("7")}
          style={{
            backgroundColor: "pink",
            padding: "20px",
            borderRadius: "5px",
            margin: "10px",
          }}
        >
          7
        </button>
        <button
          onClick={() => handleClick("8")}
          style={{
            backgroundColor: "pink",
            padding: "20px",
            borderRadius: "5px",
            margin: "10px",
          }}
        >
          8
        </button>
        <button
          onClick={() => handleClick("9")}
          style={{
            backgroundColor: "pink",
            padding: "20px",
            borderRadius: "5px",
            margin: "10px",
          }}
        >
          9
        </button>
        <button
          onClick={() => handleClick("*")}
          style={{
            backgroundColor: "pink",
            padding: "20px",
            borderRadius: "5px",
            margin: "10px",
          }}
        >
          *
        </button>
      </div>
      <div style={{ margin: "10px" }}>
        <button
          onClick={() => handleClick(".")}
          style={{
            backgroundColor: "pink",
            padding: "20px",
            borderRadius: "5px",
            margin: "10px",
          }}
        >
          .
        </button>
        <button
          onClick={() => handleClick("/")}
          style={{
            backgroundColor: "pink",
            padding: "20px",
            borderRadius: "5px",
            margin: "10px",
          }}
        >
          /
        </button>
        <button
          onClick={() => handleClick("0")}
          style={{
            backgroundColor: "pink",
            padding: "20px",
            borderRadius: "5px",
            margin: "10px",
            width: "125px",
          }}
        >
          0
        </button>
      </div>
      <div style={{ margin: "10px" }}>
        <button
          onClick={() => handleClick("%")}
          style={{
            backgroundColor: "pink",
            padding: "20px",
            borderRadius: "5px",
            margin: "10px",
          }}
        >
          %
        </button>
        <button
          onClick={handleCalculate}
          style={{
            backgroundColor: "pink",
            padding: "20px",
            borderRadius: "5px",
            margin: "10px",
          }}
        >
          =
        </button>
        <button
          style={{
            backgroundColor: "pink",
            padding: "20px",
            borderRadius: "5px",
            margin: "10px",
            width: "110px",
          }}
          onClick={handleUndo}
          disabled={history.length === 0}
        >
          undo
        </button>
      </div>
    </div>
  );
};

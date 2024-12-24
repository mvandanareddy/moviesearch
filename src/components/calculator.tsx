// import React, { useState } from "react";

// export const Calculator: React.FC = () => {
//   const [input, setInput] = useState<string>("");
//   const [history, setHistory] = useState<string[]>([]);
//   const handleClick = (value: string) => {
//     setInput((prevInput) => prevInput + value);
//     setHistory((prevInput) => [...prevInput, value]);
//   };
//   const handleCalculate = () => {
//     try {
//       setInput(eval(input).toString());
//     } catch {
//       setInput("error");
//     }
//   };
//   const handleClear = () => {
//     setInput("");
//     setHistory([]);
//   };
//   const handleUndo = () => {
//     if (history.length > 0) {
//       const lastValue = history.pop(); // Remove the last entered character from history
//       setHistory([...history]); // Update history state without the last value
//       setInput((prevInput) => prevInput.slice(0, -1)); // Remove the last character from input
//     }
//   };
//   return (
//     <div>
//       <div>
//         <div>
//           <input
//             style={{
//               margin: "20px",
//               borderColor: "black",
//               borderWidth: "2px",
//               padding: "10px",
//             }}
//             value={input}
//           />
//           <button
//             onClick={handleClear}
//             style={{
//               backgroundColor: "lightblue",
//               padding: "10px",
//               borderRadius: "5px",
//             }}
//           >
//             clear
//           </button>
//         </div>
//       </div>
//       <div style={{ margin: "10px" }}>
//         <button
//           onClick={() => handleClick("1")}
//           style={{
//             backgroundColor: "pink",
//             padding: "20px",
//             borderRadius: "5px",
//             margin: "10px",
//           }}
//         >
//           1
//         </button>
//         <button
//           onClick={() => handleClick("2")}
//           style={{
//             backgroundColor: "pink",
//             padding: "20px",
//             borderRadius: "5px",
//             margin: "10px",
//           }}
//         >
//           2
//         </button>
//         <button
//           onClick={() => handleClick("3")}
//           style={{
//             backgroundColor: "pink",
//             padding: "20px",
//             borderRadius: "5px",
//             margin: "10px",
//           }}
//         >
//           3
//         </button>
//         <button
//           onClick={() => handleClick("+")}
//           style={{
//             backgroundColor: "pink",
//             padding: "20px",
//             borderRadius: "5px",
//             margin: "10px",
//           }}
//         >
//           +
//         </button>
//       </div>
//       <div style={{ margin: "10px" }}>
//         <button
//           onClick={() => handleClick("4")}
//           style={{
//             backgroundColor: "pink",
//             padding: "20px",
//             borderRadius: "5px",
//             margin: "10px",
//           }}
//         >
//           4
//         </button>
//         <button
//           onClick={() => handleClick("5")}
//           style={{
//             backgroundColor: "pink",
//             padding: "20px",
//             borderRadius: "5px",
//             margin: "10px",
//           }}
//         >
//           5
//         </button>
//         <button
//           onClick={() => handleClick("6")}
//           style={{
//             backgroundColor: "pink",
//             padding: "20px",
//             borderRadius: "5px",
//             margin: "10px",
//           }}
//         >
//           6
//         </button>
//         <button
//           onClick={() => handleClick("-")}
//           style={{
//             backgroundColor: "pink",
//             padding: "20px",
//             borderRadius: "5px",
//             margin: "10px",
//           }}
//         >
//           -
//         </button>
//       </div>
//       <div style={{ margin: "10px" }}>
//         <button
//           onClick={() => handleClick("7")}
//           style={{
//             backgroundColor: "pink",
//             padding: "20px",
//             borderRadius: "5px",
//             margin: "10px",
//           }}
//         >
//           7
//         </button>
//         <button
//           onClick={() => handleClick("8")}
//           style={{
//             backgroundColor: "pink",
//             padding: "20px",
//             borderRadius: "5px",
//             margin: "10px",
//           }}
//         >
//           8
//         </button>
//         <button
//           onClick={() => handleClick("9")}
//           style={{
//             backgroundColor: "pink",
//             padding: "20px",
//             borderRadius: "5px",
//             margin: "10px",
//           }}
//         >
//           9
//         </button>
//         <button
//           onClick={() => handleClick("*")}
//           style={{
//             backgroundColor: "pink",
//             padding: "20px",
//             borderRadius: "5px",
//             margin: "10px",
//           }}
//         >
//           *
//         </button>
//       </div>
//       <div style={{ margin: "10px" }}>
//         <button
//           onClick={() => handleClick(".")}
//           style={{
//             backgroundColor: "pink",
//             padding: "20px",
//             borderRadius: "5px",
//             margin: "10px",
//           }}
//         >
//           .
//         </button>
//         <button
//           onClick={() => handleClick("/")}
//           style={{
//             backgroundColor: "pink",
//             padding: "20px",
//             borderRadius: "5px",
//             margin: "10px",
//           }}
//         >
//           /
//         </button>
//         <button
//           onClick={() => handleClick("0")}
//           style={{
//             backgroundColor: "pink",
//             padding: "20px",
//             borderRadius: "5px",
//             margin: "10px",
//             width: "125px",
//           }}
//         >
//           0
//         </button>
//       </div>
//       <div style={{ margin: "10px" }}>
//         <button
//           onClick={() => handleClick("%")}
//           style={{
//             backgroundColor: "pink",
//             padding: "20px",
//             borderRadius: "5px",
//             margin: "10px",
//           }}
//         >
//           %
//         </button>
//         <button
//           onClick={handleCalculate}
//           style={{
//             backgroundColor: "pink",
//             padding: "20px",
//             borderRadius: "5px",
//             margin: "10px",
//           }}
//         >
//           =
//         </button>
//         <button
//           style={{
//             backgroundColor: "pink",
//             padding: "20px",
//             borderRadius: "5px",
//             margin: "10px",
//             width: "110px",
//           }}
//           onClick={handleUndo}
//           disabled={history.length === 0}
//         >
//           undo
//         </button>
//       </div>
//     </div>
//   );
// };
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
      setInput("Error");
    }
  };

  const handleClear = () => {
    setInput("");
    setHistory([]);
  };

  const handleUndo = () => {
    if (history.length > 0) {
      history.pop();
      setHistory([...history]);
      setInput((prevInput) => prevInput.slice(0, -1));
    }
  };

  return (
    <div
      style={{
        fontFamily: "'Roboto', sans-serif",
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#f9f9f9",
      }}
    >
      <div
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "20px",
          color: "#333",
        }}
      >
        Calculator
      </div>
      <input
        style={{
          width: "100%",
          padding: "15px",
          fontSize: "18px",
          marginBottom: "20px",
          borderRadius: "5px",
          border: "1px solid #ddd",
          boxSizing: "border-box",
          textAlign: "right",
        }}
        value={input}
        readOnly
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
        }}
      >
        {/* Buttons */}
        {["7", "8", "9", "/"].map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
            style={{
              padding: "15px",
              fontSize: "18px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#4CAF50",
              color: "white",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#45a049")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#4CAF50")
            }
          >
            {btn}
          </button>
        ))}
        {["4", "5", "6", "*"].map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
            style={{
              padding: "15px",
              fontSize: "18px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#4CAF50",
              color: "white",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#45a049")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#4CAF50")
            }
          >
            {btn}
          </button>
        ))}
        {["1", "2", "3", "-"].map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
            style={{
              padding: "15px",
              fontSize: "18px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#4CAF50",
              color: "white",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#45a049")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#4CAF50")
            }
          >
            {btn}
          </button>
        ))}
        {["0", ".", "%", "+"].map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
            style={{
              padding: "15px",
              fontSize: "18px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#4CAF50",
              color: "white",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#45a049")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#4CAF50")
            }
          >
            {btn}
          </button>
        ))}
        <button
          onClick={handleClear}
          style={{
            gridColumn: "span 2",
            padding: "15px",
            fontSize: "18px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#f44336",
            color: "white",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#e53935")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#f44336")
          }
        >
          Clear
        </button>
        <button
          onClick={handleUndo}
          style={{
            padding: "15px",
            fontSize: "18px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#FF9800",
            color: "white",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#fb8c00")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#FF9800")
          }
        >
          Undo
        </button>
        <button
          onClick={handleCalculate}
          style={{
            padding: "15px",
            fontSize: "18px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#4CAF50",
            color: "white",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#45a049")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#4CAF50")
          }
        >
          =
        </button>
      </div>
    </div>
  );
};

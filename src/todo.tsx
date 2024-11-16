import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
export interface Todo {
  name: string;
}
export const App = () => {
  const [value, setValue] = useState<string>("");
  const [todo, setTodo] = useState<Todo[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const addValue = () => {
    if (value.trim() !== "") {
      setTodo([...todo, { name: value }]);
      setValue("");
    }
  };
  const deleteTodo = (index: number) => {
    setTodo(todo.filter((_, i) => i !== index)); // Remove todo at the specified index
  };
  return (
    <StrictMode>
      {/* <App /> */}
      <div>
        <input
          placeholder=" sender email"
          type="email"
          style={{
            borderColor: "black",
            borderWidth: "2px",
            padding: "10px",
            margin: "10px",
          }}
          value={value}
          onChange={handleChange}
        />
        <button
          color="blue"
          style={{
            background: "blue",
            padding: "20px",
            borderRadius: "15px",
            margin: "10px",
          }}
          onClick={addValue}
        >
          add
        </button>
        <ul>
          {todo.map((todo, index) => (
            <div style={{ display: "flex" }}>
              <li key={index}>{todo.name}</li>
              <button
                style={{
                  background: "orange",
                  borderRadius: "3px",
                  padding: "5px",
                  marginLeft: "10px",
                }}
                onClick={() => deleteTodo(index)}
              >
                del
              </button>
            </div>
          ))}
        </ul>
      </div>
    </StrictMode>
  );
};
createRoot(document.getElementById("root")!).render(<App />);

import React, { useState } from "react";
export const Average: React.FC = () => {
  const [value, setValue] = useState<number>(0);
  const [values, setValues] = useState<number[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [avg, setAvg] = useState<number>(0);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value)); // Update the state with the new value from input
  };
  const handleAdd = () => {
    setValues((prevValues) => [...prevValues, value]); // Add the current value to the array
    setValue(0);
    setTotal(value + total);
  };
  const handleAverage = () => {
    if (values.length === 0) return 0;
    else {
      setAvg(total / values.length);
    }
  };
  const handleClear = () => {
    setAvg(0);
    setTotal(0);
  };
  return (
    <div style={{ gap: "20px", display: "flex", margin: "20px" }}>
      <input
        placeholder="enter a number here"
        type="number"
        value={value}
        onChange={handleInputChange}
        style={{
          borderWidth: "2px",
          borderColor: "red",
          borderRadius: "10px",
          padding: "5px",
          width: "350px",
        }}
      />
      <button
        style={{
          backgroundColor: "blue",
          padding: "10px",
          borderRadius: "5px",
          color: "white",
        }}
        onClick={handleAdd}
      >
        Add
      </button>
      <button
        style={{
          backgroundColor: "pink",
          padding: "10px",
          borderRadius: "5px",
        }}
        onClick={handleAverage}
      >
        Avg
      </button>
      <button
        style={{
          backgroundColor: "red",
          padding: "10px",
          borderRadius: "5px",
        }}
        onClick={handleClear}
      >
        Clear
      </button>
      <p>{total}</p>
      <p>{avg}</p>
    </div>
  );
};

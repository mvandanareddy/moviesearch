import React, { useState } from "react";

export const Todo: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [data, setData] = useState<string[]>([]);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleAdd = (value: string) => {
    setData((prevValue) => [...prevValue, value]);
    setValue("");
  };
  const handleDelete = (index: number) => {
    setData(data.filter((item, idx) => idx !== index));
  };
  const handkeEdit = () => {};
  return (
    <div>
      <div style={{ fontSize: "50px", textAlign: "center", color: "purple" }}>
        ToDo List
      </div>
      <div
        style={{
          margin: "10px",
          position: "absolute", // Position the div absolutely within its container
          left: "50%", // Position it halfway across the container
          transform: "translate(-50%, -50%)",
        }}
      >
        <input
          style={{
            borderWidth: "2px",
            borderColor: "black",
          }}
          onChange={handleInputChange}
          value={value}
        />
        <button onClick={() => handleAdd(value)}>add</button>
      </div>
      {data.map((value, index) => (
        <div key={index}>
          <table
            style={{
              borderWidth: "2px",
              margin: "10px",
              padding: "10px",
              gap: "10px",
              marginTop: "20px",
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr>
                <td>task</td>
                <td>action</td>
                <td>edit</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{value}</td>
                <td>
                  <button onClick={() => handleDelete(index)}>del</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(index)}>edit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

import React, { useState } from "react";

export const Todo: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [data, setData] = useState<string[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleAddOrUpdate = () => {
    if (editIndex !== null) {
      setData((prevData) =>
        prevData.map((item, index) => (index === editIndex ? value : item))
      );
      setEditIndex(null);
    } else {
      setData((prevValue) => [...prevValue, value]);
    }
    setValue("");
  };

  const handleDelete = (index: number) => {
    setData(data.filter((_, idx) => idx !== index));
  };

  const handleEdit = (index: number) => {
    setValue(data[index]);
    setEditIndex(index);
  };

  return (
    <div style={{ fontFamily: "Roboto, sans-serif", padding: "20px" }}>
      <div
        style={{
          fontSize: "40px",
          textAlign: "center",
          color: "#4A4A8C",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        ToDo List
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <input
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ddd",
            fontSize: "16px",
            width: "300px",
            marginRight: "10px",
          }}
          onChange={handleInputChange}
          value={value}
          placeholder="Enter your task"
        />
        <button
          onClick={handleAddOrUpdate}
          style={{
            padding: "10px 20px",
            backgroundColor: "#4A4A8C",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {data.length > 0 ? (
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <thead>
              <tr
                style={{
                  backgroundColor: "#4A4A8C",
                  color: "white",
                  textAlign: "left",
                }}
              >
                <th style={{ padding: "10px" }}>Task</th>
                <th style={{ padding: "10px" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((task, index) => (
                <tr
                  key={index}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff",
                  }}
                >
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                    {task}
                  </td>
                  <td
                    style={{
                      padding: "10px",
                      border: "1px solid #ddd",
                      display: "flex",
                      gap: "10px",
                    }}
                  >
                    <button
                      onClick={() => handleEdit(index)}
                      style={{
                        backgroundColor: "#FFC106",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        padding: "5px 10px",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      style={{
                        backgroundColor: "#DC3545",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        padding: "5px 10px",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div
            style={{
              textAlign: "center",
              fontSize: "18px",
              color: "#999",
              marginTop: "20px",
            }}
          >
            No tasks added. Start by adding a new task!
          </div>
        )}
      </div>
    </div>
  );
};

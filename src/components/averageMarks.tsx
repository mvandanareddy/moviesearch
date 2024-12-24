import React, { useState } from "react";
export interface Data {
  maths: number;
  science: number;
  english: number;
  telugu: number;
}
export const AverageMarks: React.FC = () => {
  const [data, setData] = useState<Data>({
    maths: 0,
    science: 0,
    english: 0,
    telugu: 0,
  });
  const [avg, setAvg] = useState<number>();
  const [error, setError] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value ? parseFloat(value) : 0,
    }));
  };
  const handleCheckAvg = () => {
    if (
      data.english <= 100 ||
      data.maths <= 100 ||
      data.science <= 100 ||
      data.telugu <= 100
    ) {
      setError("marks should be valid it should 100 or less");
    } else {
      const total = data.english + data.maths + data.science + data.telugu;
      setAvg(total / 4);
    }

    setData({
      maths: 0,
      science: 0,
      english: 0,
      telugu: 0,
    });
  };
  return (
    <div
      style={{ gap: "20px", margin: "20px", display: "grid", width: "600px" }}
    >
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        placeholder="enter maths marks"
        type="number"
        name="maths"
        value={data.maths}
        onChange={handleInputChange}
        style={{
          borderWidth: "2px",
          padding: "5px",
          borderColor: "blue",
          borderRadius: "5px",
        }}
      />
      <input
        placeholder="enter science marks"
        type="number"
        onChange={handleInputChange}
        value={data.science}
        name="science"
        style={{
          borderWidth: "2px",
          padding: "5px",
          borderColor: "blue",
          borderRadius: "5px",
        }}
      />
      <input
        placeholder="enter english marks"
        type="number"
        value={data.english}
        name="english"
        onChange={handleInputChange}
        style={{
          borderWidth: "2px",
          padding: "5px",
          borderColor: "blue",
          borderRadius: "5px",
        }}
      />
      <input
        placeholder="enter telugu marks"
        type="number"
        value={data.telugu}
        name="telugu"
        onChange={handleInputChange}
        style={{
          borderWidth: "2px",
          padding: "5px",
          borderColor: "blue",
          borderRadius: "5px",
        }}
      />
      <button
        style={{ backgroundColor: "red", padding: "10px", borderRadius: "8px" }}
        onClick={handleCheckAvg}
      >
        Check Average
      </button>
      <p>{avg}</p>
    </div>
  );
};

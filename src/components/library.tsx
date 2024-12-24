import React, { useState } from "react";

// Define an interface for the form data
export interface BooKList {
  author: string;
  bookName: string;
  year: string;
  price: string;
}

export const Library: React.FC = () => {
  // State for form data
  const [formData, setFormData] = useState<BooKList>({
    author: "",
    bookName: "",
    year: "",
    price: "",
  });

  // State for the list of books
  const [books, setBooks] = useState<BooKList[]>([]);

  // State to store validation errors
  const [errors, setErrors] = useState<string[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  // Handle input change for form fields
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Update the correct field in the state
    }));
  };

  // Validate form fields and return if the form is valid
  const validateForm = (): boolean => {
    const newErrors: string[] = [];

    // Check for missing fields
    if (!formData.author) newErrors.push("AuthorName is required.");
    if (!formData.bookName) newErrors.push("BookName is required.");
    if (!formData.year) newErrors.push("Published year is required.");
    if (!formData.price) newErrors.push("Price is required.");

    // Update the errors state
    setErrors(newErrors);

    // If there are no errors, return true, meaning the form is valid
    return newErrors.length === 0;
  };

  // Handle form submission
  const handleSubmit = () => {
    // Only proceed if the form is valid
    if (validateForm()) {
      if (editIndex !== null) {
        const updateBooks = [...books];
        updateBooks[editIndex] = formData;
        setBooks(updateBooks);
        setEditIndex(null);
      }
      // Add the form data to the books list
      else {
        setBooks((prevList) => [...prevList, formData]);
      }

      // Clear the form fields
      setFormData({
        author: "",
        bookName: "",
        year: "",
        price: "",
      });

      // Clear the error messages
      setErrors([]);
    }
  };
  const handleDelete = (index: number) => {
    setBooks(books.filter((_, i) => i! == index));
  };
  const handleEdit = (index: number) => {
    setFormData(books[index]);
    setEditIndex(index);
  };
  return (
    <div style={{ display: "grid", gap: "50px", margin: "20px" }}>
      {/* Error message display */}
      {errors.length > 0 && (
        <div style={{ color: "red", marginBottom: "20px" }}>
          {errors.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}

      <div style={{ gap: "10px" }}>
        <label>AuthorName</label>
        <input
          placeholder="enter name"
          name="author"
          type="text"
          value={formData.author}
          required
          onChange={handleInputChange}
          style={{
            borderWidth: "2px",
            borderColor: "red",
            borderRadius: "10px",
            padding: "5px",
            width: "350px",
          }}
        />
      </div>

      <div>
        <label>BookName</label>
        <input
          placeholder="enter book"
          type="text"
          name="bookName"
          required
          value={formData.bookName}
          onChange={handleInputChange}
          style={{
            borderWidth: "2px",
            borderColor: "red",
            borderRadius: "10px",
            padding: "5px",
            width: "350px",
          }}
        />
      </div>

      <div>
        <label>Published Year</label>
        <input
          placeholder="year of publish"
          type="date"
          name="year"
          required
          value={formData.year}
          onChange={handleInputChange}
          style={{
            borderWidth: "2px",
            borderColor: "red",
            borderRadius: "10px",
            padding: "5px",
            width: "350px",
          }}
        />
      </div>

      <div>
        <label>Book Price</label>
        <input
          placeholder="price"
          type="number"
          required
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          style={{
            borderWidth: "2px",
            borderColor: "red",
            borderRadius: "10px",
            padding: "5px",
            width: "350px",
          }}
        />
      </div>
      <button
        style={{
          backgroundColor: "blue",
          padding: "5px",
          width: "100px",
          color: "white",
          borderRadius: "7px",
        }}
        onClick={handleSubmit}
      >
        submit
      </button>
      <div>
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
            <tr style={{ margin: "20px", gap: "70px" }}>
              <td>AuthorName</td>
              <td>BookName</td>
              <td>Published Year</td>
              <td>Book Price</td>
              <td>Delete</td>
              <td>Edit</td>
            </tr>
          </thead>
          <tbody style={{ borderWidth: "2px" }}>
            {books.map((item, index) => (
              <tr key={index} style={{ borderWidth: "2px" }}>
                <td>{item.author}</td>
                <td>{item.bookName}</td>
                <td>{item.year}</td>
                <td>{item.price}</td>
                <td>
                  <button onClick={() => handleDelete(index)}>delete</button>
                </td>
                <td>
                  <button onClick={() => handleEdit(index)}>edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

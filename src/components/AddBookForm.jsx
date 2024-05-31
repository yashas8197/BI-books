import { useState } from "react";

const AddBookForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publishedYear: "",
    genre: "",
    language: "",
    country: "",
    rating: "",
    summary: "",
    coverImageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]:
        name === "publishedYear" || name === "rating" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://d04d69ac-c233-4ab4-bced-b94f636394aa-00-15shw5bbnt4z0.worf.replit.dev/books",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Failed to add book: ${errorData.message}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error adding book:", error.message);
      console.error("Response status:", error.response?.status);
      console.error("Response body:", error.response?.data);
    }
  };

  return (
    <div>
      <h1>Add New Movie</h1>
      <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <br />
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={formData.title}
        />
        <br />
        <br />
        <label>Author: </label>
        <br />
        <input
          type="text"
          name="author"
          onChange={handleChange}
          value={formData.author}
        />
        <br />
        <br />
        <label>published Year: </label>
        <br />
        <input
          type="number"
          name="publishedYear"
          onChange={handleChange}
          value={formData.publishedYear}
        />
        <br />
        <br />
        <label>Genre: </label>
        <br />
        <input
          type="text"
          name="genre"
          onChange={handleChange}
          value={formData.genre}
        />
        <br />
        <br />
        <label>language: </label>
        <br />
        <input
          type="text"
          name="language"
          onChange={handleChange}
          value={formData.language}
        />
        <br />
        <br />
        <label>country: </label>
        <br />
        <input
          type="text"
          name="country"
          onChange={handleChange}
          value={formData.country}
        />
        <br />
        <br />
        <label>rating: </label>
        <br />
        <input
          type="number"
          name="rating"
          onChange={handleChange}
          value={formData.rating}
        />
        <br />
        <br />
        <label>summary: </label>
        <br />
        <input
          type="text"
          name="summary"
          onChange={handleChange}
          value={formData.summary}
        />
        <br />
        <br />
        <label>coverImageUrl: </label>
        <br />
        <input
          type="text"
          name="coverImageUrl"
          onChange={handleChange}
          value={formData.coverImageUrl}
        />
        <br />
        <br />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookForm;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateListing() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    image: ""
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("You must be logged in");

      const res = await axios.post(
        "https://mini-travel-experience-listing-plat-omega.vercel.app/api/createListing",
        form,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        }
      );

      setMessage("Listing created successfully!");
      // Redirect to listings page
      navigate("/");
    } catch (err) {
      console.error("Error creating listing:", err);
      setMessage(err.response?.data?.error || "Failed to create listing");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Create New Listing</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Create Listing</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default CreateListing;
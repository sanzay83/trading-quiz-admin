import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddQuestion.scss";
import { API_URL } from "../config";

function AddStudyMaterial() {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [exampleimage, setExampleImage] = useState("");
  const [exampleimage2, setExampleImage2] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const navigate = useNavigate();

  const handleAddStudyMaterial = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/study/items`, {
        title,
        thumbnail,
        exampleimage,
        exampleimage2,
        description,
        type,
        id,
      });
      navigate("/studyMaterial");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="add-question-container">
      <h2>Add Study Material</h2>
      <form onSubmit={handleAddStudyMaterial}>
        <div className="form-group">
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="id">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="question">Thumbnail:</label>
          <input
            type="text"
            id="thumbnail"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleimage">Example Image:</label>
          <input
            type="text"
            id="exampleimage"
            value={exampleimage}
            onChange={(e) => setExampleImage(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleimage2">Example Image2:</label>
          <input
            type="text"
            id="exampleimage2"
            value={exampleimage2}
            onChange={(e) => setExampleImage2(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Type:</label>
          <select
            name="type"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="P">Principle</option>
            <option value="C">Candlesticks</option>
            <option value="S">Trading Patterns</option>
            <option value="T">Smart Money Concept</option>
          </select>
        </div>
        <button type="submit">Add Study Material</button>
      </form>
    </div>
  );
}

export default AddStudyMaterial;

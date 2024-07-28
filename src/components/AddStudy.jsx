import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddQuestion.scss";

function AddStudyMaterial() {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [exampleimage, setExampleImage] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleAddStudyMaterial = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/study/items", {
        title,
        thumbnail,
        exampleimage,
        description,
        type,
        id,
      });
      setMessage("Add Study Material Successful");
      navigate("/studyMaterial");
    } catch (error) {
      setMessage("Study Material adding failed");
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
          <input
            type="text"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <button type="submit">Add Study Material</button>
      </form>
    </div>
  );
}

export default AddStudyMaterial;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_URL } from "../config";

function StudyMaterial() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchItems = async () => {
    try {
      const response = await axios.get(`${API_URL}/study/items`);
      setItems(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/study/items/${id}`);
    fetchItems();
  };

  return (
    <div className="item-list">
      <div className="title-section">
        <h2>Study Materials</h2>
        <Link className="addQuestion" to="/addStudy">
          Add Study Material
        </Link>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <span>ID: {item.id}</span> |<span>Title: {item.title}</span>
            <span>
              Thumbnail: <img src={item.thumbnail} alt="test" />
            </span>{" "}
            |
            <span>
              ExampleImage: <img src={item.exampleimage} alt="test" />
            </span>
            <span>Description: {item.description}</span>
            <span>Type: {item.type}</span>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudyMaterial;

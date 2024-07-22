import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Questions.scss";
import { Link } from "react-router-dom";

function Questions() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchItems = async () => {
    try {
      const response = await axios.get("http://localhost:3000/items");
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
    await axios.delete(`http://localhost:3000/items/${id}`);
    fetchItems();
  };

  return (
    <div className="item-list">
      <div className="title-section">
        <h2>Questions List</h2>
        <Link className="addQuestion" to="/addQuestion">
          Add Question
        </Link>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <span>ID: {item.id}</span> |
            <span>
              Question: <img src={item.question} alt="test" />
            </span>{" "}
            |
            <span>
              Answer: <img src={item.answer} alt="test" />
            </span>
            <span>Answer: {item.buysell}</span>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Questions;

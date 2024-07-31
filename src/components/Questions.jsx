import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Questions.scss";
import { Link } from "react-router-dom";
import { API_URL } from "../config";

function Questions() {
  const [items, setItems] = useState([]);
  const [difficulty, setDifficulty] = useState("easy");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`${API_URL}/${difficulty}/items`);
        setItems(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchItems();
  }, [difficulty, loading]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/${difficulty}/items/${id}`);
    setLoading(true);
  };

  const handleDifficulty = (value) => {
    setDifficulty(value);
  };

  return (
    <div className="item-list">
      <div className="title-section">
        <h2>Questions List</h2>
        <button onClick={() => handleDifficulty("easy")}>Easy</button>
        <button onClick={() => handleDifficulty("hard")}>Hard</button>
        <Link className="addQuestion" to="/addQuestion">
          Add Question
        </Link>
      </div>
      <div className="title-section">
        <div>ID</div>
        <div>Question</div> <div>Answer</div>
        <div>Answer</div> <div>Delete</div>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <span>{item.id}</span>
            <span>
              <img className="item-image" src={item.question} alt="test" />
            </span>

            <span>
              <img className="item-image" src={item.answer} alt="test" />
            </span>
            <span>{item.buysell === 0 ? "Sell" : "Buy"}</span>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Questions;
